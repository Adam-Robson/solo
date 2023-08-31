import { NavLink } from 'react-router-dom';
import { SiSpotify, SiBuymeacoffee, SiGithub, SiLinkedin } from 'react-icons/si';
import ExternalIcons from './ExternalIcons';
import Navigation from './Navigation';
import Title from './Title';

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen fadein">
        <Title />
        <Navigation />
        <ExternalIcons />
      </main>
    </>
  );
}
