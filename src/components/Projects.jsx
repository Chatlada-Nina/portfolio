import React from 'react'
import project1 from '../assets/project-1.png'
import project2 from '../assets/project-2.png'
import project3 from '../assets/project-3.png'
import project4 from '../assets/project-4.png'


const projects = [
  { 
    id: 1,
    name: "Pizzeria Restaurant Website",
    image: project1,
    description: "A full-stack restaurant order online.",
    link: "https://pizza-hemma-4a540b28342f.herokuapp.com/"
  },
  { id: 2,
    name: "Blog Community Platform",
    image: project2,
    description: "A community platform with Django & Cloudinary storage.",
    link: "https://bkk-coffee-corner-f07d5b0b8233.herokuapp.com/"
  },
  { id: 3,
    name: "The Guessword Game",
    image: project3,
    description: "An interactive game using JavaScript.",
    link: "https://chatlada-nina.github.io/TheGuessWordGame/"
  },
  { id: 4,
    name: "Massage and Spa Website",
    image: project4,
    description: "A responsive frontend web application.",
    link: "https://chatlada-nina.github.io/serenity-relax-and-spa/"
  },
]

const Projects = () => {
  return (
    <section id="projects" className="bg-white w-full px-6 py-12 scroll-mt-48">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-[#4c6e5b] font-bold drop-shadow-lg text-center pb-20">Projects</h2>

        {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <a 
            key={project.id} 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block bg-[#31473A] rounded-lg outline-[#31473A] outline-4 outline-offset-2 outline-solid hover:bg-[#4c6e5b] hover:outline-[#4c6e5b]"
          >
            <div className="overflow-hidden rounded-t-lg">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold text-white">{project.name}</h3>
              <p className="text-md text-white mt-2">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Projects
