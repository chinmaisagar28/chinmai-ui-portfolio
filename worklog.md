# Worklog — Premium Graphic Designer Internship Portfolio

Project: Next.js 16 + TypeScript + Tailwind 4 + framer-motion single-page editorial portfolio
Candidate: Chinmai Sagar A.V (from uploaded resume — source of truth)
Target: Graphic Designer Internship application

---

Task ID: 1
Agent: main (Z.ai Code)
Task: Setup — resume extraction, assets, environment recon

Work Log:
- Read uploaded resume PDF (upload/chinmai_resume.pdf) and extracted full profile: name, summary, skills, experience (Elite Tech Corp Zoho Developer Intern Feb 2025–Mar 2026; Shiash Info Solutions ML Intern May–Jul 2024), projects (Net-Book Community Website, AI Dress Advisor), education (BCA DRBCCC College / Univ. of Madras 2024 — 80.8%; HSC 2021 — 81%), contact.
- Extracted REAL embedded hyperlinks from PDF annotations via pypdf (no fabrication needed):
  - LinkedIn: https://www.linkedin.com/in/chinmai-sagar-a576711ab/
  - Net-Book live: https://netbook-60029485510.development.catalystserverless.in/app/index.html
  - AI Dress Advisor live: https://ai-dress-advisor-60029485510.development.catalystserverless.in/app/index.html
  - Email: chinmai534@gmail.com
- Copied resume to public/resume/Chinmai-Sagar-AV-Resume.pdf (downloadable).
- Generated 3 dark-editorial project preview images (public/images/projects/): netbook.jpg (amber), dress-advisor.jpg (sage green), portfolio.jpg (vermilion poster, doubles as OG image).
- Verified env: Next 16 App Router, Tailwind 4, framer-motion 12, lucide-react; dev server running on :3000.

