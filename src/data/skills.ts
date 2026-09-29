/**
 * SKILLS — honest levels only.
 * Levels: "practical" | "working" | "developing"
 * (wording shown on site: Practical Experience / Working Knowledge / Currently Developing)
 */

export type SkillLevel = "practical" | "working" | "developing";

export type DesignSkill = {
  index: string;
  name: string;
  level: SkillLevel;
  note: string;
};

export const LEVEL_LABEL: Record<SkillLevel, string> = {
  practical: "Practical Experience",
  working: "Working Knowledge",
  developing: "Currently Developing",
};

export const LEVEL_COLOR: Record<SkillLevel, string> = {
  practical: "#f2eee3",
  working: "#ffb03a",
  developing: "#7dd8a5",
};

/** Featured design tools (JD-critical) — rendered as large tiles. */
export const featuredTools = [
  {
    name: "Figma",
    tag: "Interface & layout design",
    level: "working" as SkillLevel,
    note: "Frames, auto-layout, component thinking — deepening daily.",
  },
  {
    name: "Canva",
    tag: "Social, collateral & decks",
    level: "practical" as SkillLevel,
    note: "Fast, on-brand creatives for posts, decks and marketing.",
  },
];

export const designSkills: DesignSkill[] = [
  {
    index: "01",
    name: "Visual Design",
    level: "developing",
    note: "Hierarchy, composition, contrast — trained daily through real layouts like this site.",
  },
  {
    index: "02",
    name: "Layout & Grid",
    level: "practical",
    note: "Flexbox and grid systems across shipped web builds — structure before decoration.",
  },
  {
    index: "03",
    name: "UI Design",
    level: "practical",
    note: "Interface work through real projects: Net-Book, AI Dress Advisor, internal Zoho screens.",
  },
  {
    index: "04",
    name: "Typography",
    level: "developing",
    note: "Pairing, scale, rhythm — this portfolio is the practice ground.",
  },
  {
    index: "05",
    name: "Social Media Creative",
    level: "practical",
    note: "Post formats, thumbnails and campaign visuals built in Canva.",
  },
  {
    index: "06",
    name: "Presentation Design",
    level: "practical",
    note: "Structured visual decks — hierarchy over walls of text.",
  },
  {
    index: "07",
    name: "Color Systems",
    level: "developing",
    note: "Restrained palettes, one accent, consistent semantics — as used across this site.",
  },
  {
    index: "08",
    name: "Brand Consistency",
    level: "practical",
    note: "Maintaining one visual language across multi-page builds and team projects.",
  },
];

/** Stack groups — only technologies supported by the resume. */
export type StackGroup = {
  id: string;
  label: string;
  items: { name: string; note?: string }[];
};

export const stackGroups: StackGroup[] = [
  {
    id: "design",
    label: "Design",
    items: [
      { name: "Figma", note: "Working knowledge" },
      { name: "Canva", note: "Practical experience" },
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    items: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "JavaScript" },
      { name: "React.js" },
      { name: "Redux" },
      { name: "Tailwind CSS" },
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    items: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "SQL" },
      { name: "Firebase" },
      { name: "REST APIs" },
    ],
  },
  {
    id: "automation",
    label: "Automation & Business Systems",
    items: [
      { name: "Zoho CRM" },
      { name: "Deluge" },
      { name: "Workflows" },
      { name: "Webhooks" },
      { name: "API Integrations" },
    ],
  },
  {
    id: "tools",
    label: "Tooling",
    items: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Claude Code" },
      { name: "Cursor" },
    ],
  },
];
