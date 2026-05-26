import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.png";
import project7 from "../assets/project-7.png";
import project8 from "../assets/project-8.png";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = {
  github: "https://github.com/Chatlada-Nina",
  linkedin: "https://www.linkedin.com/in/chatlada-nina/",
  email: "mailto:chatladanine@gmail.com",
};

export const resumePath = `${import.meta.env.BASE_URL}chatlada-cv.pdf`;

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "HTML & CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    label: "Backend & data",
    items: ["Python", "Django", "Supabase", "SQL"],
  },
  {
    label: "Design & workflow",
    items: ["UX/UI", "Git", "Responsive design", "Accessibility"],
  },
];

export const experience = [
  {
    role: "Web Developer",
    company: "Prodeff AB",
    location: "Gothenburg, Sweden",
    period: "Present",
    type: "Full-time",
    highlights: [
      "Design and build production websites for Prodeff and LighthouseTech (sister brand), from layout and UX through to frontend implementation.",
      "Collaborate with developers and stakeholders on requirements, feature delivery, performance, and maintainability.",
      "Ship internal tools and client-facing web applications alongside public marketing sites.",
    ],
    links: [
      { label: "Prodeff", url: "https://prodeff.se/" },
      { label: "LighthouseTech", url: "https://lighthousetech.se/" },
    ],
  },
  {
    role: "Web Developer Intern",
    company: "Prodeff AB",
    location: "Gothenburg, Sweden",
    period: "6 months",
    type: "Internship",
    highlights: [
      "Joined as an intern and grew into a permanent web developer role on the team.",
      "Worked hands-on with Next.js, modern CSS, Supabase, and AI-assisted development workflows.",
      "Helped turn business goals into responsive, accessible interfaces used by real clients and colleagues.",
    ],
  },
];

export const featuredProjects = [
  {
    id: "prodeff",
    name: "Prodeff AB",
    subtitle: "Engineering consultancy · Corporate website",
    description:
      "Production marketing site for an industrial engineering consultancy in Gothenburg — bilingual positioning, service areas, lead capture, and client trust signals.",
    link: "https://prodeff.se/",
    github: null,
    image: project7,
    tags: ["Next.js", "Tailwind CSS", "UX/UI", "Responsive design"],
    role: "Design · Frontend · Collaboration",
    accent: "from-[#1e293b] via-[#334155] to-[#475569]",
  },
  {
    id: "lighthouse",
    name: "LighthouseTech",
    subtitle: "Digital agency · Brand & product site",
    description:
      "Sister brand web presence for digital systems and product development — storytelling, services, project showcase, and conversion-focused contact flows.",
    link: "https://lighthousetech.se/",
    github: null,
    image: project8,
    tags: ["Next.js", "Tailwind CSS", "Design system", "Performance"],
    role: "Design · Frontend · Collaboration",
    accent: "from-[#0f172a] via-[#1e3a5f] to-[#2563eb]",
  },
];

export const personalProjects = [
  {
    id: 1,
    name: "What Ocean Animal Are You?",
    image: null,
    accent: "from-[#0d9488] via-[#0891b2] to-[#0284c7]",
    description:
      "Playful React experience with custom card art, Tailwind styling, and interactive UI patterns built to practice component design.",
    link: "https://chatlada-nina.github.io/whatOceanAnimalAreYou/",
    github: "https://github.com/Chatlada-Nina/whatOceanAnimalAreYou",
    tags: ["React", "Tailwind CSS", "UI/UX"],
  },
  {
    id: 2,
    name: "Think You Know Thailand?",
    image: project6,
    description:
      "Interactive quiz app with React, Vite, and Tailwind CSS — built as a personal learning project with playful UX.",
    link: "https://chatlada-nina.github.io/thailand-quiz-app/",
    github: "https://github.com/Chatlada-Nina/thailand-quiz-app",
    tags: ["React", "Vite", "Tailwind CSS"],
  },
  {
    id: 3,
    name: "Recipely",
    image: project5,
    description:
      "Recipe note app with Next.js and browser-based storage — focused on clean layout and responsive UI.",
    link: "https://recipely-psexo956r-chatlada-ninas-projects.vercel.app/",
    github: null,
    tags: ["Next.js", "LocalStorage"],
  },
  {
    id: 4,
    name: "Pizzeria Restaurant Website",
    image: project1,
    description: "Full-stack restaurant ordering experience deployed to production.",
    link: "https://pizza-hemma-4a540b28342f.herokuapp.com/",
    github: "https://github.com/Chatlada-Nina/pizza-hemma",
    tags: ["Full-stack", "Heroku"],
  },
  {
    id: 5,
    name: "BKK Coffee Corner",
    image: project2,
    description:
      "Community-style café platform with Django backend and Cloudinary media storage.",
    link: "https://bkk-coffee-corner-f07d5b0b8233.herokuapp.com/",
    github: "https://github.com/Chatlada-Nina/BKK-Coffee-Corner",
    tags: ["Django", "Cloudinary"],
  },
  {
    id: 6,
    name: "The Guessword Game",
    image: project3,
    description: "Browser game built with vanilla JavaScript and interactive DOM logic.",
    link: "https://chatlada-nina.github.io/TheGuessWordGame/",
    github: "https://github.com/Chatlada-Nina/TheGuessWordGame",
    tags: ["JavaScript"],
  },
  {
    id: 7,
    name: "Serenity Relax & Spa",
    image: project4,
    description: "Milestone responsive frontend site — layout, imagery, and mobile-first structure.",
    link: "https://chatlada-nina.github.io/serenity-relax-and-spa/",
    github: "https://github.com/Chatlada-Nina/serenity-relax-and-spa",
    tags: ["HTML", "CSS", "Responsive"],
  },
];
