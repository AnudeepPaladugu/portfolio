<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Portfolio architecture
- Hero portrait displays the approved repaired transparent upload unchanged with contain sizing, transparent breathing room and a CSS bottom fade; previous source assets remain untouched as backups to preserve identity and shoulder contours.
- Portfolio sections remain isolated React components composed in recruiter-first order by the index route; global semantic tokens define a grayscale-only system.
- Scroll enhancements use dynamically imported GSAP/ScrollTrigger with scoped matchMedia cleanup and visible baseline content; card wrappers own scrubbed transforms while artwork owns clipping/parallax, avoiding competing transforms. No pinning; reduced motion disables enhancements and initialization failures revert them.
- Featured repositories use checked-in verified descriptions and real repository URLs instead of runtime GitHub dependence, ensuring availability under rate limits.
- The original Resume PDF stays stored in public/, but no Download Resume control appears anywhere in the UI; visitors already arrive from the resume.
- Project concept artwork is mapped by exact repository name in one typed registry with optimized and original image paths; lazy-loaded optimized images keep page transfers small while originals remain available.
- Runtime images are served as tracked files under public/assets/ (byte-identical copies of the .asset.json backups) so the site runs on any host without Lovable CDN paths; the build relies on Nitro host auto-detection (e.g. VERCEL=1 emits .vercel/output) instead of a hardcoded preset so Lovable builds keep working.
- App cards use controlled React flip state for hover, focus, keyboard and tap, with CSS backface-hidden 3D faces and instantaneous reduced-motion swaps. Building renders four uniform cards from one list: HOLD/EverSage keep their original logo images, CreatorSpark AI/TestPilot use lucide icon tiles in the same footprint.
- Project artwork images are grayscale(1) by default and transition to grayscale(0) on card hover/focus-within over 400ms; a rAF-throttled center hook sets --art-gray on every artwork in the visual row nearest the viewport center by vertical distance only (hysteresis), so outer grid cards stay reachable for desktop and touch; reduced motion disables it. The hero portrait always stays grayscale.
- Private-project display data contains only explicitly approved public presentation fields and no repository destination, preventing private source exposure.
- Writing article data is a checked-in list of supplied destinations and rehosted optimized original images; CSS owns subject positioning so cover framing does not alter source imagery or require runtime blog fetching.
