import type { MouseEvent } from "react";
export function trackSpotlight(e: MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const r = el.getBoundingClientRect();
  const x = e.clientX - r.left, y = e.clientY - r.top;
  const px = x / r.width - 0.5, py = y / r.height - 0.5;
  el.style.setProperty("--mx", `${x}px`);
  el.style.setProperty("--my", `${y}px`);
  el.style.setProperty("--rx", `${(-py * 4).toFixed(2)}deg`);
  el.style.setProperty("--ry", `${(px * 4).toFixed(2)}deg`);
  el.style.setProperty("--px", px.toFixed(3));
  el.style.setProperty("--py", py.toFixed(3));
}
