import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import fs from "fs";
import { FlickeringHeading } from "./flickering-heading";

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
    <nav className="mb-10 py-2">
      <div className="flex flex-col items-center ">

        <div className="flex p-2 justify-center items-center gap-3">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative italic"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
        <div className="flex justify-center items-center">
          <Link href="/" >
            <FlickeringHeading />
          </Link>
        </div>
      </div>

    </nav>
  );
}
