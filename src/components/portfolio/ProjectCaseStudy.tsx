"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/data/projects";
import { site } from "@/data/site";
import { EASE_EXPO } from "@/lib/motion";

type Props = {
  project: Project | null;
  onClose: () => void;
};

/** Full-screen case study overlay — 01 Overview → 08 Reflection. */
export default function ProjectCaseStudy({ project, onClose }: Props) {
  return (
    <AnimatePresence>
      {project && <CaseStudyContent key={project.id} project={project} onClose={onClose} />}
    </AnimatePresence>
  );
}

function CaseStudyContent({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(id);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [onClose]);

  if (!mounted) return null;

  return createPortal(
    <motion.div
      className="fixed inset-0 z-[120] overflow-y-auto bg-ink/[0.985] backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35, ease: EASE_EXPO }}
      role="dialog"
      aria-modal="true"
      aria-label={`Case study — ${project.title}`}
      style={{ "--p-accent": project.accent } as React.CSSProperties}
    >
      <motion.div
        className="shell min-h-full pb-20 pt-8 md:pt-10"
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
        transition={{ duration: 0.6, ease: EASE_EXPO }}
      >
        {/* top bar */}
        <div className="sticky top-0 z-10 -mx-5 flex items-center justify-between border-b border-paper/10 bg-ink/90 px-5 py-4 backdrop-blur-md md:-mx-10 md:px-10">
          <span className="mono-label">
            Case Study — <span className="text-[color:var(--p-accent)]">{project.index}</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="inline-flex h-10 items-center gap-2 border border-paper/25 px-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper transition-colors hover:border-vermilion hover:bg-vermilion hover:text-ink"
          >
            Close ✕
          </button>
        </div>

        {/* header */}
        <header className="mt-12 md:mt-16">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--p-accent)]">
            {project.category}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,7vw,6rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-paper">
            {project.title}
          </h2>

          <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-paper/10 pt-6 md:grid-cols-4">
            {[
              { l: "Role", v: project.role },
              { l: "Year", v: project.year },
              { l: "Category", v: project.category },
              { l: "Tools", v: project.tools.join(" · ") },
            ].map((m) => (
              <div key={m.l}>
                <dt className="mono-label">{m.l}</dt>
                <dd className="mt-2 text-[13px] leading-relaxed text-paper/80">{m.v}</dd>
              </div>
            ))}
          </dl>
        </header>

        {/* image */}
        {project.image && (
          <div className="relative mt-12 aspect-[16/9] w-full overflow-hidden border border-paper/10">
            <Image
              src={project.image}
              alt={project.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 80vw"
              className="object-cover"
            />
          </div>
        )}

        {/* sections */}
        <div className="mx-auto mt-16 max-w-3xl md:mt-20">
          {project.caseStudy?.map((section, i) => (
            <section
              key={section.label}
              className="border-t border-paper/10 py-8 first:border-t-0 first:pt-0"
            >
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tracking-[0.25em] text-[color:var(--p-accent)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-paper">
                  {section.label}
                </h3>
              </div>
              <p className="mt-4 text-[15px] leading-relaxed text-mute">{section.body}</p>
            </section>
          ))}

          {/* footer actions */}
          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-paper/10 pt-8">
            {project.links?.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noreferrer" : undefined}
                {...(link.external
                  ? {}
                  : link.href.endsWith(".pdf")
                    ? { download: "Chinmai-Sagar-AV-Resume.pdf" }
                    : {})}
                className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] text-paper"
              >
                {link.label} ↗
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] text-mute"
            >
              Ask me about it →
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.body
  );
}
