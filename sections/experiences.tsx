import { useState, useEffect } from "react";
import ExperienceItem from "@/components/experience/experience-item/experience-item";
import LoadingAnimation from "@/components/loading-component/loading-component";

interface Experience {
  work_id: number;
  start_date: string;
  end_date: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
  technologies: string[];
}

export default function Experiences() {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true); // Add a loading state

  useEffect(() => {
    async function fetchExperiences() {
      try {
        const res = await fetch("/api/GetExperiences");
        if (!res.ok) {
          throw new Error("Failed to fetch experiences");
        }
        const data = await res.json();
        setExperiences(data);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchExperiences();
  }, []);

  return (
    <section
      className="mt-16 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="experience"
    >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <div>
          <h1 className="my-6 text-3xl font-bold text-slate-200 mb-24">
            Experiences
          </h1>
          {loading ? (
            <LoadingAnimation /> // Conditional rendering for loading animation
          ) : (
            <ul className="">
              {experiences.map((experience: Experience) => (
                <ExperienceItem key={experience.work_id} {...experience} />
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
