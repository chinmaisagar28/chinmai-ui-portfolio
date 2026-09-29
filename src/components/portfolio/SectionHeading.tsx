"use client";

import type { ReactNode } from "react";
import Reveal from "./Reveal";

type Props = {
  index: string;
  label: string;
  title: ReactNode;
  intro?: string;
  className?: string;
};

/** Consistent editorial section header: index — label — rule, then display title. */
export default function SectionHeading({ index, label, title, intro, className = "" }: Props) {
  return (
    <div className={className}>
      <Reveal>
        <div className="flex items-center gap-4">
          <span className="font-mono text-[11px] tracking-[0.25em] text-vermilion">{index}</span>
          <span className="mono-label">{label}</span>
          <span className="h-px flex-1 bg-paper/10" aria-hidden="true" />
          <span className="mono-label hidden md:block">/ 10</span>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.6fr_1fr] lg:items-end lg:gap-12">
        <Reveal delay={0.08}>
          <h2 className="font-display text-[clamp(2.1rem,5.2vw,4.6rem)] font-bold uppercase leading-[0.95] tracking-[-0.02em] text-paper">
            {title}
          </h2>
        </Reveal>
        {intro ? (
          <Reveal delay={0.16}>
            <p className="max-w-md text-sm leading-relaxed text-mute lg:justify-self-end lg:text-right">
              {intro}
            </p>
          </Reveal>
        ) : null}
      </div>
    </div>
  );
}
