import React, { useState } from "react";
import logo from "../assets/logo.png";
import {motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      y: -20,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center flex-wrap bg-white shadow-md">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="logo" className="w-48 sm:w-60" />
      </div>

      {/* Mobile Menu Button */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="flex items-center px-3 py-2 text-3xl text-[#31473A] focus:outline-none">
          {isOpen ? (
            <i className="ri-close-line"></i> // Close icon
          ) : (
            <i className="ri-menu-3-line"></i> // Menu icon
          )}
        </button>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden lg:flex lg:items-center lg:space-x-6 text-lg font-bold text-grey-800">
        <a href="#home" className="text-[#31473A] hover:text-[#8f9c5f]">Home</a>
        <a href="#about" className="text-[#31473A] hover:text-[#8f9c5f]">About</a>
        <a href="#projects" className="text-[#31473A] hover:text-[#8f9c5f]">Projects</a>
        <a
          href="#contact"
          className="text-white bg-[#31473A] hover:bg-[#4c6e5b] px-6 py-2 border-b-4 border-[#7C8363] hover:border-[#8f9c5f] rounded"
        >
          Contact
        </a>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="w-full flex flex-col items-center bg-white mt-4 lg:hidden rounded-md shadow-md py-4 gap-4 z-40"
          >
            <a href="#home" onClick={toggleMenu} className="text-black font-bold hover:text-[#8f9c5f]">
              Home
            </a>
            <a href="#about" onClick={toggleMenu} className="text-black font-bold hover:text-[#8f9c5f]">
              About
            </a>
            <a href="#projects" onClick={toggleMenu} className="text-black font-bold hover:text-[#8f9c5f]">
              Projects
            </a>
            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-white bg-[#31473A] hover:bg-[#4c6e5b] px-6 py-2 border-b-4 border-[#7C8363] hover:border-[#8f9c5f] rounded"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
