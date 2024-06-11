"use client";
import BioData from "@/sections/bio-data";
import Projects from "@/sections/projects";

export default function Home() {
  return (
    <div
      className="  lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen 
                    max-w-screen-xl px-6 py-24 font-sans md:px-12 md:py-20 
                    lg:px-24 lg:py-0"
    >
      <BioData />
      <Projects />

      <div className="lg:w-1/2"></div>
    </div>
  );
}
