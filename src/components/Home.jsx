import React from "react";
import profile_img from "../assets/image.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="w-full px-6 lg:px-16 py-16 bg-white text-[#31473A] scroll-mt-48">
      <motion.div
      className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeIn" }}
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={profile_img}
            alt="profile image"
            className="w-80 h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4 pt-8">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl">
              <span className="text-4xl sm:text-5xl text-[#8f9c5f] font-bold drop-shadow-lg">
                I'm Chatlada J.
              </span>
              <br />A web developer based in Sweden.
            </h1>
            <p className="text-base sm:text-lg lg:text-xl my-6">
              Specializing in web design, web application development, branding
              and SEO. I don't just build websites—I craft digital experiences
              that are intuitive, impactful, and results-driven.
            </p>
          </div>

          {/* Social Links + Button */}
          <div className="flex flex-row items-center gap-4">
            <a
              className="text-3xl text-[#31473A] hover:text-[#8f9c5f]"
              href="https://github.com/Chatlada-Nina" target="_blank" rel="noopener"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a
              className="text-3xl text-[#31473A] hover:text-[#8f9c5f]"
              href="https://www.linkedin.com/in/chatlada-nina/" target="_blank" rel="noopener"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <button className="text-white text-lg bg-[#31473A] hover:bg-[#4c6e5b] px-6 py-2 border-b-4 border-[#7C8363] hover:border-[#8f9c5f] rounded">
            <a href="/portfolio/chatlada-cv.pdf" target="_blank" rel="noopener noreferrer" className="your-button-class">My Resume</a>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
