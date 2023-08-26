import React from 'react';
import { Link } from 'react-router-dom';
import chin from '../assets/porttownsend.png';
import scarf from '../assets/silverfalls.png';

export default function Bio() {
  return (
    <section className="mx-auto fadein px-6 overflow-hidden">
      <Link className="text-xl absolute top-6 right-8 subpixel-antialiased" to="/">
        home
      </Link>
      <h1 className="text-8xl md:text-9xl relative top-10 subpixel-antialiased mb-2">bio</h1>
      <div className="md:grid md:grid-cols-2 md:gap-8 p-4">
        <article className="md:flex md:flex-col md:justify-evenly my-8">
          <p className="text-lg sm:text-2xl md:text-3xl text-right subpixel-antialiased my-2">
            I live in the beautiful pacific northwest.
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl text-right subpixel-antialiased my-2">
            I am a f/s software developer, a musician & artist.
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl text-right subpixel-antialiased my-2">
            I am proficient in Postgres, Express, React, and Node.
          </p>
          <p className="text-lg sm:text-2xl md:text-3xl text-right subpixel-antialiased my-2">
            I am someone who celebrates diversity and find difference as a source of strength.
          </p>
        </article>
        <article>
          <img src={chin} alt='self portrait at port townsend' className="bioImage w-2/3 mx-auto my-8 max-w-md" />
          <img src={scarf} alt='self portrait at silver falls' className="bioImage w-2/3 mx-auto my-8 max-w-md" />
        </article>
      </div>
    </section>
  );
}
