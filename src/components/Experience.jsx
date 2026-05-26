import React from "react";
import { motion } from "framer-motion";
import { experience } from "../data/portfolio";

const Experience = () => {
  return (
    <section
      id="experience"
      className="w-full px-6 py-16 bg-white text-[#31473A] scroll-mt-48"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-[#4c6e5b] font-bold drop-shadow-lg text-center pb-4">
          Experience
        </h2>
        <p className="text-center text-base sm:text-lg text-[#4c6e5b]/90 max-w-2xl mx-auto mb-12">
          From a six-month internship to a full-time web developer role — building
          real products for industry clients in Gothenburg.
        </p>

        <ol className="relative border-l-2 border-[#8f9c5f]/40 ml-3 sm:ml-6 space-y-12">
          {experience.map((item, index) => (
            <motion.li
              key={`${item.role}-${item.period}`}
              className="relative pl-8 sm:pl-10"
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <span
                className="absolute -left-[9px] top-1.5 size-4 rounded-full bg-[#8f9c5f] ring-4 ring-white"
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-[#31473A]">
                  {item.role}
                </h3>
                <span className="text-sm font-medium px-2.5 py-0.5 rounded-full bg-[#EDF4F2] text-[#4c6e5b]">
                  {item.type}
                </span>
              </div>

              <p className="text-lg font-semibold text-[#4c6e5b] mt-1">
                {item.company}
                <span className="font-normal text-[#31473A]/80">
                  {" "}
                  · {item.location}
                </span>
              </p>
              <p className="text-sm text-[#6b8677] font-medium mt-0.5">
                {item.period}
              </p>

              <ul className="mt-4 space-y-2 list-disc list-outside ml-4 text-base sm:text-lg leading-relaxed">
                {item.highlights.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              {item.links && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {item.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-white bg-[#31473A] hover:bg-[#4c6e5b] px-4 py-2 rounded border-b-4 border-[#7C8363] hover:border-[#8f9c5f] transition-colors"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              )}
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experience;
