import { ArrowUpRight, Github, ImageOff } from "lucide-react";
import type { Project } from "@/data/projects";
import { Tag } from "./Section";
import { trackSpotlight } from "@/lib/spotlight";

const btn = "group/btn inline-flex items-center gap-1.5 rounded-md border px-3 py-1.5 text-sm transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

export function ProjectCard({ p }: { p: Project }) {
  return (
    <article onMouseMove={trackSpotlight} className="spotlight group flex h-full flex-col overflow-hidden rounded-xl border bg-card hover:-translate-y-1 hover:border-primary/40">
      <div className="aspect-video overflow-hidden border-b bg-secondary">
        {p.image ? (
          <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" />
        ) : (
          <div className="flex h-full items-center justify-center text-muted-foreground"><ImageOff size={28} aria-hidden /><span className="sr-only">No screenshot yet</span></div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">{p.technologies.map((t) => <Tag key={t}>{t}</Tag>)}</div>
        {(p.githubUrl || p.liveUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {p.githubUrl && <a className={btn} href={p.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} GitHub repository`}><Github size={15} /> GitHub</a>}
            {p.liveUrl && <a className={btn} href={p.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} live demo`}><ArrowUpRight size={15} className="nudge" /> Live Demo</a>}
          </div>
        )}
      </div>
    </article>
  );
}
