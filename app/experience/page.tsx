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
      <h1 className="mb-8 text-center text-xl font-bold tracking-tight">Experiences</h1>
      <div className="flex flex-col items-center space-y-6">
        {experiences.map((experience, index) => (
          <div key={index} className="w-60 md:w-96 p-2 dark:shadow-gray-700 rounded-lg shadow-md hover:shadow-2xl hover:scale-105 transform transition-all duration-300">
            <div className="flex flex-col">

              <div className="w-full flex justify-between items-center">
                <img
                  src={experience.icon}
                  alt={experience.company}
                  className="ml-2 p-1 dark:bg-gray-100 rounded-md w-10 h-10"
                />
                <div className="flex flex-col justify-start text-right">
                  <span className="text-black dark:text-white font-medium tracking-tight">
                    {experience.company}
                  </span>
                  <span className=" text-right text-neutral-600 dark:text-neutral-400 text-sm  font-light italic tracking-tight">
                    {experience.position}
                  </span>
                  <span className="text-right text-neutral-600 dark:text-neutral-500 tabular-nums text-sm">
                    {experience.duration}
                  </span>
                </div>
              </div>


            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
