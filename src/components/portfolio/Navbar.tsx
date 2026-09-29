"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { navLinks, site } from "@/data/site";
import { EASE_EXPO } from "@/lib/motion";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [open, setOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25, mass: 0.4 });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  // scrollspy
  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector<HTMLElement>(l.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // lock scroll when the mobile menu is open
  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[90] transition-all duration-500 ${
          scrolled ? "border-b border-paper/10 bg-ink/80 backdrop-blur-md" : "border-b border-transparent"
        }`}
      >
        <div className="shell flex h-16 items-center justify-between md:h-[72px]">
          <a
            href="#top"
            className="font-display text-sm font-bold uppercase tracking-tight text-paper md:text-base"
            aria-label="Chinmai Sagar A.V — back to top"
          >
            Chinmai<span className="text-vermilion">.</span>
            <span className="ml-1.5 font-mono text-[10px] font-normal tracking-[0.2em] text-mute">
              SAGAR A.V
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-active={active === link.href}
                className="link-underline font-mono text-[11px] uppercase tracking-[0.22em] text-mute transition-colors hover:text-paper data-[active=true]:text-paper"
              >
                {link.label}
              </a>
            ))}
            <MagneticButton strength={0.25}>
              <a
                href={site.resume}
                download="Chinmai-Sagar-AV-Resume.pdf"
                className="inline-flex h-9 items-center border border-paper/25 px-5 font-mono text-[11px] uppercase tracking-[0.22em] text-paper transition-colors duration-300 hover:border-vermilion hover:bg-vermilion hover:text-ink"
              >
                Resume ↗
              </a>
            </MagneticButton>
          </nav>

          {/* mobile trigger */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[7px] lg:hidden"
          >
            <span
              className={`h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "translate-y-[4px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-paper transition-transform duration-300 ${
                open ? "-translate-y-[4px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {/* scroll progress */}
        <motion.div
          className="h-[2px] origin-left bg-vermilion"
          style={{ scaleX: progress }}
          aria-hidden="true"
        />
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[85] flex flex-col justify-between bg-ink px-6 pb-10 pt-28"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4, ease: EASE_EXPO }}
          >
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-baseline justify-between border-b border-paper/10 py-5 font-display text-3xl font-bold uppercase tracking-tight text-paper"
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.5, ease: EASE_EXPO }}
                >
                  {link.label}
                  <span className="font-mono text-[11px] tracking-[0.2em] text-faint">
                    0{i + 1}
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              className="flex flex-col gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <a
                href={site.resume}
                download="Chinmai-Sagar-AV-Resume.pdf"
                className="inline-flex h-12 items-center justify-center border border-paper/25 font-mono text-[11px] uppercase tracking-[0.22em] text-paper"
              >
                Download Resume ↗
              </a>
              <a
                href={`mailto:${site.email}`}
                className="font-mono text-[11px] uppercase tracking-[0.2em] text-mute"
              >
                {site.email}
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
