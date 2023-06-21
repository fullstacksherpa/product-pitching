import React, { useEffect, useState } from 'react';
import aaa from '../assets/aaa.png'



const Navbar = () => {
  const [navbarBg, setNavbarBg] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setNavbarBg(true);
      } else {
        setNavbarBg(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`py-4 px-6 flex items-center justify-between ${
        navbarBg ? 'bg-[#171717]' : 'bg-[#151030]'
      } fixed w-full top-0 z-10`}
    >
      <div>
        <img src={aaa} alt="Company Logo" className="h-10" />
      </div>
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-white hover:text-blue-200">
            Courses
          </a>
        </li>
        <li>
          <a href="#" className="text-white hover:text-blue-200">
            Exam
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;