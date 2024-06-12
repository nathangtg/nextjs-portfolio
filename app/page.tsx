"use client";
import BioData from "@/sections/bio-data";
import CompiledPortfolio from "@/sections/compiled-portfolio";

export default function Home() {
  return (
    <div
      className="  lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen 
                    max-w-screen-xl px-6 py-24 font-sans md:px-12 md:py-20 
                    lg:px-24 lg:py-0 h-max bg-fixed bg-cover bg-center bg-no-repeat
                     overflow-x-hidden-mobile"
    >
      <div className="lg:w-1/2 h-[100%] lg:sticky top-0 z-10">
        <BioData />
      </div>
      <div className="lg:w-1/2">
        <CompiledPortfolio />
      </div>
    </div>
  );
}
