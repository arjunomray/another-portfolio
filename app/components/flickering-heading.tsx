'use client';
import { useEffect, useState } from "react";
const metadata = {
  title: "array's home"
};

export const FlickeringHeading = () => {
  const [faultyIndex, setFaultyIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false); // To ensure rendering happens only after hydration
  const title = metadata.title as string;
  const spaceIndex = title.indexOf(" ");

  useEffect(() => {
    // Indicate that the component has mounted on the client
    setIsClient(true);

    // Start the interval to update the faultyIndex
    const interval = setInterval(() => {

      setFaultyIndex(Math.floor(Math.random() * title.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [title.length]);

  // If rendering on the server, just return static content
  if (!isClient) {
    return (
      <div>
        <h1 className="text-3xl lg:text-5xl font-bold mb-4 shadow-current relative neon-text inline-block"
          style={{
            textShadow: "2px 2px 10px rgba(255, 255, 255, 0.8)",
          }}
        >
          {title}
        </h1>
      </div>
    );
  }


  // Client-rendered content with flickering effect
  const letters = title.split("").map((char, i) => (
    <span key={i} style={
      {
        textShadow: "0px 0px 5px currentColor",
      }
    } className={i === faultyIndex && i !== spaceIndex ? "faulty-letter" : ""}>
      {char}
    </span>
  ));

  return (
    <div>
      <h1 className="text-3xl lg:text-5xl font-bold mb-4 shadow-current relative neon-text inline-block"
        style={{
          textShadow: "2px 2px 10px rgba(255, 255, 255, 0.8)",
        }}
      >
        {letters}
      </h1>
    </div>
  );
};

