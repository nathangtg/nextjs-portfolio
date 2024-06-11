import IconContainer from "@/components/Icons/icon-container/icon-container";
import NameHeader from "@/components/name-header/name-header";
import Navbar from "@/components/navbar/navbar";

export default function BioData() {
  return (
    <div className="w-full">
      <NameHeader
        name="Nathan G"
        role="Information Technology Student"
        description="I realise and build my ideas with technology and development."
      />
      <Navbar />
      <IconContainer />
    </div>
  );
}
