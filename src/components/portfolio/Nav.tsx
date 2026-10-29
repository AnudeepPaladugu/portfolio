import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV, LINKS } from "./data";
export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return <header className="site-header"><nav aria-label="Main" className="nav-inner page-width">
    <a className="wordmark" href="#home" aria-label="Anudeep Paladugu, home">Anudeep Paladugu</a>
    <div className="desktop-nav">{NAV.map(n => <a key={n.id} href={`#${n.id}`} className="text-link">{n.label}</a>)}<a href={LINKS.blog} target="_blank" rel="noreferrer" className="text-link">Blog <ArrowUpRight size={13}/></a><a href={LINKS.github} target="_blank" rel="noreferrer" className="text-link">GitHub <ArrowUpRight size={13}/></a></div>
    <Button variant="ghost" size="icon" className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu">{open ? <X/> : <Menu/>}</Button>
  </nav>{open && <div id="mobile-menu" className="mobile-nav page-width">{NAV.map(n => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}<ArrowUpRight size={16}/></a>)}<a href={LINKS.blog} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Blog <ArrowUpRight size={16}/></a><a href={LINKS.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={16}/></a></div>}</header>;
}
