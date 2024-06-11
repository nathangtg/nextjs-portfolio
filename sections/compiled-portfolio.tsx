import Experiences from "./experiences";
import Projects from "./projects";

export default function CompiledPortfolio() {
  return (
    <div className="lg:w-1/2 py-8 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 overflow-y-auto">
      <Experiences />
      <Projects />
    </div>
  );
}
