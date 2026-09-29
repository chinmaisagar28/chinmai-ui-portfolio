"use client";

import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const FLOW = [
  { name: "Zoho CRM", tag: "Custom modules & enterprise workflows" },
  { name: "Workflows", tag: "Automated business logic" },
  { name: "Deluge Functions", tag: "Custom server-side logic" },
  { name: "REST APIs", tag: "Full request / response lifecycles" },
  { name: "Webhooks", tag: "Real-time event triggers" },
  { name: "External Services", tag: "Third-party integrations" },
];

const LEARNED = [
  {
    title: "Requirement Gathering",
    body: "Translating what a client says into what a system must do — the same skill as translating a brief into a visual.",
  },
  {
    title: "Systems Thinking",
    body: "Every screen lives inside a workflow. Design that ignores the system around it is decoration.",
  },
  {
    title: "Consistency at Scale",
    body: "Enterprise CRM customization teaches you what breaks when visual language drifts — and why it must not.",
  },
];

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="mx-2 inline-block rotate-90 self-center font-mono text-sm text-vermilion md:rotate-0"
    >
      →
    </span>
  );
}

export default function DigitalSystems() {
  return (
    <section id="systems" className="relative z-10 py-24 md:py-32" aria-label="Digital systems experience">
      <div className="shell">
        <SectionHeading
          index="05"
          label="Digital Systems"
          title={
            <>
              Beyond the{" "}
              <span className="font-editorial font-normal normal-case italic text-vermilion">
                visual.
              </span>
            </>
          }
          intro="1+ year inside the Zoho ecosystem — where interfaces meet real business workflows and consistency is enforced by systems, not vibes."
        />

        {/* ecosystem flow */}
        <Reveal className="mt-16 md:mt-20">
          <div className="flex flex-col items-stretch gap-1 border border-paper/10 bg-ink-2/60 p-5 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-0 md:p-8">
            {FLOW.map((node, i) => (
              <div key={node.name} className="flex flex-col md:flex-row md:items-center">
                <div
                  className="group flex flex-1 flex-col justify-between gap-1 border border-paper/15 px-4 py-4 transition-colors duration-300 hover:border-vermilion/60 md:px-5"
                  data-cursor="hover"
                >
                  <span className="font-mono text-[9px] tracking-[0.25em] text-faint">
                    NODE {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-tight text-paper md:text-base">
                    {node.name}
                  </span>
                  <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
                    {node.tag}
                  </span>
                </div>
                {i < FLOW.length - 1 && <Arrow />}
              </div>
            ))}
          </div>
        </Reveal>

        {/* what it built */}
        <div className="mt-14 grid gap-px border border-paper/10 bg-paper/10 md:mt-16 md:grid-cols-3">
          {LEARNED.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.08} className="bg-ink">
              <div className="flex h-full flex-col gap-3 p-7 md:p-8">
                <span className="font-mono text-[10px] tracking-[0.25em] text-vermilion">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-lg font-bold uppercase tracking-tight text-paper">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-mute">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <p className="max-w-2xl font-editorial text-xl italic leading-snug text-paper/80 md:text-2xl">
            This is why “minimal hand-holding” isn’t a slogan for me —{" "}
            <span className="text-vermilion">
              I’ve delivered where the design has to survive contact with real users.
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
