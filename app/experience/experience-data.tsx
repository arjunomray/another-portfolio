export interface Experience {
  company: string;
  position: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    company: "Agniverse",
    position: "Product Backend Intern",
    duration: "Nov 2024 - Present",
    description: "A realtime collaborative white board app",
  },
  {
    company: "Geeksforgeeks"
    , position: "Technical Content Writer",
    duration: "July 2024 - Sep 2024",
    description: "A local event feed and registration platform",
  },
  {
    company: "Geeksforgeeks ABESEC",
    position: "Project Lead",
    duration: "Oct 2023 - Sep - 2024",
    description: "A rust based pomodoro timer cli app.",
  }
];
