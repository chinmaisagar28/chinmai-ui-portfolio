import Preloader from "@/components/portfolio/Preloader";
import Cursor from "@/components/portfolio/Cursor";
import InteractiveBackground from "@/components/portfolio/InteractiveBackground";
import Navbar from "@/components/portfolio/Navbar";
import Hero from "@/components/portfolio/Hero";
import Marquee from "@/components/portfolio/Marquee";
import UnexpectedPath from "@/components/portfolio/UnexpectedPath";
import Projects from "@/components/portfolio/Projects";
import DesignSkills from "@/components/portfolio/DesignSkills";
import DesignProcess from "@/components/portfolio/DesignProcess";
import DigitalSystems from "@/components/portfolio/DigitalSystems";
import TechStack from "@/components/portfolio/TechStack";
import WhatIBring from "@/components/portfolio/WhatIBring";
import OwnershipFlow from "@/components/portfolio/OwnershipFlow";
import About from "@/components/portfolio/About";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";

export default function Page() {
  return (
    <div className="relative flex min-h-screen flex-col bg-ink text-paper">
      {/* skip link for keyboard users */}
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[500] focus:bg-vermilion focus:px-4 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.2em] focus:text-ink"
      >
        Skip to content
      </a>

      <Preloader />
      <Cursor />
      <InteractiveBackground />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <Marquee />
        <UnexpectedPath />
        <Projects />
        <DesignSkills />
        <DesignProcess />
        <DigitalSystems />
        <TechStack />
        <WhatIBring />
        <OwnershipFlow />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* film grain overlay */}
      <div className="grain" aria-hidden="true" />
    </div>
  );
}
