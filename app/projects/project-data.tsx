export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "What to do",
    year: 2024,
    description: "A full stack multi-user to-do application made using react, fastapi, sqlite and OAuth2.",
    url: "https://github.com/arjunomray/what-to-do-frontend",
  },
  {
    title: "Rustime",
    year: 2024,
    description: "A rust based pomodoro timer cli app.",
    url: "https://crates.io/crates/rustime",
  },
  {
    title: "Wall-cli",
    year: 2023,
    description: "A cli tool to download wallpapers in bulk from wallhaven",
    url: "https://github.com/arjunomray/wall-cli",
  },
];
