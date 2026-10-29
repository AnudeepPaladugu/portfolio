import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LINKS } from "./data";
import { Reveal } from "./shared";

type Fields = { name: string; email: string; subject: string; message: string };


export function validate(f: Fields) {
  const e: Partial<Record<keyof Fields, string>> = {};
  if (f.name.trim().length < 2) e.name = "Please enter your name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) e.email = "Please enter a valid email.";
  if (f.subject.trim().length < 2) e.subject = "Please add a subject.";
  if (f.message.trim().length < 10) e.message = "Message should be at least 10 characters.";
  return e;
}

export function buildMailto(f: Fields) {
  const body = `${f.message.trim()}\n\n— ${f.name.trim()} (${f.email.trim()})`;
  return `mailto:${LINKS.email}?subject=${encodeURIComponent(f.subject.trim())}&body=${encodeURIComponent(body)}`;
}

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);
  async function copyEmail() {
    try { await navigator.clipboard.writeText(LINKS.email); setCopied(true); setCopyError(false); }
    catch { setCopied(false); setCopyError(true); }
  }
  return <section id="contact" className="section contact"><div className="page-width">
    <Reveal className="contact-heading"><p className="eyebrow">07 / Contact</p><h2>Let’s connect.</h2><p>Open to remote QA engineering opportunities.</p></Reveal>
    <div className="contact-body"><div className="email-block"><a href={`mailto:${LINKS.email}`} className="contact-email text-link">{LINKS.email}<ArrowUpRight size={20}/></a><Button variant="ghost" className="copy-button" onClick={copyEmail}>{copied ? <Check/> : <Copy/>}{copied ? "Email copied" : "Copy email"}</Button><p role="status" className="copy-status">{copied ? "Copied to clipboard." : copyError ? "Copy unavailable. Select the email above or open your email app." : ""}</p></div></div>
    <div className="contact-links"><a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="text-link">LinkedIn <ArrowUpRight size={15}/></a><a href={LINKS.github} target="_blank" rel="noreferrer" className="text-link">GitHub <ArrowUpRight size={15}/></a><a href={LINKS.blog} target="_blank" rel="noreferrer" className="text-link">MindsNotebook <ArrowUpRight size={15}/></a></div>
  </div></section>;
}
export function Footer() {
  return <footer className="site-footer page-width"><a href="#home" className="wordmark" aria-label="Anudeep Paladugu, home">Anudeep Paladugu</a><p>QA Engineer</p><a href={LINKS.github} target="_blank" rel="noreferrer" className="text-link">GitHub <ArrowUpRight size={14}/></a><a href="#home" className="text-link">Back to top ↑</a></footer>;
}
