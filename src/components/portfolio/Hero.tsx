"use client";

import { useRef, type ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { site } from "@/data/site";
import { EASE_EXPO, PRELOAD_MS } from "@/lib/motion";

function MaskedLine({
  children,
  delay,
  reduced,
}: {
  children: ReactNode;
  delay: number;
  reduced: boolean | null;
}) {
  return (
    <span className="-mb-[0.06em] block overflow-hidden pb-[0.06em]">
      <motion.span
        className="block will-change-transform"
        initial={reduced ? false : { y: "115%", rotate: 2.5 }}
        animate={{ y: "0%", rotate: 0 }}
        transition={{ duration: 1.15, ease: EASE_EXPO, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}

const fade = (delay: number, reduced: boolean | null) =>
  reduced
    ? {}
    : {
        initial: { opacity: 0, y: 24 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.9, ease: EASE_EXPO, delay },
      };

export default function Hero() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yDrift = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.75], [1, 0.15]);

  const d = (i: number) => (reduced ? 0 : PRELOAD_MS / 1000 + 0.15 + i * 0.1);

  return (
    <section ref={ref} id="top" className="relative z-10 flex min-h-svh flex-col" aria-label="Intro">
      <div className="shell flex flex-1 flex-col justify-center pb-10 pt-28 md:pt-32">
        {/* meta row */}
        <motion.div
          {...fade(d(0), reduced)}
          className="mono-label flex flex-wrap items-center gap-x-6 gap-y-2"
        >
          <span>Portfolio — Vol. 01</span>
          <span className="hidden md:inline">{site.coordinates}</span>
          <span className="inline-flex items-center gap-2 text-paper/80">
            <span className="inline-block h-[7px] w-[7px] animate-pulse-dot rounded-full bg-vermilion" />
            {site.availability}
          </span>
        </motion.div>

        {/* headline */}
        <motion.h1
          style={reduced ? undefined : { y: yDrift, opacity: fadeOut }}
          className="mt-10 font-display text-[clamp(2.35rem,7.6vw,7.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.03em] text-paper md:mt-14"
        >
          <MaskedLine delay={d(1)} reduced={reduced}>
            I design
          </MaskedLine>
          <MaskedLine delay={d(2)} reduced={reduced}>
            digital{" "}
            <em className="font-editorial font-normal normal-case italic tracking-normal text-vermilion">
              experiences
            </em>
          </MaskedLine>
          <MaskedLine delay={d(3)} reduced={reduced}>
            that connect<span className="text-vermilion">.</span>
          </MaskedLine>
        </motion.h1>

        {/* sub + ctas */}
        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-[1.2fr_1fr] md:items-end">
          <motion.p
            {...fade(d(4), reduced)}
            className="max-w-xl text-base leading-relaxed text-mute md:text-lg"
          >
            Zoho developer by experience. Creative technologist by curiosity. I design and build
            visual, interactive, useful things — across design, code and automation.
          </motion.p>

          <motion.div {...fade(d(5), reduced)} className="flex flex-wrap items-center gap-4 md:justify-end">
            <MagneticButton>
              <a
                href="#work"
                className="inline-flex h-12 items-center bg-vermilion px-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink transition-colors duration-300 hover:bg-paper"
              >
                View Work ↓
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={site.resume}
                download="Chinmai-Sagar-AV-Resume.pdf"
                className="inline-flex h-12 items-center border border-paper/25 px-8 font-mono text-[11px] uppercase tracking-[0.22em] text-paper transition-colors duration-300 hover:border-vermilion hover:text-vermilion"
              >
                Resume ↗
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href="#contact"
                className="link-underline inline-flex h-12 items-center font-mono text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-paper"
              >
                Contact
              </a>
            </MagneticButton>
          </motion.div>
        </div>
      </div>

      {/* stats strip */}
      <motion.div
        {...fade(d(6), reduced)}
        className="shell pb-8"
      >
        <div className="grid grid-cols-2 border-t border-paper/10 md:grid-cols-4">
          {[
            { v: "01+", l: "Year — Zoho ecosystem" },
            { v: "02", l: "Shipped projects" },
            { v: "80.8%", l: "BCA · Univ. of Madras" },
            { v: "●", l: "Design deep-dive, live", accent: true },
          ].map((s) => (
            <div
              key={s.l}
              className={`flex flex-col gap-1 border-paper/10 py-5 pr-4 ${
                s.accent ? "md:items-end md:text-right" : ""
              }`}
            >
              <span
                className={`font-display text-xl font-bold md:text-2xl ${
                  s.accent ? "animate-pulse-dot text-vermilion" : "text-paper"
                }`}
              >
                {s.v}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-faint md:text-[10px]">
                {s.l}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
