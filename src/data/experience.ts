/**
 * EXPERIENCE — "The Unexpected Path" timeline.
 * Every entry is from the resume; each carries the design-transferable
 * takeaway (that's the storytelling layer).
 */

export type Milestone = {
  period: string;
  title: string;
  org: string;
  kind: "education" | "internship" | "self-led" | "now";
  points: string[];
  takeaway: string;
};

export const milestones: Milestone[] = [
  {
    period: "2021",
    title: "Higher Secondary Education",
    org: "Sri Venkateshwara Met. Hr. Sec. School — Commerce with Computer Applications · 81%",
    kind: "education",
    points: ["Commerce fundamentals + first lines of code in the same classroom."],
    takeaway: "Structure and method, learned early.",
  },
  {
    period: "2021 — 2024",
    title: "Bachelor of Computer Applications",
    org: "DRBCCC College · University of Madras — 80.8%",
    kind: "education",
    points: ["Programming logic, OOP, databases, component thinking."],
    takeaway: "Systems thinking — how pieces become products.",
  },
  {
    period: "May — Jul 2024",
    title: "Machine Learning Intern",
    org: "Shiash Info Solutions Pvt. Ltd.",
    kind: "internship",
    points: [
      "Optimized a CNN for next-word prediction — +20% model accuracy.",
      "Cut training time by ~30% with efficient preprocessing.",
      "Implemented models on real datasets (movie scripts) with the team.",
    ],
    takeaway: "Iteration with measurable refinement — designer muscle, ML reps.",
  },
  {
    period: "Feb 2025 — Mar 2026",
    title: "Zoho Developer Intern",
    org: "Elite Tech Corp",
    kind: "internship",
    points: [
      "Customized enterprise CRM applications to optimize business workflows.",
      "Integrated REST APIs — managing full request/response lifecycles.",
      "Gathered client requirements inside a real SaaS product ecosystem.",
    ],
    takeaway: "Briefs, users, consistency, ownership — the professional loop.",
  },
  {
    period: "Along the way",
    title: "Self-led Web Development",
    org: "HTML · CSS · JavaScript → React, Tailwind, Node, Express, MongoDB",
    kind: "self-led",
    points: [
      "Shipped Net-Book Community — a responsive site built on UI/UX principles.",
      "Built AI Dress Advisor — interface design meeting a Flask + OpenCV backend.",
    ],
    takeaway: "Interfaces are designed first, then built — and I do both.",
  },
  {
    period: "Now",
    title: "Visual & Digital Design",
    org: "Figma & Canva practice · this portfolio · daily craft reps",
    kind: "now",
    points: [
      "Working knowledge of Figma; practical, fast output in Canva.",
      "Applying layout, type and color systems to real, shipped artifacts.",
    ],
    takeaway: "Where everything above was pointing.",
  },
];
