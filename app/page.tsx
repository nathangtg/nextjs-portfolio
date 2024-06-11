"use client";

import NameHeader from "@/components/name-header/name-header";
import Navbar from "@/components/navbar/navbar";

export default function Home() {
  return (
    <div
      className="lg:flex lg:justify-between lg:gap-4 mx-auto min-h-screen 
                    max-w-screen-xl px-6 py-24 font-sans md:px-12 md:py-20 
                    lg:px-24 lg:py-0"
    >
      <div className="w-96">
        <NameHeader
          name="John Doe"
          role="Software Engineer"
          description="I build things with code."
        />
        <Navbar />
      </div>

      {/* Right Section: Experiences or Resume */}
      <div className="lg:w-3/4">
        {/* You can place your experiences or resume content here */}
      </div>
    </div>
  );
}
