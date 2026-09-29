"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const PILLARS = [
  {
    num: "01",
    title: "Creative Thinking",
    body: "I approach problems from both sides of the screen — visual and functional — so the solution works, and looks intentional doing it.",
  },
  {
    num: "02",
    title: "Technical Understanding",
    body: "A development background means I know how designs become real products, constraints included — so what I hand over can actually ship.",
  },
  {
    num: "03",
    title: "Ownership",
    body: "Give me the objective and the context. I map the path, make the decisions, and bring back something polished — not a list of questions.",
  },
  {
    num: "04",
    title: "Cross-functional Fluency",
    body: "Business apps, dev teams, client requirements — I'm used to translating between technical and non-technical worlds, in both directions.",
  },
];

export default function WhatIBring() {
  return (
    <section id="bring" className="relative z-10 py-24 md:py-32" aria-label="What I bring">
      <div className="shell">
        <SectionHeading
          index="07"
          label="What I Bring"
          title={
            <>
              More than a{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                tool list.
              </span>
            </>
          }
          intro="Tools can be taught in a week. These four things are the reason my work lands finished."
        />

        <div className="mt-14 grid gap-px border border-paper/10 bg-paper/10 md:mt-20 md:grid-cols-2">
          {PILLARS.map((pillar, i) => (
            <Reveal key={pillar.num} delay={i * 0.06} className="bg-ink">
              <div className="group relative flex h-full flex-col p-8 transition-colors duration-500 hover:bg-ink-2 md:p-12">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-[2px] w-0 bg-vermilion transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full"
                />
                <div className="flex items-baseline justify-between">
                  <span className="font-mono text-xs tracking-[0.3em] text-vermilion">
                    {pillar.num}
                  </span>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-faint transition-transform duration-500 group-hover:translate-x-1 group-hover:text-vermilion"
                  >
                    →
                  </span>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-tight text-paper md:text-3xl">
                  {pillar.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-mute md:text-[15px]">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
