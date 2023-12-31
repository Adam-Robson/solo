import { Link, useNavigate } from 'react-router-dom';
import crystal from '../../assets/crystal.png';

export default function Miscellaneous() {
  const navigate = useNavigate();

  function handleHomeNav() {
    navigate('/');
  }

  return (
    <section className="max-w-full w-10/12 mx-auto fadein px-6">
      <button
        onClick={handleHomeNav}
        className="absolute top-6 right-6 subpixel-antialiased homelink"
        to="/"
      >home</button>
      <h1 className="text-7xl sm:text-8xl font-light subpixel-antialiased mt-12">
          misc.
      </h1>
      <div className="max-w-xs p-4 mx-auto">
        <img
          src={crystal}
          className="crystal rounded-lg max-w-xs w-full mx-auto my-2"
          alt="image of out my window" />
        <p className="w-full text-center mx-auto text-lg">
            see some of my past adventures
          <Link
            className="font-semibold"
            to="https://lapaztravels.wordpress.com/"
          > here</Link>!</p>
      </div>
    </section>
  );
}
