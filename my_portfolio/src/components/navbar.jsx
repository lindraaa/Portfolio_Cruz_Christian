import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar({ logo }) {
  return (
    <div className="fixed top-0 w-full bg-black z-20">
      <div className="flex justify-between items-center h-24 px-4">
        <div className="logo">
          <img src="./images/logo2.png" className="w-42 h-10 pl-20" alt="Logo" />
        </div>
        <div className="pr-32">
          <ul className="flex space-x-4 font-merriweather text-2xl">
            <li>
              <Link to="home" smooth={true} duration={500} className="text-white hover:border-b-2 border-gray-500 text-opacity-100 hover:text-opacity-75">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="text-white hover:border-b-2 border-gray-500 text-opacity-100 hover:text-opacity-75">
                About
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={500} className="text-white hover:border-b-2 border-gray-500 text-opacity-100 hover:text-opacity-75">
                Education
              </Link>
            </li>
            <li>
              <Link to="skills" smooth={true} duration={500} className="text-white hover:border-b-2 border-gray-500 text-opacity-100 hover:text-opacity-75">
                Skills
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
