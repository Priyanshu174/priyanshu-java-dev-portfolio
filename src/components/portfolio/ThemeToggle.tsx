import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem("theme") === "light";
    setLight(saved);
    document.documentElement.classList.toggle("light", saved);
  }, []);
  const toggle = () => {
    const next = !light;
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };
  return (
    <button type="button" onClick={toggle} aria-label={light ? "Switch to dark mode" : "Switch to light mode"} className="rounded-md p-2.5 text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
      {light ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
