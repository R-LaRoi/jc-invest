import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import logo from '../assets/images/2.png'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed top-5 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white text-black' : 'bg-transparent text-white'
      }`}>
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="text-3xl font-bold inline-block bg-[#8a95a4] p-2">
          <Image
            src={logo}
            alt="Logo"
            className='image-logo'
            width={50}
            height={50}
            style={{ objectFit: 'contain' }}
          />
        </a>
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:opacity-75 text-xl">Home</a>
          <a href="#" className="hover:opacity-75 text-xl">Who We Are</a>
          <button className={`px-4 py-2 ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'
            } hover:opacity-75`}>
            CONTACT US
          </button>
        </div>
        <button
          className="md:hidden text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block py-2 px-4 hover:bg-gray-200">Home</a>
          <a href="#" className="block py-2 px-4 hover:bg-gray-200">Who We Are</a>
          <button className={`w-full text-left py-2 px-4 ${isScrolled ? 'bg-black text-white' : 'bg-white text-black'
            } hover:opacity-75`}>
            CONTACT
          </button>
        </div>
      )}
    </nav>
  );
}
