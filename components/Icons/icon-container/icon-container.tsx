import GitHub from "../GitHub/GitHub";
import Instagram from "../Instagram/Instagram";
import LinkedIn from "../LinkedIn/Linkedin";

export default function IconContainer() {
  return (
    <div className="flex flex-wrap gap-4 mt-4">
      <GitHub />
      <LinkedIn />
      <Instagram />
    </div>
  );
}
