"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import ProjectCaseStudy from "./ProjectCaseStudy";
import { projects, type Project } from "@/data/projects";

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="relative z-10 py-24 md:py-32" aria-label="Selected work">
      <div className="shell">
        <SectionHeading
          index="02"
          label="Selected Work"
          title={
            <>
              Proof, not{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                promises.
              </span>
            </>
          }
          intro="Designed, built and shipped — no filler, no invented clients. Open any project for the full case study."
        />

        <div className="mt-20 space-y-24 md:mt-28 md:space-y-36">
          {projects.map((project, i) => (
            <Reveal key={project.id}>
              <ProjectCard
                project={project}
                variant={i % 2 === 0 ? "left" : "right"}
                onOpen={setOpen}
              />
            </Reveal>
          ))}
        </div>
      </div>

      <ProjectCaseStudy project={open} onClose={() => setOpen(null)} />
    </section>
  );
}
