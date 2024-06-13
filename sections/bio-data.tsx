import IconContainer from "@/components/Icons/icon-container/icon-container";
import NameHeader from "@/components/name-header/name-header";
import Navbar from "@/components/navbar/navbar";
import Draw from "@/components/svg-animation/draw-svg";

export default function BioData() {
  return (
    <div className="w-full h-[100%] sticky top-0 z-10">
      <Draw />
      <NameHeader
        name="Nathan G"
        role="Information Technology Student"
        description="I realize and build my ideas with various technologies and development."
      />
      <Navbar />
      <IconContainer />
    </div>
  );
}
