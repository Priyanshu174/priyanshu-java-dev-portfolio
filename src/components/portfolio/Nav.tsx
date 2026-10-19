import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const item = "rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b bg-background/70 backdrop-blur-md">
      <nav aria-label="Main" className="container-page flex h-16 items-center justify-between">
        <a href="#top" className="font-mono text-sm font-semibold text-foreground">{profile.name}</a>
        <div className="flex items-center gap-1">
        <ul className="hidden gap-1 lg:flex">
          {links.map((l) => <li key={l.href}><a className={`${item} link-underline`} href={l.href}>{l.label}</a></li>)}
        </ul>
        <ThemeToggle />
        <button type="button" className="rounded-md p-2.5 lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        </div>
      </nav>
      {open && (
        <ul id="mobile-menu" className="flex flex-col border-t px-4 py-3 lg:hidden">
          {links.map((l) => <li key={l.href}><a className={`${item} block`} href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>)}
        </ul>
      )}
    </header>
  );
}
