import { NavLink } from 'react-router-dom';
import { SiSpotify, SiBuymeacoffee, SiGithub, SiLinkedin } from 'react-icons/si';

export default function ExternalIcons() {
  return (
    <section className="absolute bottom-8 w-full flex justify-center">

      <NavLink
        to="https://www.buymeacoffee.com/AdamRobson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiBuymeacoffee
          className="my-4 mx-4"
          size={40}
          data-testid="coffee-icon-link"
        />
      </NavLink>

      <NavLink
        to="https://github.com/Adam-Robson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiGithub
          className="my-4 mx-4"
          size={40}
          data-testid="github-icon-link"
        />
      </NavLink>

      <NavLink
        to="https://www.linkedin.com/in/adamrayrobson"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiLinkedin
          className="my-4 mx-4"
          size={40}
          data-testid="linkedin-icon-link"
        />
      </NavLink>

      <NavLink
        to="https://spoti.fi/3QNqMuE"
        className="homelink subpixel-antialiased"
        target="blank"
      >
        <SiSpotify
          className="my-4 mx-4"
          size={40}
          data-testid="spotify-icon-link"
        />
      </NavLink>
    </section>
  );
}
