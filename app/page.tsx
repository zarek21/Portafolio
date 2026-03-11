import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-20 pb-20">
        <Hero /> <Projects />
        <Contact />
      </div>
    </>
  );
}
