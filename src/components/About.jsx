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
        👋 Sawaddee-ka, Hej, and Hello — I’m Chatlada!
        <br />
        Not long ago, I made a bold, heart-led leap into tech and I’ve never looked back.
          <br />
          <br />
          From the moment I wrote my very first line of code, something clicked. I’d found the spark. What started as curiosity quickly became a full-blown passion, and today I’m building web experiences with a mix of creativity, logic, and love for clean, purposeful design.
          <br />
          <br />
          💻 I work across the stack — HTML, CSS, JavaScript, Vue.js, React, Python, Django, and PostgreSQL — and I enjoy both frontend magic and backend structure. Currently, I’m helping an NGO redesign their WordPress site to be more intuitive and impactful. I care deeply about the user’s journey and thrive when design and development meet in harmony.
          <br />
          <br />
          🛠️ On top of that, I play with tools like Power BI, Microsoft 365, and even Generative AI — always exploring, always tinkering. I stay active in the tech community by volunteering at events, joining meetups, and soaking up inspiration wherever I go.
          But most of all — I love solving problems. Whether it’s debugging a stubborn error, improving a user flow, or just making something work better, I’m all in. I bring curiosity, collaboration, and a can-do mindset to every project I touch.
          <br />
          <br />
          🌱 I’m currently open to opportunities as a Web Developer (frontend, backend, or full-stack) or in IT Support. I’m excited to join a team that values learning, impact, and doing great work together.
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
