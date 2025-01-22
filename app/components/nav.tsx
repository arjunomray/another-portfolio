import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import fs from "fs";

let blogs = fs.readdirSync("content");
const blogsNumber = blogs.length;



const navItems = {
  "/experience": { name: "Experience" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

if (blogsNumber > 1) {
  navItems["/blog"] = { name: "Blog" };
}


export function Navbar() {
  return (
    <nav className="mb-1 py-5">
      <div className="flex flex-col md:flex-row items-center md:justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
