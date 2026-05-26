import React from "react";
import ProjectCard from "./ProjectCard";
import { featuredProjects, personalProjects } from "../data/portfolio";

const Projects = () => {
  return (
    <section id="projects" className="bg-[#EDF4F2] w-full px-6 py-16 scroll-mt-48">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl text-[#4c6e5b] font-bold drop-shadow-lg text-center">
          Projects
        </h2>
        <p className="text-center text-base sm:text-lg text-[#4c6e5b]/90 max-w-2xl mx-auto mt-4 mb-14">
          Production work from Prodeff alongside personal builds from my{" "}
          <a
            href="https://github.com/Chatlada-Nina"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-[#31473A] underline underline-offset-4 hover:text-[#8f9c5f]"
          >
            GitHub
          </a>
          .
        </p>

        <div className="mb-14">
          <h3 className="text-2xl font-bold text-[#31473A] mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-1 bg-[#8f9c5f] rounded" aria-hidden="true" />
            Professional work
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variant="featured"
                name={project.name}
                subtitle={project.subtitle}
                description={project.description}
                link={project.link}
                image={project.image}
                tags={project.tags}
                role={project.role}
                accent={project.accent}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-[#31473A] mb-6 flex items-center gap-3">
            <span className="inline-block w-8 h-1 bg-[#8f9c5f] rounded" aria-hidden="true" />
            Personal & learning projects
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {personalProjects.map((project) => (
              <ProjectCard
                key={project.id}
                variant="personal"
                name={project.name}
                description={project.description}
                link={project.link}
                github={project.github}
                image={project.image}
                accent={project.accent}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
