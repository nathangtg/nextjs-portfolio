import { link } from "fs";
import React from "react";

interface Certificate {
  Title: string;
  Year: number;
  Issuing_organisation: string;
  link: string;
}

export default function CertificateCard({
  certificate,
}: {
  certificate: Certificate;
}) {
  const { Title, Year, Issuing_organisation, link } = certificate;

  return (
    <ul>
      <li className="mb-12">
        <a href={link} target="_blank">
          <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
            <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
            <div className="z-10 sm:order-2 sm:col-span-6">
              <h3>
                <span className="inline-flex items-baseline font-medium leading-tight text-slate-200  group/link text-base ">
                  <span>{Title}</span>
                </span>
              </h3>
              <p className="mt-2 text-sm leading-normal text-teal-300">
                {Issuing_organisation}
              </p>
              <p className="mt-2 text-sm leading-normal text-slate-400">{Year}</p>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
}