Stage Summary:
- Design direction locked: near-black warm canvas (#0B0A08), warm white (#F2EEE3), single vermilion accent (#FF4B2E); per-project accents amber/sage/vermilion. Type system: Syne (display) + Instrument Serif (editorial italic) + Space Grotesk (body) + IBM Plex Mono (metadata).
- No backend/DB needed (pure static portfolio; resume download is a static file).
- Plan: tokens → data layer → primitives (cursor/particle bg/preloader) → sections → page → QA via Agent Browser.

---
Task ID: 2
Agent: main (Z.ai Code)
Task: Design tokens & app shell

Work Log:
- Rewrote globals.css: kept shadcn var blocks, added portfolio @theme tokens — palette (ink #0B0A08 / ink-2 / ink-3, paper #F2EEE3, mute, faint, vermilion #FF4B2E, amber #FFB03A, sage #7DD8A5), font tokens (display=Syne, editorial=Instrument Serif, body=Space Grotesk, mono=IBM Plex Mono), ease-expo/ease-swift, marquee + pulse-dot keyframes.
- Added base layer: selection color, focus-visible dashed vermilion outline, custom scrollbar, scroll-margin for anchors, html.custom-cursor cursor:none on fine pointers.
- Added component classes (.shell, .mono-label, .hairline-*, .text-outline, .link-underline), animated film-grain overlay (.grain, feTurbulence SVG data-URI, steps() shift), full prefers-reduced-motion handling.
- Rewrote layout.tsx: 4 next/font/google families wired to CSS vars, full metadata (title, description, keywords, OG image = portfolio poster), favicon.svg (vermilion dot + C mark), themeColor.
- Data layer: src/data/site.ts (contact incl. real LinkedIn URL + resume path + Insyble Tech targeting), projects.ts (3 projects with full 8-section case studies, per-project accent hexes, real live links), skills.ts (honest levels: practical/working/developing; featured Figma+Canva; 5 stack groups), experience.ts (6 milestones with design-transferable takeaways), lib/motion.ts (EASE curves, variants, PRELOAD_MS).

Stage Summary:
- Centralized design token system; adding future projects = appending one object to projects.ts.

---
Task ID: 3-8
Agent: main (Z.ai Code)
Task: Build all primitives & sections

Work Log:
- Primitives: Cursor.tsx (vermilion dot + trailing ring, lerp rAF loop, state machine via data-cursor attrs: hover expand / filled "OPEN" view badge, disabled on touch + reduced motion), InteractiveBackground.tsx (canvas particle network 30–90 particles adaptive, O(n²) link pass, mouse repulsion + vermilion cursor links, DPR cap 1.5, tab-hidden pause, static frame for reduced motion), Preloader.tsx (1.05s eased counter, slide-up exit, instant skip for reduced motion), MagneticButton.tsx (spring magnetic wrapper), Reveal.tsx, SectionHeading.tsx (10-section index system), Marquee.tsx (tool ticker, pause on hover).
- Sections: Navbar (scrollspy via IntersectionObserver, spring scroll progress hairline, blur-on-scroll, full-screen staggered mobile menu), Hero (masked line reveals with 1.55s post-preloader choreography, serif-italic vermilion "experiences", parallax drift, stats strip), UnexpectedPath (sticky heading + 6-milestone timeline with pulsing "now" node and takeaway callouts), Projects + ProjectCard + ProjectCaseStudy (alternating asymmetric editorial cards, accent CSS vars, hover zoom, full-screen 01→08 case study overlay), DesignSkills (featured Figma/Canva invert-on-hover tiles + 8 honest-level rows), DesignProcess (5 sticky stacking cards with giant watermark numerals), DigitalSystems (Zoho CRM→Workflows→Deluge→REST→Webhooks→Services node flow + 3 capability cells), TechStack (5-category filter tabs, color-dotted tile grid), WhatIBring (4 pillars with top-line draw hover), OwnershipFlow (scroll-drawn vermilion path with traveling glow dot), About (editorial statement + facts sidebar), Contact ("LET'S MAKE SOMETHING worth seeing." + magnetic email + 4 link cards), Footer (outline display name, live Chennai IST clock, application credit line, safe-area padding).
- page.tsx composed with skip-link, layered z-index (canvas 0 / content 10 / nav 90 / overlay 120 / grain 300 / cursor 400).

Stage Summary:
- Complete 12-section editorial portfolio, fully data-driven, reduced-motion aware.

---
Task ID: 9-10
Agent: main (Z.ai Code)
Task: QA, bug fixes, browser verification

Work Log:
- Fixed 2 lint errors (setState-in-effect in Preloader + CaseStudy mount guard) by deferring via setTimeout callback.
- BUG FOUND & FIXED via Agent Browser: case-study overlay rendered inside #work's z-10 stacking context so navbar painted above it → moved overlay to createPortal(document.body) with AnimatePresence-safe component structure.
- BUG FOUND & FIXED: hero headline clipped at 1440px ("DIGITAL experiences" wrapped to 4 lines pushing CTAs below fold) → reduced clamp to (2.35rem, 7.6vw, 7.5rem).
- BUG FOUND & FIXED: horizontal overflow at 375px (docSW 464): Syne caps ≈0.98–1.1em/char broke "SOMETHING" (contact) and "OBJECTIVE." (ownership) single words → retuned clamps on Contact h2 (1.9rem, 8.2vw), OwnershipFlow h2 (1.75rem, 6.5vw), SectionHeading (2.1rem), CaseStudy h2 (2.1rem), Footer (2.2rem). Verified docSW == 375 at top/middle/bottom scroll positions.
- Browser-verified: desktop 1440×900 (hero, all 12 sections, scrollspy, case study open/scroll/ESC-close, stack filter tabs, project cards + accents), mobile 375×812 (hero fit, hamburger menu overlay, process cards, contact, footer with live IST clock). Console: no errors. dev.log: 200s only. Lint: clean.

Stage Summary:
- Production-ready. All interactive flows verified in a real browser at desktop + mobile widths. Zero horizontal overflow, zero console errors, lint clean.

