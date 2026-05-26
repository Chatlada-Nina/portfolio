import React from "react";

const glassGreenStrong =
  "bg-[#31473A]/60 backdrop-blur-3xl backdrop-saturate-[1.8] border border-[#8f9c5f]/30 shadow-[0_-12px_40px_rgba(49,71,58,0.4),inset_0_1px_0_rgba(255,255,255,0.15)]";

const TagList = ({ tags }) => (
  <ul className="flex flex-wrap gap-2 mt-2">
    {tags.map((tag) => (
      <li
        key={tag}
        className="text-xs font-medium px-2.5 py-1 rounded-full bg-[#4c6e5b]/40 backdrop-blur-sm border border-white/20 text-white/95"
      >
        {tag}
      </li>
    ))}
  </ul>
);

const ProjectCard = ({
  name,
  subtitle,
  description,
  link,
  github,
  image,
  accent,
  tags = [],
  role,
}) => {
  return (
    <article className="group relative min-h-[20rem] sm:min-h-[22rem] overflow-hidden rounded-xl outline-4 outline-offset-2 outline-solid outline-[#31473A] hover:outline-[#4c6e5b] transition-[outline-color] duration-300">
      {/* Background image or gradient */}
      <div className="absolute inset-0" aria-hidden="true">
        {image ? (
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${accent}`} />
        )}
        <div className="absolute inset-0 bg-[#31473A]/20 transition-colors duration-300 group-hover:bg-[#31473A]/30" />
      </div>

      {/* Title peek — gradient strip, fades on hover */}
      <div
        className="absolute inset-x-0 bottom-0 z-10 px-5 pb-5 pt-16 bg-gradient-to-t from-[#31473A] via-[#31473A]/90 to-transparent pointer-events-none transition-opacity duration-300 group-hover:opacity-0 group-focus-within:opacity-0 motion-reduce:opacity-0"
        aria-hidden="true"
      >
        <p className="text-white/75 text-xs font-medium uppercase tracking-wider">
          {role || "Personal project"}
        </p>
        <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">{name}</h3>
        {subtitle && (
          <p className="text-sm text-white/85 mt-1 line-clamp-2">{subtitle}</p>
        )}
      </div>

      {/* Slide-up frosted panel */}
      <div
        className={`absolute inset-x-0 bottom-0 z-20 max-h-[92%] rounded-t-2xl translate-y-full group-hover:translate-y-0 group-focus-within:translate-y-0 motion-reduce:translate-y-0 transition-transform duration-500 ease-out px-5 pt-5 pb-5 flex flex-col overflow-y-auto ${glassGreenStrong}`}
      >
        <p className="text-[#c5e8a8] text-xs font-medium uppercase tracking-wider">
          {role || "Personal project"}
        </p>
        <h3 className="text-xl font-bold text-white mt-1 drop-shadow-sm">{name}</h3>
        {subtitle && (
          <p className="text-sm text-white/90 mt-1">{subtitle}</p>
        )}
        <p className="text-sm sm:text-base text-white/95 mt-3 leading-relaxed">
          {description}
        </p>
        {tags.length > 0 && <TagList tags={tags} />}

        <div className="flex flex-wrap gap-4 mt-4 pt-1">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-[#d4f0a8] hover:text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f9c5f] rounded"
          >
            Live site →
          </a>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-white/85 hover:text-white underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8f9c5f] rounded"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
