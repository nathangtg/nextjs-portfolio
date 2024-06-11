import About from "./about";
import Experiences from "./experiences";
import Projects from "./projects";

export default function CompiledPortfolio() {
  return (
    <div className="w-full py-24 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 overflow-y-auto">
      <About />
      <Experiences />
      <Projects />
    </div>
  );
}
