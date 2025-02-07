import Image from "next/image";
import { socialLinks } from "./config";
import { getBlogPosts } from "./lib/posts";
import Link from "next/link";

export default function Page() {
  const allBlogs = getBlogPosts();


  const latestBlog = allBlogs[0]; // Assuming the blogs are sorted by date

  return (
    <section
      style={{
        textShadow: "0px 0px 5px currentColor",
      }}
    >
      <a href={socialLinks.twitter} target={socialLinks.twitter}>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className=" dark:shadow-white shadow-lg hover:shadow-2xl hover:scale-105 transform transition-all duration-300 rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 lg:mb-1 text-2xl font-medium tracking-tight">
        Hello there,<br /> I am <span className="inline text-[#b4637a] dark:text-[#9ccfd8]">Arjun</span> 🙌
      </h1>

      <div className="lg:w-2/3 prose prose-neutral dark:prose-invert">
        <p>
          I am a software <b>dev</b> from India.
        </p>
        <p>
          When I am not trying to build <i className="text-[#286983] dark:text-[#ea9a97]">the next big thing</i>, you can find me reading books, playing video games or meditating.
        </p>
        <p>
        </p>
        <p><i>"Praise the sun!"</i></p>
      </div>


      {/* Display the latest blog link */}
      {allBlogs.length > 1 && (
        <div className="mt-10">
          <h2 className="text-lg font-semibold inline">Latest Blog Post: </h2>
          <Link href={`/blog/${latestBlog.slug}`} className="text-[#b4637a] dark:text-[#9ccfd8] hover:underline">
            {latestBlog.metadata.title}
          </Link>
        </div>
      )}
    </section>
  );
}
