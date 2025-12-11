import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contacts";
import Scene3D from "@/components/Scene3D";

export default function Home() {
  return (
    <>
      <Scene3D />

      <div className="flex flex-col gap-20 pb-20">
        <Hero /> <Projects />
        <Contact />
      </div>
    </>
  );
}
