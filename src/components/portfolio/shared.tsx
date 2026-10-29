import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  return <div data-reveal data-delay={delay} className={cn("reveal", className)}>{children}</div>;
}

export function ScrollCard({ children, className, index = 0 }: { children: ReactNode; className?: string; index?: number }) {
  return <div data-scroll-card data-card-index={index} className={cn("scroll-card", className)}>{children}</div>;
}

export function SectionHead({ num, title, line }: { num: string; title: string; line: string }) {
  return (
    <Reveal className="chapter-head">
      <div>
        <p className="label chapter-label">{num}</p>
        <h2>{title}</h2>
      </div>
      <p className="chapter-intro">{line}</p>
    </Reveal>
  );
}
