"use client";

const ITEMS = [
  "Figma",
  "Canva",
  "React",
  "JavaScript",
  "Zoho CRM",
  "Deluge",
  "HTML5",
  "CSS3",
  "Node.js",
  "MongoDB",
  "REST APIs",
  "Tailwind",
];

function Star() {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 10 10"
      className="mx-7 shrink-0 fill-vermilion"
      aria-hidden="true"
    >
      <path d="M5 0 L6.2 3.8 L10 5 L6.2 6.2 L5 10 L3.8 6.2 L0 5 L3.8 3.8 Z" />
    </svg>
  );
}

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div className="flex shrink-0 items-center" aria-hidden={hidden}>
      {ITEMS.map((item) => (
        <span key={item} className="flex items-center whitespace-nowrap">
          <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-mute">
            {item}
          </span>
          <Star />
        </span>
      ))}
    </div>
  );
}

/** Tool ticker under the hero — pauses on hover, static for reduced motion. */
export default function Marquee() {
  return (
    <section
      className="relative z-10 overflow-hidden border-y border-paper/10 py-5"
      aria-label="Tools I work with"
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
