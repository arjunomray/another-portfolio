import React from "react";
import type { Metadata } from "next";
import { ImageGrid } from "app/components/image-grid";

export const metadata: Metadata = {
  title: "Photos",
  description: "My Photos",
};

export default function Photos() {
  return (
    <section>
      <h1 className="mb-8 text-center text-xl font-bold tracking-tight">Photos</h1>


      <ImageGrid
        images={[
          { src: "/photos/photos (1).jpg", alt: "A street light" },
          { src: "/photos/photos (2).jpg", alt: "Just some clouds" },
          { src: "/photos/photos (3).jpg", alt: "A street barber" },
          { src: "/photos/photos (4).jpg", alt: "A rail line" },
        ]}
      />

    </section>
  );
}
