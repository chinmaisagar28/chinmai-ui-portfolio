"use client";

import { ArrowUpRight } from "lucide-react";
import MagneticButton from "./MagneticButton";
import Reveal from "./Reveal";
import { site } from "@/data/site";

const CARDS = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    label: "Phone",
    value: site.phone,
    href: site.phoneHref,
  },
  {
    label: "LinkedIn",
    value: "chinmai-sagar",
    href: site.linkedin,
    external: true,
  },
  {
    label: "Resume",
    value: "Download PDF ↗",
    href: site.resume,
    download: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 py-28 md:py-40" aria-label="Contact">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.25em] text-vermilion">10</span>
            <span className="mono-label">Contact</span>
            <span className="h-px flex-1 bg-paper/10" aria-hidden="true" />
          </div>
        </Reveal>

        <h2 className="mt-10 font-display text-[clamp(1.9rem,8.2vw,8rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-paper">
          <Reveal delay={0.05}>
            <span className="block">Let&apos;s make</span>
          </Reveal>
          <Reveal delay={0.12}>
            <span className="block">something</span>
          </Reveal>
          <Reveal delay={0.19}>
            <span className="block font-editorial font-normal normal-case italic tracking-normal text-vermilion">
              worth seeing.
            </span>
          </Reveal>
        </h2>

        {/* primary email */}
        <Reveal delay={0.1} className="mt-14 md:mt-20">
          <MagneticButton strength={0.15}>
            <a
              href={`mailto:${site.email}`}
              className="group inline-flex flex-wrap items-center gap-3 font-display text-xl font-bold tracking-tight text-paper md:text-4xl"
            >
              <span className="link-underline">{site.email}</span>
              <ArrowUpRight
                className="h-6 w-6 text-vermilion transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 md:h-9 md:w-9"
                aria-hidden="true"
              />
            </a>
          </MagneticButton>
        </Reveal>

        {/* contact cards */}
        <Reveal delay={0.15} className="mt-12 md:mt-16">
          <div className="grid gap-px border border-paper/10 bg-paper/10 sm:grid-cols-2 lg:grid-cols-4">
            {CARDS.map((card) => (
              <a
                key={card.label}
                href={card.href}
                target={card.external ? "_blank" : undefined}
                rel={card.external ? "noreferrer" : undefined}
                {...(card.download ? { download: "Chinmai-Sagar-AV-Resume.pdf" } : {})}
                className="group flex min-h-[120px] flex-col justify-between bg-ink p-6 transition-colors duration-300 hover:bg-ink-2"
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label">{card.label}</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-vermilion"
                    aria-hidden="true"
                  />
                </div>
                <span className="font-display text-base font-bold uppercase tracking-tight text-paper md:text-lg">
                  {card.value}
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-10">
          <p className="mono-label">
            Currently replying within a day — {site.location}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
