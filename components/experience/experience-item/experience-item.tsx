import React from "react";
import ExperienceHeader from "../experience-header/experience-header";
import ExperienceContent from "../experience-content/experience-content";

interface ExperienceItemProps {
  start_date: string;
  end_date: string;
  title: string;
  company: string;
  companyLink: string;
  description: string;
  technologies: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  start_date,
  end_date,
  title,
  company,
  description,
  technologies,
}) => {
  return (
    <div>
      <ul>
        <li className="mb-12">
          <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <ExperienceHeader start_date={start_date} end_date={end_date} />
            <ExperienceContent
              title={title}
              company={company}
              description={description}
              technologies={technologies}
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExperienceItem;
