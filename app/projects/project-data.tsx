export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Whiteboarder",
    year: 2024,
    description: "A realtime collaborative white board app",
    url: "https://github.com/arjunomray/whiteboarder",
  }, {
    title: "GrabASeat",
    year: 2024,
    description: "A local event feed and registration platform",
    url: "https://github.com/arjunomray/grabAseat-new",
  },
  {
    title: "Rustime",
    year: 2024,
    description: "A rust based pomodoro timer cli app.",
    url: "https://crates.io/crates/rustime",
  },
  {
    title: "What to do",
    year: 2024,
    description: "A full stack multi-user to-do application made using react, fastapi, sqlite and OAuth2.",
    url: "https://github.com/arjunomray/what-to-do-frontend",
  },
  {
    title: "Wall-cli",
    year: 2023,
    description: "A cli tool to download wallpapers in bulk from wallhaven",
    url: "https://github.com/arjunomray/wall-cli",
  },
];
