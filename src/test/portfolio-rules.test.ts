import { existsSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { HIDDEN_REPOS, FEATURED_PROJECTS, MORE_PROJECTS, SKILLS, ROLES, RESUME_URL, BOOK_AMAZON_URLS, CREATORSPARK, TESTPILOT } from "@/components/portfolio/data";
import { PROJECT_ARTWORK } from "@/components/portfolio/projectArtwork";
import { APPS, BUILDING_CARDS } from "@/components/portfolio/Builder";
import { readFileSync } from "node:fs";
import { buildMailto, validate } from "@/components/portfolio/Contact";
import { ARTICLES } from "@/components/portfolio/articles";

describe("portfolio rules", () => {
  it("contains exactly four distinct supplied article destinations without repeating Emma", () => {
    expect(ARTICLES.map(a => a.url)).toEqual([
      "https://mindsnotebook.com/smallest-habit-change-that-sticks/",
      "https://mindsnotebook.com/what-it-really-means-to-be-an-introvert/",
      "https://mindsnotebook.com/becoming-beautiful-emmas-journey-to-self-love/",
      "https://mindsnotebook.com/trust-the-journey-let-time-tell-your-story/",
    ]);
    expect(new Set(ARTICLES.map(a => a.image)).size).toBe(4);
  });
  it("limits CreatorSpark display data to the approved WIP identity and description without a source URL", () => {
    expect(CREATORSPARK).toEqual({ title: "CreatorSpark AI", status: "Work in Progress", description: "A tool for drafting social captions, hooks and scripts in English and Telugu." });
    expect(Object.keys(CREATORSPARK)).not.toContain("url");
  });
  it("limits the Building-section TestPilot reference to the approved status and one-line description", () => {
    expect(TESTPILOT).toEqual({ title: "TestPilot", status: "Work in Progress", description: "A workspace for test cases, test runs, and defect tracking." });
    expect(Object.keys(TESTPILOT)).not.toContain("url");
    const builderSource = readFileSync("src/components/portfolio/Builder.tsx", "utf8");
    expect(builderSource).toContain("TESTPILOT.description");
  });
  it("shows four uniform building cards with the approved names and statuses", () => {
    expect(BUILDING_CARDS.map(c => [c.name, c.status])).toEqual([
      ["HOLD", "Coming soon on Play Store"], ["EverSage", "Coming soon on Play Store"],
      ["CreatorSpark AI", "Work in Progress"], ["TestPilot", "Work in Progress"],
    ]);
    expect(BUILDING_CARDS.filter(c => c.logo).map(c => c.name)).toEqual(["HOLD", "EverSage"]);
  });
  it("keeps Download Resume controls out of the UI while the PDF stays available", () => {
    for (const file of ["src/components/portfolio/Nav.tsx", "src/components/portfolio/Hero.tsx", "src/components/portfolio/Contact.tsx"]) {
      const source = readFileSync(file, "utf8");
      expect(source).not.toContain("Download Resume");
      expect(source).not.toContain("RESUME_URL");
    }
  });
  it("keeps every other destination while removing only the Resume control", () => {
    const nav = readFileSync("src/components/portfolio/Nav.tsx", "utf8");
    const hero = readFileSync("src/components/portfolio/Hero.tsx", "utf8");
    const contact = readFileSync("src/components/portfolio/Contact.tsx", "utf8");
    const writer = readFileSync("src/components/portfolio/Writer.tsx", "utf8");
    expect(nav).toContain("LINKS.github");
    expect(nav).toContain("LINKS.blog");
    expect(hero).toContain("LINKS.linkedin");
    expect(hero).toContain("LINKS.blog");
    expect(hero).toContain("mailto:");
    expect(contact).toContain("navigator.clipboard.writeText(LINKS.email)");
    expect(contact).toContain("LINKS.linkedin");
    expect(contact).toContain("LINKS.github");
    expect(contact).toContain("LINKS.blog");
    expect(writer).toContain("BOOK_AMAZON_URLS");
    expect(writer).toContain("article.url");
    expect(writer).toContain("LINKS.blog");
  });

  it("keeps the removed sector line out of the hero", () => {
    const heroSource = readFileSync("src/components/portfolio/Hero.tsx", "utf8");
    expect(heroSource).not.toContain("Healthcare");
    expect(heroSource).not.toContain("Insurance");
    expect(heroSource).not.toContain("Banking");
  });

  it("uses the supplied Amazon destination for No Record of Her", () => {
    expect(BOOK_AMAZON_URLS["No Record of Her"]).toBe("https://www.amazon.in/dp/B0FH5BR82W");
  });
  it("uses the supplied Amazon destination for Her Name in Every Silence", () => {
    expect(BOOK_AMAZON_URLS["Her Name in Every Silence"]).toBe("https://www.amazon.in/Her-Name-Every-Silence-coming/dp/B0FM47LWTP/ref=tmm_pap_swatch_0");
  });
  it("includes all seven non-app repositories and excludes the profile README", () => {
    expect([...FEATURED_PROJECTS, ...MORE_PROJECTS].map(p => p.name)).toEqual([
      "qa-automation-framework", "qa-engineering-portfolio", "Test-pilot-QA",
      "Banana_Freshness_Check", "Beginner-Html-webpage", "Doraemon-using-Python", "Shinchan-using-python",
    ]);
  });
  it("reserves eight exact project artwork mappings without invented imagery", () => {
    expect(Object.keys(PROJECT_ARTWORK)).toEqual([
      "qa-automation-framework", "qa-engineering-portfolio", "Test-pilot-QA",
      "Banana_Freshness_Check", "Beginner-Html-webpage", "Doraemon-using-Python", "Shinchan-using-python", "eversage",
    ]);
  });
  it("maps all eight supplied artworks to unique permanent optimized and original assets", () => {
    const artworks = Object.values(PROJECT_ARTWORK);
    expect(new Set(artworks.map(a => a.url)).size).toBe(8);
    expect(new Set(artworks.map(a => a.originalUrl)).size).toBe(8);
    for (const [slug, artwork] of Object.entries(PROJECT_ARTWORK)) {
      const suffix = slug === "eversage" ? "" : "-color";
      expect(artwork.url).toMatch(new RegExp(`^/assets/projects/${slug}${suffix}\\.webp$`));
      expect(artwork.originalUrl).toMatch(new RegExp(`^/assets/projects/${slug}(-color)?-original\\.png$`));
      expect(artwork.width).toBe(960);
      expect(artwork.height).toBe(640);
    }
  });
  it("keeps repository experiment technologies out of professional skill groups", () => {
    expect(SKILLS.map(s => s.group)).toEqual(["Automation", "API & Data", "AI QA", "Workflow"]);
    const skills = SKILLS.flatMap(s => [...s.items]);
    expect(skills).toContain("Jenkins");
    expect(skills).not.toContain("React");
    expect(skills).not.toContain("TensorFlow.js");
  });
  it("limits each experience role to three concise factual bullets", () => {
    expect(ROLES.map(r => r.points.length)).toEqual([3, 3]);
  });
  it("preserves the exact upcoming-app status for both apps", () => {
    expect(APPS.map(a => [a.name, a.status])).toEqual([
      ["HOLD", "Coming soon on Play Store"], ["EverSage", "Coming soon on Play Store"],
    ]);
  });
  it("keeps both app-card reverses text-only with the approved short descriptions", () => {
    expect(APPS.map(a => [a.name, a.description])).toEqual([
      ["HOLD", "A quiet book for your days. A personal diary for words, images and voice."],
      ["EverSage", "Short stories and reflections, available offline."],
    ]);
    const builderSource = readFileSync("src/components/portfolio/Builder.tsx", "utf8");
    expect(builderSource).not.toContain("app-concept-image");
    expect(builderSource).not.toContain("getProjectArtwork");
  });

  it("keeps all three verified featured repository destinations", () => {
    expect(FEATURED_PROJECTS.map(p => p.url)).toEqual([
      "https://github.com/AnudeepPaladugu/qa-automation-framework",
      "https://github.com/AnudeepPaladugu/qa-engineering-portfolio",
      "https://github.com/AnudeepPaladugu/Test-pilot-QA",
    ]);
  });
  it.skipIf(!existsSync("public/Anudeep-Paladugu-Resume.pdf"))("serves a real permanent PDF rather than an upload URL", () => {
    expect(RESUME_URL).toBe("/Anudeep-Paladugu-Resume.pdf");
    expect(readFileSync(`public${RESUME_URL}`).subarray(0, 5).toString()).toBe("%PDF-");
  });
  it("never includes hidden repositories in featured engineering work", () => {
    expect(FEATURED_PROJECTS.some(p => HIDDEN_REPOS.includes(p.name.toLowerCase()))).toBe(false);
  });
  it("hides the eversage app repo from the GitHub gallery", () => {
    expect(HIDDEN_REPOS).toContain("eversage");
  });
  it("rejects an invalid email in the contact form", () => {
    expect(validate({ name: "Al", email: "nope", subject: "Hi", message: "hello there!" }).email).toBeDefined();
  });
  it("encodes form fields into the mailto link", () => {
    expect(buildMailto({ name: "A B", email: "a@b.co", subject: "Hi & bye", message: "hello there!" })).toContain("subject=Hi%20%26%20bye");
  });
});
