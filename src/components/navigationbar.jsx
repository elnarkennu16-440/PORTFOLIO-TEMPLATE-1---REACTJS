import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setNav(false); // Close mobile menu after clicking
    }
  };

  return (
    <nav className={`fixed w-full z-20 ${scrolled ? 'bg-gray-900/90 backdrop-blur-sm py-2' : 'bg-transparent py-6'}`}>
      <div className='flex justify-between items-center max-w-[1240px] mx-auto px-4 h-20'>
        {/* LOGO */}
        <h1 className='w-full text-3xl font-bold text-[#00df9a] cursor-pointer' onClick={() => scrollToSection('hero')}>YOUR LOGO.</h1>

        {/* DESKTOP MENU */}
        <ul className='hidden md:flex'>
          <li 
            className='p-4 text-gray-300 hover:text-[#00df9a] cursor-pointer transition-colors'
            onClick={() => scrollToSection('hero')}
          >
            Home
          </li>
          <li 
            className='p-4 text-gray-300 hover:text-[#00df9a] cursor-pointer transition-colors'
            onClick={() => scrollToSection('about')}
          >
            About
          </li>
          <li 
            className='p-4 text-gray-300 hover:text-[#00df9a] cursor-pointer transition-colors'
            onClick={() => scrollToSection('skills')}
          >
            Skills
          </li>
          <li 
            className='p-4 text-gray-300 hover:text-[#00df9a] cursor-pointer transition-colors'
            onClick={() => scrollToSection('projects')}
          >
            Projects
          </li>
          <li 
            className='p-4 text-gray-300 hover:text-[#00df9a] cursor-pointer transition-colors'
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>
        </ul>

        {/* HAMBURGER ICON */}
        <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={25} className="text-white"/> : <AiOutlineMenu size={25} className="text-white" />}
        </div>

        {/* MOBILE MENU */}
        <div className={`${nav ? 'fixed left-0 top-0 w-full h-screen bg-gray-900/95 backdrop-blur-sm ease-in-out duration-500' : 'fixed left-[-100%]'}`}>
          <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4' onClick={() => scrollToSection('hero')}>KENNU.</h1>
          <ul className='uppercase p-4'>
            <li 
              className='p-4 text-gray-300 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'
              onClick={() => scrollToSection('hero')}
            >
              Home
            </li>
            <li 
              className='p-4 text-gray-300 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'
              onClick={() => scrollToSection('about')}
            >
              About
            </li>
            <li 
              className='p-4 text-gray-300 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'
              onClick={() => scrollToSection('skills')}
            >
              Skills
            </li>
            <li 
              className='p-4 text-gray-300 border-b border-gray-600 cursor-pointer hover:text-[#00df9a]'
              onClick={() => scrollToSection('projects')}
            >
              Projects
            </li>
            <li 
              className='p-4 text-gray-300 cursor-pointer hover:text-[#00df9a]'
              onClick={() => scrollToSection('contact')}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;