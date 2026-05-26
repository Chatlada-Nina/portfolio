import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../data/portfolio";

const SkillGroup = ({ label, items, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay }}
    viewport={{ once: true, amount: 0.3 }}
  >
    <h4 className="text-sm font-bold uppercase tracking-wider text-[#8f9c5f] mb-3 text-center sm:text-left">
      {label}
    </h4>
    <ul className="flex flex-wrap justify-center sm:justify-start gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="px-3.5 py-1.5 rounded-full text-sm font-medium text-[#31473A] bg-white/80 border border-[#8f9c5f]/35 shadow-sm hover:border-[#4c6e5b] hover:bg-white transition-colors"
        >
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

const About = () => {
  return (
    <section
      id="about"
      className="w-full px-6 py-16 bg-[#EDF4F2] text-[#31473A] scroll-mt-48"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-[#4c6e5b] font-bold drop-shadow-lg text-center pb-10">
          About Me
        </h2>
        <div className="text-base sm:text-lg lg:text-xl leading-relaxed text-center space-y-5 max-w-3xl mx-auto">
          <p>
            👋 <em>Sawaddee-ka</em>, I&apos;m Chatlada!
          </p>
          <p>
            I&apos;m a web developer based in Gothenburg, currently working at{" "}
            <strong>Prodeff AB</strong> after starting there as an intern. My background in visual merchandising shaped the way I approach development today with a strong focus on clarity, user experience and thoughtful design.
          </p>
          <p>
          Today, I build modern web applications and interfaces with tools like Next.js, Tailwind CSS, Supabase and AI-assisted development. I collaborate with developer and stakeholders to turn ideas into practical, maintainable products from company websites to internal tools used every day.
          </p>
          <p>
            💻 What motivates me most is knowing that something I built is helping someone do their work a little easier or smoother. I enjoy collaborating with people, solving real problems and creating products that feel clear and intuitive to use.
          </p>
          <p>
          For me, development is a mix of creativity, problem-solving and continuous learning and that's what keeps it exciting!
          </p>
        </div>

        <div className="mt-14 max-w-4xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#4c6e5b] text-center">
            What I work with
          </h3>
          <p className="text-center text-base text-[#31473A]/80 mt-2 mb-10">
            Tools and technologies I use in production and side projects.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
            {skillGroups.map((group, index) => (
              <SkillGroup
                key={group.label}
                label={group.label}
                items={group.items}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
