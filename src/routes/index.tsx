import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Award,
  ChevronDown,
  ChevronUp,
  Code2,
  Database,
  Download,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  PanelsTopLeft,
  Phone,
  Wrench,
} from "lucide-react";
import { Nav } from "@/components/portfolio/Nav";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ButtonLink, Section, Tag } from "@/components/portfolio/Section";
import { certifications, experience, profile, resume, skills, socialLinks } from "@/data/portfolio";
import { projects } from "@/data/projects";
import { trackSpotlight } from "@/lib/spotlight";

const title = "Priyanshu Sharma | Software Engineer Portfolio";
const description = "Priyanshu Sharma — Software Engineer with 2+ years of experience in Java, Spring Boot, REST APIs and full-stack web development.";
const INITIAL = 3;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const iconLink = "rounded-md p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); } }), { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function Index() {
  useReveal();
  const [showAll, setShowAll] = useState(false);
  const [activeExperience, setActiveExperience] = useState(0);
  const shown = showAll ? projects : projects.slice(0, INITIAL);
  const contacts = [
    { href: socialLinks.linkedin, label: "Connect on LinkedIn", Icon: Linkedin },
    { href: socialLinks.github, label: "View GitHub", Icon: Github },
    { href: socialLinks.email ? `mailto:${socialLinks.email}` : "", label: "Email Me", Icon: Mail },
    { href: socialLinks.phone ? `tel:${socialLinks.phone.replace(/[^\d+]/g, "")}` : "", label: socialLinks.phone, Icon: Phone },
    ...socialLinks.extra.map((e) => ({ href: e.url, label: e.label, Icon: ExternalLink })),
  ].filter((c) => c.href);

  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">Skip to content</a>
      <Nav />
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-[100vh]" style={{ background: "var(--gradient-hero)" }} />
      <main id="main" className="container-page relative">
        <section id="top" className="grid min-h-[min(100svh,960px)] items-center gap-12 pt-28 pb-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-16">
          <div className="min-w-0">
            <p className="animate-fade-up font-mono text-sm text-primary">Hi, I'm</p>
            <h1 className="animate-fade-up text-display mt-4 font-semibold tracking-tight text-shimmer">{profile.name}</h1>
            <p className="animate-fade-up text-lead mt-5 text-muted-foreground [animation-delay:80ms]">{profile.headline}</p>
            <p className="animate-fade-up mt-6 max-w-[60ch] leading-relaxed text-muted-foreground [animation-delay:160ms]">{profile.intro}</p>
            <div className="animate-fade-up mt-10 flex flex-wrap items-center gap-3 [animation-delay:240ms]">
              <ButtonLink href="#projects">View Projects <ArrowUpRight size={16} className="nudge" /></ButtonLink>
              {resume.url && <ButtonLink href={resume.downloadUrl} variant="ghost"><Download size={16} /> Download Resume</ButtonLink>}
              <ButtonLink href="#contact" variant="ghost">Contact Me</ButtonLink>
              <span className="flex gap-1">
                {socialLinks.github && <a className={iconLink} href={socialLinks.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github size={20} /></a>}
                {socialLinks.linkedin && <a className={iconLink} href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin size={20} /></a>}
              </span>
            </div>
          </div>
          <div aria-hidden className="animate-fade-up relative hidden min-w-0 md:block [animation-delay:320ms]">
            <div className="absolute -inset-8 rounded-full bg-primary/10 blur-3xl" />
            <div onMouseMove={trackSpotlight} className="spotlight relative overflow-hidden rounded-2xl border bg-card/80 shadow-2xl backdrop-blur">
              <div className="flex items-center gap-2 border-b px-4 py-3">
                <span className="h-3 w-3 rounded-full bg-muted-foreground/30" /><span className="h-3 w-3 rounded-full bg-muted-foreground/30" /><span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">Engineer.java</span>
              </div>
              <pre className="overflow-x-auto p-6 font-mono text-[12px] leading-7 xl:text-[13px] text-muted-foreground"><code>
<span className="text-primary">public class</span> <span className="text-foreground">Engineer</span> {"{"}{"\n"}
{"  "}String name = <span className="text-foreground">"{profile.name}"</span>;{"\n"}
{"  "}String company = <span className="text-foreground">"{experience[0]?.company}"</span>;{"\n"}
{"  "}String[] backend = {"{"}{(skills[0]?.items ?? []).map((i) => `"${i}"`).join(", ")}{"}"};{"\n"}
{"  "}String[] frontend = {"{"}{(skills[1]?.items ?? []).slice(0, 2).map((i) => `"${i}"`).join(", ")}{"}"};{"\n"}
{"  "}int projects = <span className="text-primary">{projects.length}</span>;{"\n"}
{"}"}
</code></pre>
            </div>
          </div>
        </section>

        <Section id="about" label="01 / About" title="About me">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.45fr)_260px]">
            <div onMouseMove={trackSpotlight} className="spotlight rounded-3xl border bg-card/80 p-6 shadow-[0_24px_80px_-40px_rgba(129,140,248,0.7)] backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                Software engineer
              </div>

              <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
                {profile.about.map((p) => <p key={p}>{p}</p>)}
              </div>
            </div>

            <aside onMouseMove={trackSpotlight} className="spotlight rounded-3xl border bg-secondary/70 p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Core strengths</p>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="rounded-2xl border border-border/80 bg-background/40 px-3 py-2">Java & Spring Boot</li>
                <li className="rounded-2xl border border-border/80 bg-background/40 px-3 py-2">REST APIs & integrations</li>
                <li className="rounded-2xl border border-border/80 bg-background/40 px-3 py-2">Angular & TypeScript</li>
                <li className="rounded-2xl border border-border/80 bg-background/40 px-3 py-2">Full-stack product thinking</li>
              </ul>
            </aside>
          </div>
        </Section>

        <Section id="experience" label="02 / Experience" title="Work Experience">
          <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-8">
            <nav aria-label="Work experience timeline" className="flex gap-3 overflow-x-auto pb-2 lg:flex-col lg:gap-0 lg:overflow-visible lg:pb-0">
              {experience.map((e, index) => (
                <button
                  key={e.company}
                  type="button"
                  aria-current={activeExperience === index ? "true" : undefined}
                  aria-label={`Show ${e.company} experience, ${e.period}`}
                  onClick={() => setActiveExperience(index)}
                  className={`group min-w-[180px] border-l-2 py-3 pl-4 text-left transition-colors lg:min-w-0 lg:py-5 ${
                    activeExperience === index
                      ? "border-primary text-foreground"
                      : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                  }`}
                >
                  <span className="block font-mono text-[10px] uppercase tracking-[0.18em] text-primary/80">
                    {e.period}
                  </span>
                  <span className="mt-2 block text-base font-semibold">{e.company}</span>
                  <span className="mt-1 block text-xs">{e.role}</span>
                </button>
              ))}
            </nav>

            <article onMouseMove={trackSpotlight} className="spotlight min-w-0 rounded-[1.75rem] border bg-card/80 p-5 shadow-[0_24px_80px_-40px_rgba(129,140,248,0.7)] backdrop-blur-sm sm:p-8">
              <div
                key={activeExperience}
                className="experience-slide"
                aria-live="polite"
              >
                <div className="flex flex-col gap-4 border-b border-border/80 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
                      {experience[activeExperience].period}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                      {experience[activeExperience].role}
                    </h3>
                    <p className="mt-2 text-base font-medium text-muted-foreground">
                      {experience[activeExperience].company} <span aria-hidden>·</span> {experience[activeExperience].location}
                    </p>
                  </div>
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {String(activeExperience + 1).padStart(2, "0")} <span className="text-primary">/</span> {String(experience.length).padStart(2, "0")}
                  </p>
                </div>

                <div className="pt-6">
                  <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
                    {experience[activeExperience].summary}
                  </p>
                  <ul className="mt-6 space-y-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {experience[activeExperience].points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </article>
          </div>
        </Section>

        <Section id="projects" label="03 / Projects" title="Selected projects">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              A selection of applications and tools built across full-stack development, integrations, and Java.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              Showing <span className="text-primary">{shown.length}</span> of {projects.length}
            </p>
          </div>
          <div id="project-list" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((p, index) => (
              <div key={p.title} className="animate-fade-up" style={{ animationDelay: `${Math.min(index, 5) * 70}ms` }}>
                <ProjectCard p={p} />
              </div>
            ))}
          </div>
          {projects.length > INITIAL && (
            <div className="mt-10 text-center">
              <button
                type="button"
                aria-expanded={showAll}
                aria-controls="project-list"
                onClick={() => setShowAll((current) => !current)}
                className="group/btn inline-flex min-h-12 items-center gap-2 rounded-xl border bg-card px-6 py-3 text-sm font-medium transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                {showAll ? "Show featured projects" : `Show all projects (${projects.length})`}
                {showAll ? <ChevronUp size={16} aria-hidden /> : <ChevronDown size={16} aria-hidden className="transition-transform group-hover/btn:translate-y-0.5" />}
              </button>
            </div>
          )}
        </Section>

        <Section id="skills" label="04 / Skills" title="Technical skills">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              Technologies and tools I use to design, build, and support software.
            </p>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {skills.reduce((total, group) => total + group.items.length, 0)} skills <span className="text-primary">·</span> {skills.filter((group) => group.items.length).length} areas
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {skills.filter((s) => s.items.length).map((s, index) => {
              const SkillIcon = [Code2, PanelsTopLeft, Database, Wrench][index % 4];
              return (
                <article
                  key={s.group}
                  onMouseMove={trackSpotlight}
                  className="spotlight group rounded-2xl border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <SkillIcon size={20} aria-hidden />
                    </span>
                    <span className="font-mono text-xs text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="mt-5 text-sm font-semibold tracking-wide text-foreground">{s.group}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.items.map((item) => (
                      <Tag key={item}>{item}</Tag>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Section>

        <Section id="certifications" label="05 / Credentials" title="Certifications">
          {certifications.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {certifications.map((certification) => (
                <article
                  key={`${certification.name}-${certification.issuer}`}
                  onMouseMove={trackSpotlight}
                  className="spotlight group rounded-2xl border bg-card/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                      <Award size={20} aria-hidden />
                    </span>
                    {certification.credentialUrl && (
                      <a
                        href={certification.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View ${certification.name} certificate`}
                        className="rounded-md p-2 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                      >
                        <ExternalLink size={16} aria-hidden />
                      </a>
                    )}
                  </div>
                  <h3 className="mt-5 font-semibold text-foreground">{certification.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{certification.issuer}</p>
                  <p className="mt-4 font-mono text-xs uppercase tracking-[0.16em] text-primary">{certification.date}</p>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-dashed bg-card/50 p-6 sm:flex-row sm:items-center sm:p-8">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
                <Award size={26} aria-hidden />
              </span>
              <div>
                <h3 className="font-semibold text-foreground">Credentials coming soon</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  This space is ready for certifications. Add each credential's name, issuing organization, date, and (optionally) a verification link.
                </p>
              </div>
            </div>
          )}
        </Section>

        <Section id="resume" label="06 / Resume" title="Resume">
          <div onMouseMove={trackSpotlight} className="spotlight group/btn grid gap-6 overflow-hidden rounded-3xl border bg-card/80 p-5 shadow-[0_24px_80px_-40px_rgba(129,140,248,0.55)] backdrop-blur-sm sm:p-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:p-8">
            {resume.url ? (
              <>
                <div className="flex min-w-0 items-center gap-5">
                  <div className="relative flex h-20 w-16 shrink-0 items-center justify-center rounded-xl border bg-secondary text-primary shadow-sm transition-transform duration-300 group-hover/btn:-translate-y-1">
                    <FileText size={30} aria-hidden />
                    <span className="absolute -bottom-2 rounded-md border bg-background px-2 py-0.5 font-mono text-[9px] font-semibold tracking-wider text-muted-foreground">PDF</span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">Resume / CV</p>
                    <h3 className="mt-2 truncate text-base font-semibold text-foreground sm:text-lg">{resume.fileName}</h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">{resume.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3 lg:justify-end">
                  <a href={resume.downloadUrl} target="_blank" rel="noopener noreferrer" className="group/btn inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <Download size={16} aria-hidden />
                    Download PDF
                  </a>
                  <a href={resume.url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border bg-background/50 px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                    <ExternalLink size={16} aria-hidden />
                    Preview
                  </a>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-5">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border bg-secondary text-primary"><FileText size={28} aria-hidden /></div>
                <p className="text-muted-foreground">Resume coming soon. Place your PDF at <code className="font-mono">public/resume.pdf</code>.</p>
              </div>
            )}
          </div>
        </Section>

        <Section id="contact" label="07 / Contact" title="Let's talk">
          <div className="grid items-stretch gap-8 lg:grid-cols-[minmax(0,1.25fr)_320px]">
            <div onMouseMove={trackSpotlight} className="spotlight h-full rounded-3xl border bg-card/80 p-6 shadow-[0_24px_80px_-40px_rgba(129,140,248,0.7)] backdrop-blur-sm sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                Available for work
              </div>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
                Open to Java backend and full-stack software engineer roles. I enjoy building reliable APIs, thoughtful product experiences, and integrations that connect business systems.
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {contacts.map(({ href, label, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("https://") ? "_blank" : undefined}
                      rel={href.startsWith("https://") ? "noopener noreferrer" : undefined}
                      className="group/btn flex items-center gap-3 rounded-2xl border bg-secondary/70 px-4 py-3.5 text-left text-sm font-medium text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/5 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-200 group-hover/btn:scale-110">
                        <Icon size={18} aria-hidden />
                      </span>
                      <span className="min-w-0 flex-1 truncate">{label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div onMouseMove={trackSpotlight} className="spotlight mx-auto h-full w-full max-w-[340px] overflow-hidden rounded-[1.75rem] border bg-card p-3 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.8)] transition-all hover:border-primary/40">
              <div className="flex items-center justify-between px-2 pb-3 pt-1">
                <span className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">Available</span>
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground/70">Profile</span>
              </div>

              <img src="https://drive.google.com/thumbnail?id=1qryVur7qrA4h_DqrBcmeNcR0iY_nmJ6H&sz=w1000" alt={`Photo of ${profile.name}`} loading="lazy" className="aspect-[5/6] w-full rounded-[1.25rem] border object-cover object-top" />

              <div className="px-2 pb-2 pt-4">
                <p className="text-lg font-semibold tracking-tight text-foreground">{profile.name}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">Java Backend &amp; Full Stack Engineer</p>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <footer className="container-page border-t py-8 font-mono text-xs text-muted-foreground">© {new Date().getFullYear()} {profile.name}</footer>
    </>
  );
}
