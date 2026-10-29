import { ArrowUpRight } from "lucide-react";
import { FEATURED_PROJECTS, SKILLS, ROLES, LINKS } from "./data";
import { ProjectArtwork } from "./ProjectArtwork";
import { Reveal, ScrollCard, SectionHead } from "./shared";
export function TechnicalSkills() {
  return <section id="skills" className="section page-width skills-section"><SectionHead num="01 / Expertise" title="Technical skills" line="Tools and practices I use to validate software."/>
    <div className="skills-table">{SKILLS.map(s => <Reveal className="skill-row" key={s.group}><h3>{s.group}</h3><p>{s.items.join(" · ")}</p></Reveal>)}</div>
    <p className="manual-line">Manual testing: functional, regression, smoke, sanity, integration and exploratory.</p>
  </section>;
}
export function Engineer() {
  return <section id="engineer" className="section"><div className="page-width"><SectionHead num="02 / Selected work" title="QA projects" line="Automation, test evidence and a tool for QA workflows."/>
    <div className="qa-projects">{FEATURED_PROJECTS.map((p, i) => <ScrollCard key={p.name} index={i}><a href={p.url} target="_blank" rel="noreferrer" className="qa-project project-link">
      <ProjectArtwork project={p.name} number={`0${i + 1}`}/><div className="qa-project-copy"><p className="eyebrow">{p.category}</p><h3>{p.title}</h3><p className="project-description">{p.description}</p><p className="project-stack">{p.stack}</p><span className="repo-cta">View repository <ArrowUpRight size={16}/></span></div><ArrowUpRight className="project-arrow" size={22}/>
    </a></ScrollCard>)}</div>
    <a href={LINKS.github} target="_blank" rel="noreferrer" className="text-link section-end-link">GitHub profile <ArrowUpRight size={16}/></a>
  </div></section>;
}
export function Experience() {
  return <section id="experience" className="section page-width"><SectionHead num="03 / Background" title="Experience" line="5+ years across healthcare, insurance and banking."/>
    <div className="experience-list">{ROLES.map(r => <Reveal className="experience-role" key={r.title}><div><p className="eyebrow">{r.period}</p><h3>{r.title}</h3><p className="company">{r.company}</p><p className="domain">{r.project}</p></div><ul>{r.points.map(p => <li key={p}>{p}</li>)}</ul></Reveal>)}</div>
    <div className="education"><span className="eyebrow">Education</span><p>B.Com & Computers · Sri Krishnaveni Degree Kalasala, Vijayawada <span>Jan 2021</span></p></div>
  </section>;
}
