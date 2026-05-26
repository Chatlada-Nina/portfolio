import React from "react";
import { socialLinks } from "../data/portfolio";

const Footer = () => {
  return (
    <footer className="bg-white text-[#31473A] py-8 border-t border-[#EDF4F2]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center sm:text-left">
          © {new Date().getFullYear()} Chatlada J. | Web Developer
        </p>
        <div className="flex gap-5 text-2xl">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8f9c5f] transition-colors"
            aria-label="GitHub"
          >
            <i className="ri-github-fill" aria-hidden="true" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8f9c5f] transition-colors"
            aria-label="LinkedIn"
          >
            <i className="ri-linkedin-box-fill" aria-hidden="true" />
          </a>
          <a
            href={socialLinks.email}
            className="hover:text-[#8f9c5f] transition-colors"
            aria-label="Email"
          >
            <i className="ri-mail-fill" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
