"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: vermilion dot + trailing ring.
 * - ring expands over interactive elements (a, button, [data-cursor="hover"])
 * - turns into a filled "VIEW" badge over [data-cursor="view"]
 * - disabled entirely on touch devices & reduced-motion users
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor");

    const dot = dotRef.current;
    const ring = ringRef.current;
    const label = labelRef.current;
    if (!dot || !ring || !label) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let dx = mx;
    let dy = my;
    let rx = mx;
    let ry = my;
    let ringScale = 1;
    let dotScale = 1;
    let shown = false;
    let pressing = false;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!shown) {
        shown = true;
        rx = mx;
        ry = my;
        dx = mx;
        dy = my;
        dot.style.opacity = "1";
        ring.style.opacity = "1";
      }
    };

    const setState = (state: string) => {
      ring.dataset.state = state;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const view = target.closest<HTMLElement>('[data-cursor="view"]');
      if (view) {
        label.textContent = view.dataset.cursorLabel ?? "VIEW";
        setState("view");
        return;
      }
      if (target.closest('a, button, [data-cursor="hover"], input, textarea, [role="button"]')) {
        setState("hover");
        return;
      }
      setState("");
    };

    const onDown = () => {
      pressing = true;
    };
    const onUp = () => {
      pressing = false;
    };
    const onLeave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
      shown = false;
    };

    const tick = () => {
      dx += (mx - dx) * 0.55;
      dy += (my - dy) * 0.55;
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;

      const state = ring.dataset.state;
      const targetRing = pressing ? 0.82 : state === "hover" ? 1.9 : 1;
      const targetDot = pressing ? 0.6 : state === "hover" || state === "view" ? 0.45 : 1;
      ringScale += (targetRing - ringScale) * 0.2;
      dotScale += (targetDot - dotScale) * 0.2;

      dot.style.transform = `translate3d(${dx}px, ${dy}px, 0) translate(-50%, -50%) scale(${dotScale})`;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%) scale(${ringScale})`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mousedown", onDown, { passive: true });
    window.addEventListener("mouseup", onUp, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      root.classList.remove("custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[400] h-2 w-2 rounded-full opacity-0"
        style={{
          background: "#ff4b2e",
          boxShadow: "0 0 14px 3px rgba(255,75,46,0.6)",
        }}
      />
      <div
        ref={ringRef}
        data-state=""
        aria-hidden="true"
        className="cursor-ring pointer-events-none fixed left-0 top-0 z-[399] flex h-9 w-9 items-center justify-center rounded-full opacity-0"
      >
        <span
          ref={labelRef}
          className="cursor-label font-mono text-[9px] font-medium uppercase tracking-[0.2em] text-ink"
        >
          VIEW
        </span>
      </div>
    </>
  );
}
