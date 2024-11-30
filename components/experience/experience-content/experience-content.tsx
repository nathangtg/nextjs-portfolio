import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import TechBox from "../../tech-box/tech-box";

interface ExperienceContentProps {
  title: string;
  company: string;
  description: string;
  technologies: string[];
}

const ExperienceContent: React.FC<ExperienceContentProps> = ({
  title,
  company,
  description,
  technologies,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const initialTechCount = 3;
  const shouldShowMore = technologies.length > initialTechCount;

  const visibleTechnologies = isExpanded
    ? technologies
    : technologies.slice(0, initialTechCount);

  const handleToggle = () => {
    setIsTransitioning(true);
    setIsExpanded(!isExpanded);
    // Reset transition state after animation completes
    setTimeout(() => setIsTransitioning(false), 300);
  };

  return (
    <div className="z-10 sm:col-span-6">
      <h3 className="font-medium leading-snug text-slate-200">
        <div>
          <a
            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${title} at ${company} (opens in a new tab)`}
          >
            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
            <span>
              {title} · {""}
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
      <div className="relative">
        <ul
          className="mt-2 flex flex-wrap items-center gap-2"
          aria-label="Technologies used"
        >
          {visibleTechnologies.map((tech, index) => (
            <li
              key={tech}
              className="transform transition-all duration-300 ease-in-out"
              style={{
                opacity: 0,
                transform: 'translateY(10px)',
                animation: `fadeSlideIn 0.3s ease-out ${index * 0.1}s forwards`
              }}
            >
              <TechBox tech={tech} />
            </li>
          ))}
          {shouldShowMore && (
            <li
              className={`mr-1.5 mt-2 transition-all duration-300 ease-in-out ${isTransitioning ? 'opacity-0 transform translate-y-2' : 'opacity-100 transform translate-y-0'
                }`}
            >
              <button
                onClick={handleToggle}
                className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 hover:bg-teal-400/20 transition-all duration-300 ease-in-out transform hover:scale-105"
                aria-expanded={isExpanded}
              >
                <span className="mr-1">
                  {isExpanded ? 'Show less' : `+${technologies.length - initialTechCount} more`}
                </span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''
                    }`}
                />
              </button>
            </li>
          )}
        </ul>
      </div>
      <style jsx>{`
        @keyframes fadeSlideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ExperienceContent;