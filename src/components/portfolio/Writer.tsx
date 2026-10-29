import { ArrowUpRight } from "lucide-react";
const coverHer = { url: "/assets/cover-her-name.webp" };
const coverNo = { url: "/assets/cover-no-record.webp" };
import { BOOK_AMAZON_URLS, LINKS } from "./data";
import { Button } from "@/components/ui/button";
import { Reveal, ScrollCard, SectionHead } from "./shared";
import { ARTICLES } from "./articles";
export function Writer() {
  return <section id="writer" className="section page-width writing"><SectionHead num="05 / Writing" title="Books & notes" line="Two novels, alongside writing on MindsNotebook."/>
    <div className="book-grid">{([{ title: "Her Name in Every Silence", cover: coverHer.url }, { title: "No Record of Her", cover: coverNo.url }] as const).map(b => <Reveal className="book-item" key={b.title}><img src={b.cover} alt={`Original cover of ${b.title}`} width={1024} height={1536} loading="lazy"/><div><p className="eyebrow">Novel</p><h3>{b.title}</h3><p className="text-xs text-muted-foreground">Anudeep Paladugu</p><Button asChild variant="link" className="text-link mt-3 h-auto p-0"><a href={BOOK_AMAZON_URLS[b.title]} target="_blank" rel="noopener noreferrer" aria-label={`View on Amazon: ${b.title}`}>View on Amazon <ArrowUpRight size={16}/></a></Button></div></Reveal>)}</div>
    <div className="article-heading"><h3><a href={LINKS.blog} target="_blank" rel="noopener noreferrer">MindsNotebook <ArrowUpRight size={17}/></a></h3><a href={LINKS.blog} target="_blank" rel="noopener noreferrer" className="text-link">Blog <ArrowUpRight size={16}/></a></div>
    <div className="article-grid">{ARTICLES.map((article, index) => <ScrollCard className="article-item" index={index} key={article.url}>
      <a className="article-cover-link" href={article.url} target="_blank" rel="noopener noreferrer" aria-label={article.title}><img className={article.crop} src={article.image} alt={article.alt} width={90} height={135} loading="lazy" decoding="async"/></a>
      <div className="article-copy"><h4><a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a></h4><p>{article.description}</p></div>
    </ScrollCard>)}</div>
  </section>;
}
