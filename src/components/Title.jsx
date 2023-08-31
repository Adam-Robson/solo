import { useState, useEffect } from 'react';

const colorArray = [
  'hsl(209, 18%, 30%)',
  'hsl(74, 11%, 54%)',
  'hsl(4, 35%, 56%)',
  'hsl(342, 17%, 54%)',
  'hsl(252, 11%, 65%)'
];

const transitionDuration = 3000; // Transition duration in milliseconds

export default function App() {
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColorIndex((prevIndex) =>
        (prevIndex + 1) % colorArray.length
      );
    }, transitionDuration);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <article className="title flex flex-col justify-center m-auto relative top-52">
      <h1 style={{ color: colorArray[currentColorIndex] }} className="title max-w-full font-normal text-center m-2 text-6xl sm:text-7xl md:text-8xl subpixel-antialiased">a catalogue</h1>
      <em style={{ color: colorArray[currentColorIndex] }} className="title text-center font-light italic max-w-full m-4 text-xl sm:text-2xl md:text-3xl subpixel-antialiased">by Adam Robson</em>
    </article>
  );
}
