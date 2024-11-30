import Image from "next/image";

interface Project {
  name: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectLink: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  const { name, description, projectLink, technologies, imageUrl } = project;

  return (
    <ul>
      <li className="mb-12">
        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
          <div className="z-10 sm:order-2 sm:col-span-6">
            <h3>
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                href={projectLink}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={name}
              >
                <span>{name}</span>
              </a>
            </h3>
            <p className="mt-2 text-sm leading-normal">{description}</p>
            <a
              className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300"
              href={projectLink}
              target="_blank"
              rel="noreferrer noopener"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-1 h-3 w-3"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
              {technologies.map((tech, index) => (
                <li key={index} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    {tech}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </li>
    </ul>
  );
}
