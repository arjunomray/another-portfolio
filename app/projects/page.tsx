import React from "react";
import type { Metadata } from "next";
import { projects } from "./project-data";

export const metadata: Metadata = {
  title: "Projects",
  description: "My Projects",
};

export default function Projects() {
  return (
    <section>
      <h1 className="mb-8 text-center text-xl font-bold tracking-tight">Projects</h1>
      <div className="flex flex-col items-center space-y-6">
        {projects.map((project, index) => (
          <div className="p-3 max-w-80 dark:shadow-gray-700 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:opacity-80 transition-opacity duration-200"
            >
              <div className="flex flex-col">
                <div className="w-full flex justify-between items-baseline">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {project.title}
                  </span>
                  <span className="text-neutral-600 dark:text-neutral-400 tabular-nums text-sm">
                    {project.year}
                  </span>
                </div>
                <p className="prose prose-neutral dark:prose-invert pt-3">
                  {project.description}
                </p>
              </div>
            </a>
          </div>
        ))}

      </div>
    </section>
  );
}
