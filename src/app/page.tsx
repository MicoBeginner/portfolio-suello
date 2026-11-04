import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export const instant = false;

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-4 pt-24 pb-16 max-w-5xl mx-auto space-y-24">
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
