import React from "react";

interface ExperienceHeaderProps {
  start_date: string;
  end_date: string;
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({
  start_date,
  end_date,
}: {
  start_date: string;
  end_date: string;
}) => {
  return (
    <header
      className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
      aria-label={start_date + " to " + end_date}
    >
      {start_date} - {end_date}
    </header>
  );
};

export default ExperienceHeader;
