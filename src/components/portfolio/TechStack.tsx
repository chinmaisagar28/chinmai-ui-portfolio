"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { stackGroups } from "@/data/skills";
import { EASE_EXPO } from "@/lib/motion";

const GROUP_COLOR: Record<string, string> = {
  design: "#ff4b2e",
  frontend: "#f2eee3",
  backend: "#ffb03a",
  automation: "#7dd8a5",
  tools: "#98917f",
};

export default function TechStack() {
  const [filter, setFilter] = useState<string>("all");

  const visible = filter === "all" ? stackGroups : stackGroups.filter((g) => g.id === filter);
  const tiles = visible.flatMap((group) =>
    group.items.map((item) => ({ ...item, group: group.label, groupId: group.id }))
  );

  return (
    <section id="stack" className="relative z-10 py-24 md:py-32" aria-label="Technology stack">
      <div className="shell">
        <SectionHeading
          index="06"
          label="Stack"
          title={
            <>
              The{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                toolbox.
              </span>
            </>
          }
          intro="Design on one end, automation on the other — and the full path between them. Filter by discipline."
        />

        {/* filters */}
        <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter stack by discipline">
          {[{ id: "all", label: "All" }, ...stackGroups.map((g) => ({ id: g.id, label: g.label }))].map(
            (tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={filter === tab.id}
                onClick={() => setFilter(tab.id)}
                className={`border px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                  filter === tab.id
                    ? "border-vermilion bg-vermilion text-ink"
                    : "border-paper/15 text-mute hover:border-paper/40 hover:text-paper"
                }`}
              >
                {tab.label}
              </button>
            )
          )}
        </div>

        {/* tiles */}
        <div className="mt-8 grid grid-cols-2 gap-px border border-paper/10 bg-paper/10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
          {tiles.map((tile, i) => (
            <motion.div
              key={`${filter}-${tile.name}`}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: EASE_EXPO, delay: Math.min(i * 0.03, 0.4) }}
              className="group flex min-h-[120px] flex-col justify-between bg-ink p-4 transition-colors duration-300 hover:bg-ink-2 md:min-h-[132px] md:p-5"
              data-cursor="hover"
            >
              <div className="flex items-start justify-between gap-2">
                <span className="font-display text-sm font-bold uppercase tracking-tight text-paper md:text-base">
                  {tile.name}
                </span>
                <span
                  aria-hidden="true"
                  className="mt-1 inline-block h-[7px] w-[7px] shrink-0 rounded-full opacity-70 transition-opacity group-hover:opacity-100"
                  style={{ background: GROUP_COLOR[tile.groupId] }}
                />
              </div>
              <div className="flex flex-col gap-1">
                {tile.note && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                    {tile.note}
                  </span>
                )}
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-faint/70">
                  {tile.group}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
