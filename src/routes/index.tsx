import { useCenterArtworkColor } from "@/components/portfolio/useCenterArtworkColor";
import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Engineer, TechnicalSkills, Experience } from "@/components/portfolio/Engineer";
import { Writer } from "@/components/portfolio/Writer";
import { Builder } from "@/components/portfolio/Builder";
import { MoreProjects } from "@/components/portfolio/MoreProjects";
import { usePortfolioMotion } from "@/components/portfolio/usePortfolioMotion";
import { useRef } from "react";
import { Contact, Footer } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Anudeep Paladugu — QA Engineer" },
      { name: "description", content: "QA Engineer with 5+ years in manual testing, UI automation, API validation and AI chatbot testing. View QA projects, experience and writing by Anudeep Paladugu." },
      { property: "og:title", content: "Anudeep Paladugu — QA Engineer" },
      { property: "og:description", content: "5+ years in manual testing, UI automation, API validation and AI chatbot testing. Explore QA projects, experience and writing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const ref = useRef<HTMLElement>(null);
  usePortfolioMotion(ref);
  useCenterArtworkColor(ref);
  return (
    <main ref={ref} className="portfolio">
      <a href="#engineer" className="skip-link">Skip to work</a>
      <Nav />
      <Hero />
      <TechnicalSkills />
      <Engineer />
      <Experience />
      <MoreProjects />
      <Writer />
      <Builder />
      <Contact />
      <Footer />
    </main>
  );
}
