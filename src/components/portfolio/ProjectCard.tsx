"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { motion, useReducedMotion } from "framer-motion";
import type { Project } from "@/data/projects";
import { EASE_EXPO, viewportOnce } from "@/lib/motion";

type Props = {
  project: Project;
  variant: "left" | "right";
  onOpen: (project: Project) => void;
};

/**
 * One card component renders every project — layout, accent, tags and
 * behavior are all driven by the project data. Optional fields (image,
 * links) degrade gracefully.
 */
export default function ProjectCard({ project, variant, onOpen }: Props) {
  const reduced = useReducedMotion();

  return (
    <article
      className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
      style={{ "--p-accent": project.accent } as CSSProperties}
    >
      {/* visual */}
      <div className={`lg:col-span-7 ${variant === "right" ? "lg:order-2" : ""}`}>
        <button
          type="button"
          onClick={() => onOpen(project)}
          data-cursor="view"
          data-cursor-label="OPEN"
          aria-label={`Open case study: ${project.title}`}
          className="group relative block w-full overflow-hidden border border-paper/10 text-left transition-colors duration-500 hover:border-[color:var(--p-accent)]/50"
        >
          <motion.div
            className="relative aspect-[16/10] w-full"
            initial={reduced ? false : { scale: 1.1, opacity: 0.35 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={viewportOnce}
            transition={{ duration: 1.25, ease: EASE_EXPO }}
          >
            {project.image ? (
              <Image
                src={project.image}
                alt={project.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.045]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-ink-2">
                <span className="font-display text-5xl font-bold text-paper/20">
                  {project.index}
                </span>
              </div>
            )}

            <span className="pointer-events-none absolute left-4 top-4 border border-paper/20 bg-ink/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.25em] text-paper backdrop-blur-sm">
              {project.index}
            </span>
            <span className="pointer-events-none absolute bottom-4 right-4 font-mono text-[9px] uppercase tracking-[0.25em] text-paper/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              Case study ↗
            </span>
          </motion.div>
        </button>
      </div>

      {/* text */}
      <div className={`flex flex-col lg:col-span-5 ${variant === "right" ? "lg:order-1" : ""}`}>
        <div className="flex items-baseline justify-between gap-4">
          <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--p-accent)]">
            {project.category}
          </span>
          <span className="font-mono text-[11px] tracking-[0.22em] text-faint">{project.year}</span>
        </div>

        <h3 className="mt-4 font-display text-3xl font-bold uppercase leading-[0.95] tracking-tight text-paper transition-colors duration-500 hover:text-[color:var(--p-accent)] md:text-5xl">
          {project.title}
        </h3>

        <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
          {project.role}
        </p>

        <p className="mt-5 text-sm leading-relaxed text-mute md:text-[15px]">
          {project.description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tools used">
          {project.tools.map((tool) => (
            <li
              key={tool}
              className="border border-paper/15 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-mute md:text-[10px]"
            >
              {tool}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap items-center gap-6">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] text-paper transition-colors hover:text-[color:var(--p-accent)]"
          >
            Read Case Study ↗
          </button>
          {project.links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noreferrer" : undefined}
              {...(link.external ? {} : link.href.endsWith(".pdf") ? { download: "Chinmai-Sagar-AV-Resume.pdf" } : {})}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-paper"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
