"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/data/site";

const FACTS = [
  {
    label: "Education",
    value: "BCA — DRBCCC College, University of Madras · 80.8% (2024)",
  },
  {
    label: "Schooling",
    value: "Sri Venkateshwara Met. Hr. Sec. School · Commerce with Computer Applications (2021)",
  },
  { label: "Based in", value: site.location },
  { label: "Focus", value: "Visual & digital design — Figma, Canva, the web" },
];

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 md:py-32" aria-label="About me">
      <div className="shell">
        <SectionHeading
          index="09"
          label="About"
          title={
            <>
              Hello, I&apos;m{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                Chinmai.
              </span>
            </>
          }
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          <div>
            <Reveal>
              <p className="max-w-2xl font-editorial text-2xl italic leading-snug text-paper md:text-4xl">
                I&apos;m a developer who fell for the design side of the screen.
              </p>
            </Reveal>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-relaxed text-mute md:text-base">
              <Reveal delay={0.06}>
                <p>
                  I grew up in Chennai, studied computer applications, and spent the past year
                  professionally inside the Zoho ecosystem — customizing enterprise CRM systems,
                  wiring REST APIs, and learning how real businesses actually run.
                </p>
              </Reveal>
              <Reveal delay={0.1}>
                <p>
                  Somewhere between building workflows and debugging integrations, I kept noticing
                  the same thing: the part I cared about most was the interface. How it reads. How
                  it feels. Why one layout works while another fights you.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p>
                  So now I train that muscle deliberately — self-taught web development turned into
                  shipped projects, and a daily design practice in Figma and Canva. This portfolio
                  is the record of that practice: designed and coded by me, no template, every
                  detail a decision.
                </p>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <aside className="border-t border-paper/10">
              {FACTS.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1.5 border-b border-paper/10 py-5 md:flex-row md:items-baseline md:justify-between md:gap-8"
                >
                  <span className="mono-label shrink-0">{fact.label}</span>
                  <span className="text-[13px] leading-relaxed text-paper/80 md:max-w-[60%] md:text-right">
                    {fact.value}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-3 py-5">
                <span
                  aria-hidden="true"
                  className="inline-block h-[7px] w-[7px] animate-pulse-dot rounded-full bg-vermilion"
                />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper/90">
                  {site.availability}
                </span>
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
