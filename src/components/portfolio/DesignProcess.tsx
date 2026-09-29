"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const STEPS = [
  {
    num: "01",
    title: "Understand",
    kicker: "Before pixels",
    body: "Objective, audience, context. What does success look like — and for whom? Asking this first saves everything after it.",
    chips: ["Brief", "Questions", "Constraints"],
  },
  {
    num: "02",
    title: "Explore",
    kicker: "Wide before deep",
    body: "References, patterns, moodboards — more directions than I'll ever use, so the one I pick is a decision, not a default.",
    chips: ["Research", "References", "Directions"],
  },
  {
    num: "03",
    title: "Design",
    kicker: "Concept → hierarchy",
    body: "Type, color, layout and motion — arranged so the message reads itself before anyone has to try.",
    chips: ["Layout", "Type", "Color"],
  },
  {
    num: "04",
    title: "Refine",
    kicker: "The 80/20 of craft",
    body: "Spacing passes, consistency checks, detail hunts. Then one more pass, because 'almost' is visible.",
    chips: ["Iteration", "Feedback", "Polish"],
  },
  {
    num: "05",
    title: "Deliver",
    kicker: "Finish the job",
    body: "Organized files, consistent exports, on brand, on time. Polished output means no loose ends — mine or yours.",
    chips: ["Handoff", "Assets", "Consistency"],
  },
];

export default function DesignProcess() {
  return (
    <section id="process" className="relative z-10 py-24 md:py-32" aria-label="Design process">
      <div className="shell">
        <SectionHeading
          index="04"
          label="Design Process"
          title={
            <>
              How I{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                work.
              </span>
            </>
          }
          intro="Five steps, repeated until it's right. Ownership is baked in from step one — I don't wait to be told what step two is."
        />

        <div className="mt-16 space-y-5 md:mt-24 md:space-y-7">
          {STEPS.map((step, i) => (
            <Reveal key={step.num}>
              <div
                className="sticky overflow-hidden border border-paper/10 bg-ink-2 p-7 md:p-12"
                style={{ top: `calc(5.5rem + ${i * 1.6}rem)` }}
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-10 select-none font-display text-[11rem] font-extrabold leading-none text-paper/[0.035] md:text-[16rem]"
                >
                  {step.num}
                </div>

                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-xs tracking-[0.3em] text-vermilion">
                    {step.num}
                  </span>
                  <span className="mono-label">{step.kicker}</span>
                </div>

                <h3 className="mt-5 font-display text-3xl font-extrabold uppercase tracking-tight text-paper md:text-5xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-mute md:text-base">
                  {step.body}
                </p>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {step.chips.map((chip) => (
                    <li
                      key={chip}
                      className="border border-paper/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-faint md:text-[10px]"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
