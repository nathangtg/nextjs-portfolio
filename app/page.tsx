"use client";

import GitHub from "@/components/Icons/GitHub/GitHub";
import LinkedIn from "@/components/Icons/LinkedIn/Linkedin";
import NameHeader from "@/components/name-header/name-header";
import Navbar from "@/components/navbar/navbar";
import ProjectCard from "@/components/project-card/project-card";
import ProjectList from "@/components/projects/project";

export default function Home() {
  return (
    <div
      className="  lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen 
                    max-w-screen-xl px-6 py-24 font-sans md:px-12 md:py-20 
                    lg:px-24 lg:py-0"
    >
      <div className="w-full">
        <NameHeader
          name="Nathan G"
          role="Information Technology Student"
          description="I realise and build my ideas with technology and development."
        />
        <Navbar />
      </div>

      {/* Section II */}
      <div className="lg:w-1/2"></div>
    </div>
  );
}
