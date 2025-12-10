import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 pb-0">
      <Hero />
      <RevealOnScroll>
        <Projects />
      </RevealOnScroll>

      <RevealOnScroll>
        <Contact />
      </RevealOnScroll>
    </div>
  );
}
