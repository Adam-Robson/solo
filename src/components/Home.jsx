import { Link, NavLink } from 'react-router-dom';
import {
  SiSpotify,
  SiBuymeacoffee,
  SiGithub,
  SiLinkedin
} from 'react-icons/si';

export default function Home() {
  return (
    <main className="w-screen h-screen fadein">
      <h1 className="max-w-full m-2 pt-6 pl-6 text-3xl sm:text-4xl md:text-5xl subpixel-antialiased">
        hi! i&apos;m Adam
      </h1>
      <section className="h-full flex flex-col absolute right-4 sm:top-20 md:top-32 lg:top-48 text-right">
        <NavLink
          className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
          to="/bio"
        >bio</NavLink>
        <NavLink
          className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
          to="/projects"
        >projects</NavLink>
        <NavLink
          className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
          to="/arts"
        >arts</NavLink>
        <NavLink
          className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
          to="/resume"
        >resume</NavLink>
        <NavLink
          className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
          to="/misc"
        >misc.</NavLink>
      </section>

      <section className="contact absolute bottom-8 w-full max-w-sm mx-auto flex justify-evenly items-baseline">

        <Link
          to="https://www.buymeacoffee.com/AdamRobson"
          className="homelink subpixel-antialiased"
          target="blank"
        >
          <SiBuymeacoffee
            className="project-icon"
            size={40}
            data-testid="coffee-icon-link"
          />
        </Link>

        <Link
          to="https://github.com/Adam-Robson"
          className="homelink subpixel-antialiased"
          target="blank"
        >
          <SiGithub
            className="project-icon"
            size={40}
            data-testid="github-icon-link"
          />
        </Link>

        <Link
          to="https://www.linkedin.com/in/adamrayrobson"
          className="homelink subpixel-antialiased"
          target="blank"
        >
          <SiLinkedin
            className="project-icon"
            size={40}
            data-testid="linkedin-icon-link"
          />
        </Link>

        <Link
          to="https://spoti.fi/3QNqMuE"
          className="homelink subpixel-antialiased"
          target="blank"
        >
          <SiSpotify
            className="project-icon"
            size={40}
            data-testid="spotify-icon-link"
          />
        </Link>
      </section>
    </main>
  );
}
