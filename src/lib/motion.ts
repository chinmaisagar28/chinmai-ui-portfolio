/**
 * Shared motion primitives for the whole site.
 * One easing curve family = one visual voice.
 */

export const EASE_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_SWIFT: [number, number, number, number] = [0.65, 0.05, 0.36, 1];

/** The preloader runs ~1.4s; hero choreography starts right after it. */
export const PRELOAD_MS = 1400;

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: EASE_EXPO },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1.1, ease: EASE_EXPO } },
};

export const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Masked line reveal used by display headlines. */
export const lineReveal = {
  hidden: { y: "115%", rotate: 2.5 },
  show: {
    y: "0%",
    rotate: 0,
    transition: { duration: 1.05, ease: EASE_EXPO },
  },
};

export const viewportOnce = { once: true, margin: "-12% 0px -12% 0px" } as const;
