import React from "react";
import Image from "next/image";
import { socialLinks } from "app/config";

interface ImageGridProps {
  images: {
    src: string;
    alt: string;
    href?: string;
  }[];
}

export const ImageGrid: React.FC<ImageGridProps> = ({
  images,
}) => {
  return (
    <section>
      <div className={`grid sm:grid-cols-1 md:grid-cols-2 gap-4 my-8`}>
        {images.map((image, index) => (
          <div key={index} className="relative aspect-square">
            {image.href ? (
              <a
                target={socialLinks.instagram}
                rel="noopener noreferrer"
                href={image.href}
                className="block w-full h-full"
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  layout="instrinsic"
                  priority
                  className="rounded-lg object-cover"
                />
              </a>
            ) : (
              <Image
                alt={image.alt}
                src={image.src}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                layout="instrinsic"
                priority
                className="rounded-lg object-cover"
              />
            )}
          </div>
        ))}
      </div>
    </section >
  );
};
