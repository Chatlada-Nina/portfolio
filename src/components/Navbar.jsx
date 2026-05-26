import React, { useState } from "react";
import logo from "../assets/logo.png";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "../data/portfolio";

const linkClass =
  "text-[#31473A] hover:text-[#8f9c5f] transition-colors font-bold";
const contactClass =
  "text-white bg-[#31473A] hover:bg-[#4c6e5b] px-6 py-2 border-b-4 border-[#7C8363] hover:border-[#8f9c5f] rounded transition-colors font-bold";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20, transition: { duration: 0.3 } },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center flex-wrap">
      <a href="#home" className="flex items-center flex-shrink-0" aria-label="Home">
        <img src={logo} alt="Chatlada portfolio logo" className="w-48 sm:w-60" />
      </a>

      <div className="block lg:hidden">
        <button
          type="button"
          onClick={toggleMenu}
          className="flex items-center px-3 py-2 text-3xl text-[#31473A] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8f9c5f] rounded"
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <i
            className={isOpen ? "ri-close-line" : "ri-menu-3-line"}
            aria-hidden="true"
          />
        </button>
      </div>

      <div className="hidden lg:flex lg:items-center lg:gap-12 text-lg">
        {navLinks.map((link) =>
          link.href === "#contact" ? (
            <a key={link.href} href={link.href} className={contactClass}>
              {link.label}
            </a>
          ) : (
            <a key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </a>
          )
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
            className="w-full flex flex-col items-center bg-white mt-4 lg:hidden rounded-md shadow-md py-4 gap-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={
                  link.href === "#contact"
                    ? contactClass
                    : "text-[#31473A] font-bold hover:text-[#8f9c5f]"
                }
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
