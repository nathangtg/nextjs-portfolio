import GitHub from "../GitHub/GitHub";
import Instagram from "../Instagram/Instagram";
import LinkedIn from "../LinkedIn/Linkedin";

export default function IconContainer() {
  return (
    <div className="mt-auto flex items-center flex-wrap gap-6 lg:py-24 md:py-4 sm:py-2">
      <GitHub />
      <LinkedIn />
      <Instagram />
    </div>
  );
}
