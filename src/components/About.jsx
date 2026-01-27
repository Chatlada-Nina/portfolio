import React from "react";
import { motion } from 'framer-motion';

const skills = [
  { name: "HTML & CSS", level: 95 },
  { name: "JavaScript", level: 85 },
  { name: "TypeScript", level: 90 },
  { name: "React.js", level: 80 },
  { name: "Next.js", level: 90 },
  { name: "Python", level: 70 },
  { name: "WordPress", level: 90 },
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
        👋 Sawaddee-ka, Hej, and Hello — I’m Chatlada!
        <br />
        As a Web Developer, I spend my days at the intersection of logic and creativity. My transition from visual merchandising to Full-stack development wasn't just a career change, it was an evolution of my passion for design and human-centric solutions.
          <br />
          <br />
          Currently, I’m interning at Prodeff AB and deep-diving into the world of Next.js, Supabase and AI agents. I'm responsible for designing, developing and maintaining scalable web applications using modern frontend and backend technologies. My role involves collaborate with stakeholders to define requirements and deliver feature-driven solutions, building user-centric interfaces and ensuring performance, security and maintainability across applications. 
          <br />
          <br />
          💻 I really enjoy my job. There is no better feeling than seeing someone use a tool I built to make their workday easier. I believe the future of web development lies in the seamless integration of AI and intuitive design. 
          <br />
          <br />
          Let’s build something better — together.
          Whether you're a founder, developer, designer, or just curious — feel free to reach out and say hi.
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
