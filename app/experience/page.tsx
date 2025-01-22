import React from "react";
import type { Metadata } from "next";
import { experiences } from "./experience-data";

export const metadata: Metadata = {
  title: "Experience",
  description: "What have I done",
};

export default function Experiences() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-medium tracking-tight">Experiences</h1>
      <div className="space-y-6">
        {experiences.map((experience, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="block group hover:opacity-80 transition-opacity duration-200"
          >
            <div className="flex flex-col">
              <div className="w-full flex justify-between items-baseline">
                <span className="text-black dark:text-white font-medium tracking-tight">
                  {experience.company}
                </span>
                <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                  {experience.duration}
                </span>

              </div>
              <span className="text-neutral-600 dark:text-neutral-400 text-sm  font-light italic tracking-tight">
                {experience.position}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
