import ProjectList from "@/components/projects/project";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/GetProjects");
        if (!res.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await res.json();
        console.log(data);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }
    fetchProjects();
  }, []);

  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold text-slate-200">Projects</h2>
      {/* <ProjectList projects={projects} /> */}
    </section>
  );
}
