import ProjectCard from "../project-card/project-card";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectLink: string;
}

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="mb-12 my-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ul>
  );
}
