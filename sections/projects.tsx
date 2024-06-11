import LoadingAnimation from "@/components/loading-component/loading-component";
import ProjectList from "@/components/projects/project";
import { useEffect, useState } from "react";

export default function Projects() {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/GetProjects");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section
      className="mt-16 mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      id="projects"
    >
      <h2 className="text-3xl font-bold text-slate-200 mb-24">Projects</h2>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <ProjectList projects={projects} />
      )}{" "}
      {/* Conditional rendering */}
    </section>
  );
}
