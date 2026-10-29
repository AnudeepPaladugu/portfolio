import { useState, type ComponentType } from "react";
import { ListChecks, RotateCcw, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
const holdIcon = { url: "/assets/hold-icon.webp" };
const eversageIcon = { url: "/assets/eversage-mark.png" };
import { Reveal, SectionHead } from "./shared";
import { CREATORSPARK, TESTPILOT } from "./data";

export const APPS = [
  { name: "HOLD", logo: holdIcon.url, description: "A quiet book for your days. A personal diary for words, images and voice.", status: "Coming soon on Play Store" },
  { name: "EverSage", logo: eversageIcon.url, description: "Short stories and reflections, available offline.", status: "Coming soon on Play Store" },
] as const;

type BuildingCard = { name: string; status: string; description: string; logo?: string; Icon?: ComponentType<{ size?: number; strokeWidth?: number }> };

export const BUILDING_CARDS: BuildingCard[] = [
  ...APPS,
  { name: CREATORSPARK.title, status: CREATORSPARK.status, description: CREATORSPARK.description, Icon: Sparkles },
  { name: TESTPILOT.title, status: TESTPILOT.status, description: TESTPILOT.description, Icon: ListChecks },
];

function AppCard({ app }: { app: BuildingCard }) {
  const [flipped, setFlipped] = useState(false);
  return <Button variant="ghost" className="app-flip" data-flipped={flipped} aria-pressed={flipped} aria-label={flipped ? `${app.name}: ${app.status}. Show icon` : `${app.name}: Show status`}
    onPointerEnter={e => { if (e.pointerType === "mouse") setFlipped(true); }} onPointerLeave={e => { if (e.pointerType === "mouse") setFlipped(false); }}
    onFocus={e => { if (e.currentTarget.matches(":focus-visible")) setFlipped(true); }} onBlur={() => setFlipped(false)} onClick={() => setFlipped(v => !v)} onKeyDown={e => { if (e.key === "Escape") { e.preventDefault(); setFlipped(false); } }}>
    <span className="app-flip-inner"><span className="app-face app-front" aria-hidden={flipped}>{app.logo ? <img src={app.logo} alt="" width={600} height={600} loading="lazy"/> : <span className="app-icon-tile">{app.Icon ? <app.Icon size={34} strokeWidth={1.5}/> : null}</span>}<span className="app-name">{app.name}</span><RotateCcw className="flip-mark" size={16}/></span>
    <span className="app-face app-back" aria-hidden={!flipped}><span className="eyebrow">{app.name}</span><strong>{app.status}</strong><span className="app-description">{app.description}</span><RotateCcw className="flip-mark" size={16}/></span></span>
  </Button>;
}

export function Builder() {
  return <section id="builder" className="section secondary-band"><div className="page-width"><SectionHead num="06 / Building" title="Building" line="Independent tools and Android apps in development."/>
    <div className="app-grid">{BUILDING_CARDS.map(app => <Reveal key={app.name}><AppCard app={app}/></Reveal>)}</div>
  </div></section>;
}
