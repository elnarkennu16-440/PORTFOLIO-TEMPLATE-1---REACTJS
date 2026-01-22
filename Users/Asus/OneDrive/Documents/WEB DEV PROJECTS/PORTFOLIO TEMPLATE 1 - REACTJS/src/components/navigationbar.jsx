import { useState, useEffect } from 'react';


const NavigationBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Adjust for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800">YourName</div>
        <div className="hidden md:flex space-x-8">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="md:hidden">
          {/* Mobile menu toggle */}
          <button className="text-gray-700 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
