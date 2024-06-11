"use client";

import GitHub from "@/components/Icons/GitHub/GitHub";
import NameHeader from "@/components/name-header/name-header";
import Navbar from "@/components/navbar/navbar";

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

      <GitHub />

      {/* Section II */}
      <div className="lg:w-1/2">{/* Section II Content */}</div>
    </div>
  );
}
