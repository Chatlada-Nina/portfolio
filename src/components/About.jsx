import React from "react";
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "React JS", level: 80 },
  { name: "Python", level: 70 },
  { name: "WordPress", level: 90 },
  { name: "Elementor Pro", level: 90 },
  { name: "UX/UI", level: 75 },
  { name: "Canva", level: 95 },
];

// SkillBar component
const SkillBar = ({ name, level, delay }) => (
  <motion.div
    className="w-full"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-md font-medium text-[#8f9c5f]">{name}</span>
      <span className="text-sm text-[#8f9c5f]">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
      <div
        className="bg-[#8f9c5f] h-4 rounded-full"
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </motion.div>
);


const About = () => {
  return (
    <section id="about" className="w-full px-6 py-12 bg-[#EDF4F2] text-[#31473A] scroll-mt-48">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl text-[#4c6e5b] font-bold drop-shadow-lg text-center pb-10">
          About Me
        </h1>
        <p className="text-base sm:text-lg lg:text-xl leading-relaxed text-center">
          Sawaddee-ka! 🙏 I'm a Thai woman with years of experience in service
          and office work, refining my communication and interpersonal skills
          along the way. For as long as I can remember, I've been fascinated by
          the world of technology but I hesitated to step out of my comfort
          zone—until life handed me an opportunity I could not ignore.
          <br />
          <br />
          One of the biggest decisions I've ever made was moving from Thailand
          to Sweden to start fresh in a completely new environment. It was
          terrifying, exciting and full of possibilities. More than anything, it
          was my chance to embrace change, explore new challenges and discover
          what I'm truly capable of.
          <br />
          <br />
          Now, here I am proudly graduating from Code Institute's web
          application development program, chasing my dream and stepping into
          the world of tech as a developer! Every day is a journey of learning,
          where I plan, create projects and tackle new tools and concepts. Sure,
          there are moments of frustration but the thrill of overcoming
          obstacles, growing and evolving into the person I aspire to be...
          makes it all worth it. That feeling is truly priceless 💙.
        </p>

        {/* Skills Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold mb-6 text-[#4c6e5b] text-center">
            My Skills
          </h3>
          <div className="w-full max-w-3xl mx-auto">
            {skills.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
