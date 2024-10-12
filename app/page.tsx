import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hi there, I am Arjun 🙌
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I am a computer science engineer from India. 
        </p>
        <p>
          When I am not trying to build <i>the next big thing</i>, you can find me reading books, playing video games or meditating.
        </p>
        <p>
        </p>
        <p><i>"Praise the sun!"</i></p>
      </div>
    </section>
  );
}
