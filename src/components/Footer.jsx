import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-white text-[#31473A] py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Chatlada J. All rights reserved.
        </p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a
            href="https://github.com/Chatlada-Nina"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8f9c5f] transition duration-300"
          ><i className="ri-github-fill"></i>
          </a>
          <a
            href="https://linkedin.com/in/chatlada-nina/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8f9c5f] transition duration-300"
          >
            <i className="ri-linkedin-box-fill"></i>
          </a>
          <a
            href="mailto:chatladanine@gmail.com"
            className="hover:text-[#8f9c5f] transition duration-300"
          ><i class="ri-mail-fill"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer
