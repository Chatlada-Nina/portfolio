import React from "react";
import profile_img from "../assets/image.png";
import { motion } from "framer-motion";
import { resumePath, socialLinks } from "../data/portfolio";

const Home = () => {
  return (
    <section
      id="home"
      className="w-full px-6 lg:px-16 py-16 lg:py-20 bg-white text-[#31473A] scroll-mt-48"
    >
      <motion.div
        className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: "easeIn" }}
      >
        <div className="w-full lg:w-2/5 flex justify-center shrink-0">
          <img
            src={profile_img}
            alt="Chatlada J. — web developer portrait"
            className="w-72 sm:w-80 h-auto rounded-xl shadow-lg ring-4 ring-[#EDF4F2]"
          />
        </div>

        <div className="w-full lg:w-3/5 flex flex-col items-center lg:items-start gap-5 pt-4 lg:pt-6">
          <p className="text-sm sm:text-base font-semibold uppercase tracking-widest text-[#8f9c5f] text-center lg:text-left">
            Web Developer | Gothenburg, Sweden
          </p>

          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl leading-snug">
              <span className="text-3xl sm:text-5xl text-[#8f9c5f] font-bold drop-shadow-sm block mb-2">
                Hi, I&apos;m Chatlada J.
              </span>
              
            </h1>
            <p className="text-base sm:text-lg lg:text-xl my-6 text-[#31473A]/90 leading-relaxed max-w-xl">
            I design and build products from company websites to internal tools with a focus on clarity, usability and thoughtful details.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <div className="flex items-center gap-4">
              <a
                className="text-3xl text-[#31473A] hover:text-[#8f9c5f] transition-colors"
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <i className="ri-github-fill" aria-hidden="true"></i>
              </a>
              <a
                className="text-3xl text-[#31473A] hover:text-[#8f9c5f] transition-colors"
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <i className="ri-linkedin-box-fill" aria-hidden="true"></i>
              </a>
            </div>

            <a
              href="#projects"
              className="text-white text-lg bg-[#31473A] hover:bg-[#4c6e5b] px-6 py-2.5 border-b-4 border-[#7C8363] hover:border-[#8f9c5f] rounded transition-colors text-center w-full sm:w-auto"
            >
              View my work
            </a>
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#31473A] text-lg bg-white hover:bg-[#EDF4F2] px-6 py-2.5 border-2 border-[#31473A] rounded transition-colors text-center w-full sm:w-auto font-semibold"
            >
              Resume (PDF)
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
