"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import Reveal from "./Reveal";

const STEPS = [
  { num: "01", title: "Requirement", body: "Get the objective. Understand the why behind the what." },
  { num: "02", title: "Research", body: "References, patterns, constraints — before opinions." },
  { num: "03", title: "Ideas", body: "More than one direction. Then choose deliberately." },
  { num: "04", title: "Experiment", body: "Make the rough version real. Test it early." },
  { num: "05", title: "Iteration", body: "Refine type, spacing, color, motion. Repeat." },
  { num: "06", title: "Output", body: "Polished, consistent, delivered. No loose ends." },
];

/** Given the objective — the scroll-drawn path from brief to polished output. */
export default function OwnershipFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.55"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 70, damping: 20 });
  const scaleY = reduced ? undefined : progress;
  const dotTop = useTransform(progress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative z-10 py-24 md:py-32" aria-label="Ownership and problem solving">
      <div className="shell">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-[11px] tracking-[0.25em] text-vermilion">08</span>
            <span className="mono-label">Ownership</span>
            <span className="h-px flex-1 bg-paper/10" aria-hidden="true" />
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-8 font-display text-[clamp(1.75rem,6.5vw,5.5rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.02em] text-paper">
            Given the objective.
          </h2>
          <p className="mt-3 font-editorial text-[clamp(1.5rem,4.5vw,3.8rem)] italic leading-tight text-vermilion">
            I figure out the path.
          </p>
        </Reveal>

        <div ref={ref} className="relative mt-16 md:mt-24">
          {/* the path */}
          <div className="absolute bottom-2 left-[4px] top-2 w-px bg-paper/10" aria-hidden="true">
            {scaleY !== undefined && (
              <motion.div
                className="absolute inset-0 origin-top bg-vermilion"
                style={{ scaleY }}
              />
            )}
            {!reduced && (
              <motion.div
                className="absolute left-1/2 h-[11px] w-[11px] -translate-x-1/2 rounded-full bg-vermilion"
                style={{
                  top: dotTop,
                  boxShadow: "0 0 14px 2px rgba(255,75,46,0.55)",
                }}
              />
            )}
          </div>

          <ol>
            {STEPS.map((step, i) => (
              <li key={step.num} className="relative pb-12 pl-10 last:pb-0 md:pb-16 md:pl-14">
                <span
                  aria-hidden="true"
                  className={`absolute left-0 top-1.5 h-[9px] w-[9px] rounded-full ${
                    i === STEPS.length - 1 ? "bg-vermilion" : "border border-paper/30 bg-ink"
                  }`}
                />
                <Reveal delay={0.04}>
                  <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                    <span className="font-mono text-[11px] tracking-[0.25em] text-vermilion">
                      {step.num}
                    </span>
                    <h3 className="font-display text-xl font-bold uppercase tracking-tight text-paper md:text-2xl">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-mute">{step.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
