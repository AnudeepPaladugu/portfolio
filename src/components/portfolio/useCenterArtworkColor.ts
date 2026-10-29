import { useEffect, type RefObject } from "react";

/**
 * Scroll-driven color reveal: the visual ROW of project artworks nearest the
 * viewport center gets a --art-gray value below 1. Rows are chosen by vertical
 * distance only, so outer cards in a multi-column grid are never unreachable;
 * every card in the active row shares the same value. rAF-throttled, no React
 * renders. Disabled under prefers-reduced-motion; hover/focus CSS still applies.
 */
export const ROW_TOLERANCE_PX = 48;

export type ArtworkBox = { top: number; height: number };

/** Groups boxes into visual rows and returns the indices of the row nearest centerY, plus its distance. */
export function pickCenterRow(boxes: ArtworkBox[], centerY: number) {
  const rows: { y: number; idx: number[] }[] = [];
  boxes.forEach((b, i) => {
    const y = b.top + b.height / 2;
    const row = rows.find(r => Math.abs(r.y - y) < ROW_TOLERANCE_PX);
    if (row) row.idx.push(i); else rows.push({ y, idx: [i] });
  });
  let best: { y: number; idx: number[] } | null = null;
  let dist = Infinity;
  for (const r of rows) {
    const d = Math.abs(r.y - centerY);
    if (d < dist) { dist = d; best = r; }
  }
  return { rows, best, dist };
}

export function useCenterArtworkColor(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = ref.current;
    if (!root || typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    let active: HTMLElement[] = [];
    let frame = 0;
    let listening = false;

    const clear = (el: HTMLElement) => {
      el.style.removeProperty("--art-gray");
      el.removeAttribute("data-scroll-active");
    };

    const update = () => {
      frame = 0;
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const cy = vh / 2;
      const visible: HTMLElement[] = [];
      const boxes: ArtworkBox[] = [];
      for (const img of Array.from(root.querySelectorAll<HTMLElement>(".project-image"))) {
        const r = img.getBoundingClientRect();
        if (r.bottom <= 0 || r.top >= vh || r.right <= 0 || r.left >= vw || r.width === 0) continue;
        visible.push(img);
        boxes.push({ top: r.top, height: r.height });
      }
      const { rows, best, dist } = pickCenterRow(boxes, cy);
      let row = best;
      let rowDist = dist;
      // Hysteresis: keep the current row unless another is clearly closer.
      const current = active.length ? rows.find(r => r.idx.some(i => visible[i] === active[0])) : undefined;
      if (current && current !== best) {
        const d = Math.abs(current.y - cy);
        if (dist > d - 40) { row = current; rowDist = d; }
      }
      const next = row ? row.idx.map(i => visible[i]!) : [];
      for (const el of active) if (!next.includes(el)) clear(el);
      active = next;
      const gray = Math.min(1, Math.max(0, (rowDist - vh * 0.08) / (vh * 0.32)));
      for (const el of active) {
        el.style.setProperty("--art-gray", gray.toFixed(3));
        el.setAttribute("data-scroll-active", "");
      }
    };

    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const start = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("scroll", schedule, { passive: true });
      window.addEventListener("resize", schedule);
      schedule();
    };
    const stop = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      if (listening) {
        window.removeEventListener("scroll", schedule);
        window.removeEventListener("resize", schedule);
      }
      listening = false;
      active.forEach(clear);
      active = [];
    };
    const sync = () => (reduce.matches ? stop() : start());

    try { sync(); } catch { stop(); }
    reduce.addEventListener("change", sync);
    return () => { reduce.removeEventListener("change", sync); stop(); };
  }, [ref]);
}
