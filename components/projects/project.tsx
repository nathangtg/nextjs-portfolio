import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
      <AnimatePresence>
        {projects.map((project, index) => (
          <ProjectListItem key={index} project={project} />
        ))}
      </AnimatePresence>
    </ul>
  );
}

interface ProjectListItemProps {
  project: Project;
}

function ProjectListItem({ project }: ProjectListItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.li
      ref={ref}
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 100 }}
      transition={{ duration: 0.5 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <ProjectCard project={project} />
    </motion.li>
  );
}
