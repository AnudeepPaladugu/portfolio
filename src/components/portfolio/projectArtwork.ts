/** User-supplied concept artwork, keyed by exact repository slug. Originals stay permanently available. */
const image0 = { url: "/assets/projects/qa-automation-framework-color.webp" };
const original0 = { url: "/assets/projects/qa-automation-framework-color-original.png" };
const image1 = { url: "/assets/projects/qa-engineering-portfolio-color.webp" };
const original1 = { url: "/assets/projects/qa-engineering-portfolio-color-original.png" };
const image2 = { url: "/assets/projects/Test-pilot-QA-color.webp" };
const original2 = { url: "/assets/projects/Test-pilot-QA-color-original.png" };
const image3 = { url: "/assets/projects/Banana_Freshness_Check-color.webp" };
const original3 = { url: "/assets/projects/Banana_Freshness_Check-color-original.png" };
const image4 = { url: "/assets/projects/Beginner-Html-webpage-color.webp" };
const original4 = { url: "/assets/projects/Beginner-Html-webpage-color-original.png" };
const image5 = { url: "/assets/projects/Doraemon-using-Python-color.webp" };
const original5 = { url: "/assets/projects/Doraemon-using-Python-color-original.png" };
const image6 = { url: "/assets/projects/Shinchan-using-python-color.webp" };
const original6 = { url: "/assets/projects/Shinchan-using-python-color-original.png" };
const image7 = { url: "/assets/projects/eversage.webp" };
const original7 = { url: "/assets/projects/eversage-original.png" };
export const PROJECT_ARTWORK = {
  "qa-automation-framework": { url: image0.url, originalUrl: original0.url, alt: "Concept artwork of connected sculptural browser panels and a check mark for UI test automation.", width: 960, height: 640 },
  "qa-engineering-portfolio": { url: image1.url, originalUrl: original1.url, alt: "Concept artwork of a magnifying glass over a shopping cart and test checklist for an ecommerce QA case study.", width: 960, height: 640 },
  "Test-pilot-QA": { url: image2.url, originalUrl: original2.url, alt: "Concept artwork of task boards with targets, checklists and defect symbols for QA workflow planning.", width: 960, height: 640 },
  "Banana_Freshness_Check": { url: image3.url, originalUrl: original3.url, alt: "Concept artwork of a banana with framing brackets and ripeness color swatches from green to brown.", width: 960, height: 640 },
  "Beginner-Html-webpage": { url: image4.url, originalUrl: original4.url, alt: "Concept artwork of a coffee cup, menu and sculptural browser frame for the Coffee House HTML learning project.", width: 960, height: 640 },
  "Doraemon-using-Python": { url: image5.url, originalUrl: original5.url, alt: "Concept artwork of a Doraemon pen drawing on paper with construction guides.", width: 960, height: 640 },
  "Shinchan-using-python": { url: image6.url, originalUrl: original6.url, alt: "Concept artwork of a Shinchan pen drawing beside a toy robot and coordinate construction pattern.", width: 960, height: 640 },
  "eversage": { url: image7.url, originalUrl: original7.url, alt: "Concept artwork of an open book with a paper mountain landscape, waterfall and castle for offline stories.", width: 960, height: 640 },
} satisfies Record<string, { url: string; originalUrl: string; alt: string; width: number; height: number }>;
export type ArtworkKey = keyof typeof PROJECT_ARTWORK;
export function getProjectArtwork(key: ArtworkKey) {
  return PROJECT_ARTWORK[key];
}
