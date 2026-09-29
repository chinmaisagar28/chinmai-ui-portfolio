"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { milestones } from "@/data/experience";

const KIND_LABEL = {
  education: "Education",
  internship: "Internship",
  "self-led": "Self-led",
  now: "Current focus",
} as const;

export default function UnexpectedPath() {
  return (
    <section id="path" className="relative z-10 py-24 md:py-32" aria-label="My path">
      <div className="shell grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
        <div className="self-start lg:sticky lg:top-28">
          <SectionHeading
            index="01"
            label="The Unexpected Path"
            title={
              <>
                Not a straight{" "}
                <span className="font-editorial font-normal normal-case italic text-vermilion">
                  line.
                </span>
              </>
            }
            intro="BCA → machine learning → Zoho development → the web → visual design. Every step looked sideways. Every step compounded."
          />
        </div>

        <ol className="relative ml-2 space-y-14 border-l border-paper/10 md:space-y-20">
          {milestones.map((m) => (
            <li key={m.title} className="relative pl-8 md:pl-12">
              <span
                aria-hidden="true"
                className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${
                  m.kind === "now" ? "animate-pulse-dot bg-vermilion" : "bg-paper/30"
                }`}
              />
              <Reveal>
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                  <span className="font-mono text-[11px] tracking-[0.2em] text-vermilion">
                    {m.period}
                  </span>
                  <span className="mono-label">{KIND_LABEL[m.kind]}</span>
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold uppercase tracking-tight text-paper md:text-3xl">
                  {m.title}
                </h3>
                <p className="mt-1.5 text-sm text-mute">{m.org}</p>
                <ul className="mt-4 space-y-1.5">
                  {m.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm leading-relaxed text-paper/70">
                      <span className="mt-[2px] text-faint" aria-hidden="true">
                        —
                      </span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-l-2 border-vermilion/60 pl-4 font-editorial text-base italic text-paper/85">
                  {m.takeaway}
                </p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
