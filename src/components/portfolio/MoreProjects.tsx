import { ArrowUpRight } from "lucide-react";
import { MORE_PROJECTS } from "./data";
import { ProjectArtwork } from "./ProjectArtwork";
import { ScrollCard, SectionHead } from "./shared";
export function MoreProjects() {
  return <section id="more-projects" className="section secondary-band"><div className="page-width"><SectionHead num="04 / Beyond QA" title="More projects" line="Learning projects and creative coding experiments."/>
    <div className="more-grid">{MORE_PROJECTS.map((p, i) => <ScrollCard key={p.name} index={i}><a href={p.url} target="_blank" rel="noreferrer" className="more-project project-link"><ProjectArtwork project={p.name} number={`0${i + 4}`}/><div className="more-copy"><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><p className="project-stack">{p.stack}</p><span className="repo-cta">View repository <ArrowUpRight size={16}/></span></div></a></ScrollCard>)}</div>
  </div></section>;
}
