"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { designSkills, featuredTools, LEVEL_COLOR, LEVEL_LABEL } from "@/data/skills";

export default function DesignSkills() {
  return (
    <section id="skills" className="relative z-10 py-24 md:py-32" aria-label="Design skills">
      <div className="shell">
        <SectionHeading
          index="03"
          label="Design Toolkit"
          title={
            <>
              Type. Color.{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                Composition.
              </span>
            </>
          }
          intro="Honest levels only — where I have shipped real work, and where I'm actively learning. No inflated claims."
        />

        {/* featured design tools */}
        <div className="mt-16 grid gap-4 md:mt-20 md:grid-cols-2">
          {featuredTools.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.08}>
              <div className="group relative h-full overflow-hidden border border-paper/10 p-8 transition-colors duration-500 hover:bg-paper md:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="font-display text-4xl font-extrabold uppercase tracking-tight text-paper transition-colors duration-500 group-hover:text-ink md:text-5xl">
                    {tool.name}
                    <span className="text-vermilion">.</span>
                  </h3>
                  <span className="border border-paper/15 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-mute transition-colors duration-500 group-hover:border-ink/25 group-hover:text-ink/70">
                    {LEVEL_LABEL[tool.level]}
                  </span>
                </div>
                <p className="mt-4 text-sm text-mute transition-colors duration-500 group-hover:text-ink/70">
                  {tool.tag}
                </p>
                <p className="mt-6 font-editorial text-lg italic text-paper/70 transition-colors duration-500 group-hover:text-ink/80">
                  {tool.note}
                </p>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-6 -right-3 font-display text-[7rem] font-extrabold leading-none text-paper/[0.04] transition-colors duration-500 group-hover:text-ink/[0.06]"
                >
                  {tool.name.slice(0, 2).toUpperCase()}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        {/* skill rows */}
        <div className="mt-16 border-b border-paper/10 md:mt-20">
          {designSkills.map((skill, i) => (
            <Reveal key={skill.name} delay={Math.min(i * 0.04, 0.24)}>
              <div className="group border-t border-paper/10 py-5 transition-colors duration-300 hover:bg-ink-2 md:px-4 md:py-6">
                <div className="flex items-baseline gap-5 md:gap-8">
                  <span className="font-mono text-[11px] text-faint">{skill.index}</span>
                  <h3 className="flex-1 font-display text-lg font-bold uppercase tracking-tight text-paper/75 transition-colors duration-300 group-hover:text-paper md:text-2xl">
                    {skill.name}
                  </h3>
                  <span className="flex items-center gap-2.5 font-mono text-[9px] uppercase tracking-[0.2em] text-mute md:text-[10px]">
                    <span
                      aria-hidden="true"
                      className="inline-block h-[7px] w-[7px] rounded-full"
                      style={{ background: LEVEL_COLOR[skill.level] }}
                    />
                    {LEVEL_LABEL[skill.level]}
                  </span>
                </div>
                <p className="mt-2 max-w-2xl pl-9 text-[13px] leading-relaxed text-faint transition-all duration-500 md:mt-0 md:pl-[3.4rem] md:text-sm md:opacity-0 md:group-hover:mt-3 md:group-hover:opacity-100 md:transition-opacity md:duration-500">
                  {skill.note}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
