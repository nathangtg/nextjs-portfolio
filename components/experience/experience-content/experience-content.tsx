import React from "react";
import TechBox from "../../tech-box/tech-box";

interface ExperienceContentProps {
  title: string;
  company: string;
  companyLink: string;
  description: string;
  technologies: string[];
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  title,
  company,
  companyLink,
  description,
  technologies,
}) => {
  return (
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-slate-200">
        <div>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            href={companyLink}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} at ${company} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title} ·
              <span className="inline-block">
                {company}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </h3>
      <p className="mt-2 text-sm leading-normal">{description}</p>
      <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
        {technologies.map((tech) => (
          <TechBox key={tech} tech={tech} />
        ))}
      </ul>
    </div>
  );
};

export default ExperienceContent;
