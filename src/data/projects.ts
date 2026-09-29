/**
 * PROJECTS — single source of truth for the work gallery.
 *
 * To add a project: append one object. The gallery, case-study overlay,
 * accents, tags and responsive behavior are all generated from this data.
 *
 * Optional fields (image, links, caseStudy) degrade gracefully — the UI
 * adapts instead of breaking.
 */

export type ProjectLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type CaseStudySection = {
  label: string;
  body: string;
};

export type Project = {
  id: string;
  index: string;
  title: string;
  category: string;
  role: string;
  year: string;
  description: string;
  image?: string;
  imageAlt: string;
  tools: string[];
  /** hex accent — deterministic, defined per project (never random per render) */
  accent: string;
  links?: ProjectLink[];
  caseStudy?: CaseStudySection[];
};

export const projects: Project[] = [
  {
    id: "netbook",
    index: "01",
    title: "Net-Book Community",
    category: "Web Design · Development",
    role: "Designed & built end-to-end — personal project",
    year: "2024",
    description:
      "A responsive community website designed around clarity — modern UI/UX principles, flexbox and grid layouts, and performance-first CSS. Intuitive navigation, engaging sections, one consistent visual language.",
    image: "/images/projects/netbook.png",
    imageAlt:
      "Dark editorial website design preview for the Net-Book community website — cream typography blocks on charcoal with amber accents",
    tools: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    accent: "#ffb03a",
    links: [
      {
        label: "Live Site",
        href: "https://netbook-60029485510.development.catalystserverless.in/app/index.html",
        external: true,
      },
    ],
    caseStudy: [
      {
        label: "Overview",
        body: "Net-Book is a static community website designed and built from scratch with HTML5, CSS3 and JavaScript — focused on modern UI/UX principles, intuitive navigation and a polished, consistent user experience across every page.",
      },
      {
        label: "Problem",
        body: "Community websites tend to grow into cluttered, inconsistent pages — every section styled by a different mood. The brief I set myself: make a simple hub that feels considered, loads fast and keeps one visual language everywhere.",
      },
      {
        label: "Objective",
        body: "Design a fully responsive interface with a clear hierarchy, implement it with clean hand-written CSS using flexbox and grid, and keep performance high without leaning on heavy frameworks.",
      },
      {
        label: "Concept",
        body: "Layout-first design: a strong typographic scale, an obvious navigation path, and grid-based sections that recompose — not just shrink — from desktop down to mobile.",
      },
      {
        label: "Design & Development",
        body: "I designed the layout and navigation flow, then built it with semantic HTML5, modular CSS3 and Bootstrap utilities. Flexbox and grid carried the structure, assets and styles were optimized for performance, and every breakpoint was tested by hand.",
      },
      {
        label: "Tools",
        body: "HTML5 · CSS3 · JavaScript · Bootstrap · Chrome DevTools",
      },
      {
        label: "Result",
        body: "A polished, fully responsive community website with consistent branding, intuitive navigation and solid performance — designed, built and refined end-to-end, independently. The live site is linked above.",
      },
      {
        label: "Reflection",
        body: "This project is where spacing, hierarchy and alignment stopped being theory. Building every breakpoint by hand taught me exactly why design systems matter — and why consistency is a feature, not a detail.",
      },
    ],
  },
  {
    id: "dress-advisor",
    index: "02",
    title: "AI Dress Advisor",
    category: "Web App · AI · Interface",
    role: "UI design, frontend & Flask integration — team project",
    year: "2024",
    description:
      "A web app that recommends outfits from user-uploaded photos. Real-time facial detection and skin-tone analysis run through OpenCV, served by a Flask backend behind a calm, guided interface.",
    image: "/images/projects/dress-advisor.png",
    imageAlt:
      "Interface preview of the AI Dress Advisor web app — dark charcoal UI with a sage-green upload panel and outfit recommendation cards",
    tools: ["HTML", "CSS", "JavaScript", "Python", "Flask", "OpenCV"],
    accent: "#7dd8a5",
    links: [
      {
        label: "Live App",
        href: "https://ai-dress-advisor-60029485510.development.catalystserverless.in/app/index.html",
        external: true,
      },
    ],
    caseStudy: [
      {
        label: "Overview",
        body: "AI Dress Advisor is a responsive web application that gives personalized outfit recommendations based on images the user uploads — facial detection and skin-tone analysis in real time, with a Flask backend handling the heavy lifting.",
      },
      {
        label: "Problem",
        body: "Generic outfit suggestions ignore the person in front of the screen. And image processing is expensive — without careful engineering, uploads stall the interface and users leave.",
      },
      {
        label: "Objective",
        body: "Make recommendations that actually respond to the user’s photo, behind an interface so clear that the AI part feels invisible — plus a pipeline that stays fast under load.",
      },
      {
        label: "Concept",
        body: "One guided flow: upload → analyze → match → recommend. While the system thinks, the interface keeps the user oriented — quiet states, obvious next steps, zero dead ends.",
      },
      {
        label: "Design & Development",
        body: "I designed and built the UI in HTML, CSS and JavaScript around the upload flow, implemented OpenCV-based facial detection and skin-tone analysis, and integrated a Flask backend for image processing and data. An asynchronous pipeline handles roughly 200 requests per minute, cutting response latency by ~2.3 seconds and improving overall application efficiency by ~25%.",
      },
      {
        label: "Tools",
        body: "JavaScript · HTML · CSS · Python · Flask · OpenCV",
      },
      {
        label: "Result",
        body: "A working AI web app with seamless front-end and back-end communication — designed, tested and refined with peers, incorporating feedback to improve both functionality and user experience.",
      },
      {
        label: "Reflection",
        body: "This is where I learned to design around waiting. When the system is thinking, the interface’s job is to keep trust — that lesson shows up in every interface I design now.",
      },
    ],
  },
  {
    id: "this-portfolio",
    index: "03",
    title: "This Portfolio",
    category: "Self-initiated · Design & Code",
    role: "Art direction, design & development — independent",
    year: "2025",
    description:
      "The site you’re reading — a self-directed exercise in editorial layout, kinetic typography and restrained interaction. Designed as the strongest possible proof of the eye behind it.",
    image: "/images/projects/portfolio.jpg",
    imageAlt:
      "Abstract typographic poster with oversized letterforms, thin grid lines and a vermilion accent — the visual language of this portfolio",
    tools: ["Figma", "Canva", "HTML", "CSS", "JavaScript", "React", "Tailwind", "Motion"],
    accent: "#ff4b2e",
    links: [
      {
        label: "Resume",
        href: "/resume/Chinmai-Sagar-AV-Resume.pdf",
      },
    ],
    caseStudy: [
      {
        label: "Overview",
        body: "A single-page editorial portfolio designed and built from scratch to demonstrate visual thinking rather than describe it — the artifact itself is the argument.",
      },
      {
        label: "Problem",
        body: "Most developer portfolios hide inside templates; most design applications are static PDFs. Applying for a design internship with a development background, I needed one piece that proves both the eye and the craft — honestly.",
      },
      {
        label: "Objective",
        body: "Communicate who I am in ten seconds, show real work without inflation, and make every interaction feel intentional — while staying fast and accessible.",
      },
      {
        label: "Concept",
        body: "An editorial studio aesthetic: oversized Syne headlines against Instrument Serif italics, mono metadata, fine grid lines, a warm near-black canvas and exactly one vermilion accent. Density where it matters, silence where it doesn’t.",
      },
      {
        label: "Design & Development",
        body: "I mapped the narrative first (story → proof → process → contact), set a strict type and spacing scale, designed the custom cursor and particle field, then built it component-driven in React with scroll-linked motion — fully responsive, reduced-motion aware, and generated from a single projects data file so it can grow.",
      },
      {
        label: "Tools",
        body: "Figma · Canva · React · TypeScript · Tailwind CSS · Framer Motion · Canvas API",
      },
      {
        label: "Result",
        body: "What you’re looking at. Designed, art-directed and coded end-to-end — no template, no stock imagery, every detail a deliberate decision.",
      },
      {
        label: "Reflection",
        body: "The constraints made it stronger: two typefaces, one accent color, zero decorative noise. Limitations are a design tool — this project taught me to use them.",
      },
    ],
  },
];
