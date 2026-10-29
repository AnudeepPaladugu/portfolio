import { describe, expect, it } from "vitest";
import { pickCenterRow } from "@/components/portfolio/useCenterArtworkColor";

describe("scroll color reveal row selection", () => {
  it("activates every card in a four-column row, including the outer cards", () => {
    const row = [0, 1, 2, 3].map(() => ({ top: 300, height: 200 }));
    const { best, dist } = pickCenterRow(row, 400);
    expect(best?.idx).toEqual([0, 1, 2, 3]);
    expect(dist).toBe(0);
  });
  it("picks a single card in a one-column layout", () => {
    const col = [{ top: 0, height: 200 }, { top: 400, height: 200 }, { top: 800, height: 200 }];
    expect(pickCenterRow(col, 500).best?.idx).toEqual([1]);
  });
});
