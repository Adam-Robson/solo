import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <section className="h-full min-w-screen w-full flex justify-around absolute top-96 mt-10">
      <NavLink
        className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
        to="/bio"
        target="blank"
      >bio</NavLink>
      <NavLink
        className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
        to="/projects"
        target="blank"
      >projects</NavLink>
      <NavLink
        className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
        to="/arts"
        target="blank"
      >arts</NavLink>
      <NavLink
        className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
        to="/resume"
        target="blank"
      >resum&eacute;</NavLink>
      <NavLink
        className="homelink text-2xl sm:text-3xl md:text-4xl my-2 lg:my-4 subpixel-antialiased"
        to="/misc"
        target="blank"
      >misc.</NavLink>
    </section>
  );
}
