import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <>
      <section className="mx-auto fadein px-6">
        <Link className="text-xl absolute top-6 right-8 subpixel-antialiased" to="/">home</Link>
        <h1 className="title text-7xl md:text-8xl relative top-10 subpixel-antialiased">projects</h1>
        <div className="h-full w-full my-20">
          <article className="h-full max-w-lg mx-auto flex flex-col items-start justify-center">
            <div className="mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
              <Link
                to="https://pantry-pal-colab.herokuapp.com/"
                target="blank"
                className=""
              >
                Pantry Pal
                <label className="label">
                  Pantry Pal is a mobile responsive web-application for anyone seeking food assistance and was built with React for the client-side and Flask for the Python backend, MongoDB, which stores data gathered through a Python scraping engine, Tailwind CSS for styling, Google Maps API for mapping functionalities, Geolocation API for determining user location, and GeoCoding API for converting addresses into geographic coordinates. The project is deployed using Fly, Heroku, and MongoAtlas to ensure smooth functionality and accessibility.
                </label>
              </Link>
            </div>

            <div className="mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
              <Link
                to="https://buddystockviii.com"
                target="blank"
                className=""
              >
                Buddystock VIII
                <label className="label">buddystock viii</label>
              </Link>
            </div>
            <div className="mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
              <Link
                to="tally-ho-road-trips.netlify.app/auth/sign-in"
                target="blank"
                className=""
              >
              Tally-Ho!
                <label className="label">
                  Tally-Ho is a mobile responsive web-application built with React and styled using Chakra UI. It leverages various technologies to provide users with a comprehensive platform for planning and organizing road trips. The application employs the Context API from React, along with custom hooks, to manage state and facilitate a seamless user experience. The authentication feature enables users to create accounts, log in securely, and access personalized features. The integration of Google Waypoints and JavaScript Maps API provides users with the ability to plan and save road trip routes effectively. Users can save their planned trips, enhancing the practicality and value of the platform.
                </label>
              </Link>
            </div>
            <div className="mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
              <Link
                to="https://collabomusic.co/"
                target="blank"
                className=""
              >
                Collabo
                <label className="label">
                  Collabo is an innovative open-source song-project platform built as a solution for enable musicians to play music together remotely. The project was built with vanilla JavaScript, HTML and CSS, and centers around an audio mixer that incorporates the Waveform Playlist tool by Naomi Aro, which harnesses the power of the Web Audio API. Developed with a team of five developers, the platform is built using vanilla JavaScript, CSS, and HTML, and is accessible at collabomusic.co.
                </label>
              </Link>
            </div>

            <div className="mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
              <Link
                to="https://adaamsfavoritebooks.netlify.app/"
                target="blank"
                className=""
              >
                My Favorite Books
                <label className="label">my-favorite-books</label>
              </Link>
            </div>

            <div className="mx-10 my-10 text-2xl sm:text-3xl md:text-4xl">
              <Link
                to="https://tourmaline-lollipop-044f88.netlify.app/"
                target="blank"
                className=""
              >
               playground
                <label className="label">
                  Playground is a hub of classic games, and consists of a landing page with a series of links to the various game page.  the pages include including games such as Shell Game and Block-Breaker. The collection is built using Vanilla JavaScript, and most were developed during my time at Alchemy Code Lab in Portland, Oregon. The collection showcases a compilation of engaging games, with scripts written by fellow graduates, tutorial content from MDN, and my own creations.
                </label>
              </Link>
            </div>

          </article>
        </div>
      </section>
    </>
  );
}
