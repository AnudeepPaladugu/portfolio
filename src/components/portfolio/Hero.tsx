import { ArrowUpRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const portrait = { url: "/assets/Anudeep-original-quality-cutout.png" };
import { LINKS } from "./data";
export function Hero() {
  return <section id="home" className="hero page-width">
    <div className="hero-copy" data-reveal>
      <p className="eyebrow">Vijayawada, India <span>/</span> Open to remote</p>
      <h1>Anudeep<br className="desktop-break"/> Paladugu<span className="name-period">.</span></h1>
      <p className="hero-role">QA Engineer</p>
      <p className="hero-summary">5+ years in manual testing, UI automation, API validation, and AI chatbot testing.</p>
      <div className="hero-actions">
        <Button asChild className="primary-action"><a href="#engineer">View QA projects <ArrowUpRight/></a></Button>
        <Button asChild variant="outline" className="secondary-action"><a href={`mailto:${LINKS.email}`}>Email me <Mail size={15}/></a></Button>
      </div>
    </div>
    <div className="hero-portrait" data-reveal><img src={portrait.url} alt="Anudeep Paladugu" width={1122} height={1402} fetchPriority="high"/></div>
    <div className="hero-foot"><a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-link">LinkedIn <ArrowUpRight size={14}/></a><a href={LINKS.blog} target="_blank" rel="noreferrer" className="text-link">Blog <ArrowUpRight size={14}/></a></div>
  </section>;
}
