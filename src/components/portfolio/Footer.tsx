"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/site";

export default function Footer() {
  const [time, setTime] = useState("--:--:--");

  useEffect(() => {
    const tick = () =>
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
          hour12: false,
        })
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="relative z-10 mt-auto border-t border-paper/10 pb-[max(1.75rem,env(safe-area-inset-bottom))] pt-14 md:pt-20">
      <div className="shell">
        <p
          aria-hidden="true"
          className="select-none font-display text-[clamp(2.2rem,9.5vw,9rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em]"
        >
          <span className="text-outline">Chinmai</span>{" "}
          <span className="text-paper">Sagar</span>
        </p>

        <div className="mt-10 flex flex-col gap-6 border-t border-paper/10 pt-6 md:flex-row md:items-center md:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-paper"
              >
                {link.label}
              </a>
            ))}
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-paper"
            >
              LinkedIn ↗
            </a>
          </nav>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            Designed & built by {site.name} — no template
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-paper/10 pt-6 md:flex-row md:items-center md:justify-between">
          <span className="mono-label">© {site.year} — {site.name}</span>
          <span className="mono-label">
            Application · {site.targetRole} — {site.targetCompany}
          </span>
          <span className="mono-label">Chennai {time} IST</span>
          <a
            href="#top"
            className="mono-label transition-colors hover:text-paper"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
