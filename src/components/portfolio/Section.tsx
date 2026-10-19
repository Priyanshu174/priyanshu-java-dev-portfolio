import type { ReactNode } from "react";

export function Section({ id, label, title, children }: { id: string; label: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="reveal border-t py-[clamp(4rem,9vw,7.5rem)]">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">{label}</p>
      <h2 id={`${id}-title`} className="text-h2 mt-3 font-semibold tracking-tight">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return <span className="tilt-child inline-block rounded-md border bg-secondary px-2.5 py-1 font-mono text-xs text-muted-foreground hover:border-primary/40 hover:text-foreground">{children}</span>;
}

export function ButtonLink({ href, children, variant = "primary", download }: { href: string; children: ReactNode; variant?: "primary" | "ghost"; download?: boolean }) {
  const base = "group/btn inline-flex items-center gap-2 min-h-11 rounded-lg px-5 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background";
  const styles = variant === "primary" ? "bg-primary text-primary-foreground hover:bg-primary/85" : "border text-foreground hover:bg-accent";
  return <a href={href} download={download} className={`${base} ${styles}`}>{children}</a>;
}
