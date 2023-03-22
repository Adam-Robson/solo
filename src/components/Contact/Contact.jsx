import React from 'react';
import { Link } from 'react-router-dom';
import { 
  SlSocialFacebook, 
  SlSocialInstagram, 
  SlSocialGithub, 
  SlSocialSpotify, 
  SlSocialLinkedin } from 'react-icons/sl';
  
export default function Contact() {
  return (
    <>
      <h2 className="text-center text-2xl md:text-3xl my-8 subpixel-antialiased">contact</h2>
      <section className="mx-auto text-center md:mt-24">
        <ul className="min-h-full flex flex-col items-center justify-between md:mt-32 md:mx-36 md:flex-row">
          <li className="mb-4">
            <Link
              to="https://github.com/Adam-Robson">
              <SlSocialGithub className="feather-icon mt-4"></SlSocialGithub>
              <span className="label">github</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="https://www.instagram.com/this.is.le.fog/">
              <SlSocialInstagram className="feather-icon mt-4"></SlSocialInstagram>
              <span className="label">instagram</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="https://facebook.com/adamrayrobson">
              <SlSocialFacebook className="feather-icon mt-4"></SlSocialFacebook>
              <span className="label">facebook</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="https://spoti.fi/3QNqMuE">
              <SlSocialSpotify className="feather-icon mt-4"></SlSocialSpotify>
              <span className="label">spotify</span>
            </Link>
          </li>
          <li className="mb-4">
            <Link to="https://linkedin.com/in/adamrayrobson">
              <SlSocialLinkedin className="feather-icon mt-4"></SlSocialLinkedin>
              <span className="label">linkedin</span>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
