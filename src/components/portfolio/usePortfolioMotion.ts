import { useEffect, type RefObject } from "react";
export function usePortfolioMotion(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    let disposed = false;
    let cleanup = () => {};
    async function setup() {
      try {
        const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);
        if (disposed || !ref.current) return;
        gsap.registerPlugin(ScrollTrigger);
        const root = ref.current;
        const mm = gsap.matchMedia();
        cleanup = () => mm.revert();
        mm.add({ motion: "(prefers-reduced-motion: no-preference)", desktop: "(min-width: 1024px) and (hover: hover) and (pointer: fine)" }, context => {
          if (!context.conditions?.['motion']) return;
          const desktop = Boolean(context.conditions['desktop']);
          const focusCleanups: Array<() => void> = [];
          root.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
              gsap.from(el, { y: 18, duration: 0.55, delay: (i % 3) * 0.035, ease: "power2.out", scrollTrigger: { trigger: el, start: "top 96%", once: true } });
          });
          root.querySelectorAll<HTMLElement>("[data-scroll-card]").forEach(card => {
            const index = Number(card.dataset['cardIndex'] ?? 0);
            const rowStagger = card.closest(".article-grid") ? index % 3 : card.closest(".more-grid,.building-work") ? index % (desktop ? 4 : 2) : 0;
            const timeline = gsap.timeline({ scrollTrigger: {
              trigger: card, start: `top ${96 - rowStagger * 5}%`, end: `top ${52 - rowStagger * 5}%`, scrub: 0.45,
              invalidateOnRefresh: true,
            } });
            timeline.fromTo(card,
              { y: 90 + rowStagger * 6, scale: 0.92, rotationX: desktop ? 4 : 0, transformPerspective: desktop ? 1100 : 0, transformOrigin: "center bottom" },
              { y: 0, scale: 1, rotationX: 0, duration: 1, ease: "power2.out" }, 0);
            const artwork = card.querySelector<HTMLElement>(".project-artwork");
            if (artwork) timeline.fromTo(artwork,
              { clipPath: "inset(16% 0 16% 0)" },
              { clipPath: "inset(0% 0 0% 0)", duration: 0.8, ease: "power2.out" }, 0.1);
            // Keyboard users can read and activate a card immediately, even mid-reveal.
            const onFocus = () => { timeline.progress(1); };
            card.addEventListener("focusin", onFocus);
            focusCleanups.push(() => card.removeEventListener("focusin", onFocus));
          });
          if (desktop) {
            root.querySelectorAll<HTMLElement>(".project-image").forEach(el => {
              gsap.fromTo(el, { yPercent: -3 }, { yPercent: 3, ease: "none", scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: 0.5 } });
            });
          }
          return () => focusCleanups.forEach(remove => remove());
        });
        ScrollTrigger.refresh();
      } catch { cleanup(); /* Revert any partial enhancement; baseline content stays visible. */ }
    }
    void setup();
    return () => { disposed = true; cleanup(); };
  }, [ref]);
}
