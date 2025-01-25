'use client';

import { useEffect, useState } from "react";

const metadata = {
  title: 'array\'s home'
}

export const FlickeringHeading = () => {
  const [faultyIndex, setFaultyIndex] = useState(0);
  const [mounted, setMounted] = useState(false);
  const title = metadata.title as string;

  const spaceIndex = title.indexOf(' ');

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      setFaultyIndex(Math.floor(Math.random() * title.length));
    }, 3000);

    return () => clearInterval(interval);
  }, [title.length]);

  const letters = title.split('').map((char, i) => (
    <span key={i} className={i === faultyIndex && i !== spaceIndex && mounted ? ' faulty-letter' : ''}>
      {char}
    </span>
  ));

  return (
    <div>
      <h1 className=" text-3xl lg:text-5xl font-bold mb-4 relative neon-text inline-block"
      >
        {letters}
        <span className="ml-2">👋</span>
      </h1>
    </div >
  )
}
