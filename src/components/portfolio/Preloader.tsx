"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { site } from "@/data/site";
import { EASE_EXPO } from "@/lib/motion";

/**
 * Brief editorial preloader — counts in, slides away.
 * Skipped instantly for prefers-reduced-motion users.
 */
export default function Preloader() {
  const [done, setDone] = useState(false);
  const [count, setCount] = useState(0);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced) {
      const id = setTimeout(() => setDone(true), 0);
      return () => clearTimeout(id);
    }
    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const DUR = 1050;
    let raf = 0;
    let timer: ReturnType<typeof setTimeout>;

    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / DUR);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.round(eased * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        timer = setTimeout(() => setDone(true), 250);
      }
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, [reduced]);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col justify-between bg-ink p-6 md:p-10"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.85, ease: EASE_EXPO }}
          aria-hidden="true"
        >
          <div className="flex items-baseline justify-between">
            <span className="mono-label">{site.name}</span>
            <span className="mono-label">Portfolio ©{site.year}</span>
          </div>

          <div className="flex items-end justify-between gap-6">
            <p className="max-w-[16rem] font-editorial text-lg italic leading-snug text-mute md:text-xl">
              design + development + automation
            </p>
            <span className="font-display text-[clamp(4rem,12vw,9rem)] font-bold leading-none tracking-tight text-paper">
              {count}
              <span className="text-vermilion">%</span>
            </span>
          </div>

          <div className="h-px w-full bg-paper/10">
            <div
              className="h-px bg-vermilion transition-[width] duration-100 ease-linear"
              style={{ width: `${count}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
