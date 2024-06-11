import React from "react";

interface ExperienceHeaderProps {
  dateRange: string;
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ dateRange }) => {
  return (
    <header
      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label={dateRange}
    >
      {dateRange}
    </header>
  );
};

export default ExperienceHeader;
