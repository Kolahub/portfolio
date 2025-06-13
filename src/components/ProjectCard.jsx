import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const location = useLocation();

  return (
    <motion.article
      className="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      key={`project-${project.id}-${location.pathname}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48 sm:h-52 md:h-56">
        <img
          src={
            project.image?.img1 ||
            project.image ||
            "/placeholder.svg?height=400&width=600"
          }
          alt={project.title}
          className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-70" />

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-violet-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>

        {/* Tech stack tags */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-violet-600 dark:text-violet-500 rounded-full backdrop-blur-sm"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 text-xs font-medium bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-300 rounded-full backdrop-blur-sm">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="p-5 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-500 transition-colors line-clamp-1">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-4 flex-grow">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-auto pt-3 border-t border-gray-100 dark:border-gray-700">
          <Link
            to={`/projects/${project.id}`}
            className="flex items-center gap-1 text-violet-600 dark:text-violet-500 font-medium text-sm hover:gap-2 transition-all"
          >
            View Details <FiArrowRight className="text-xs" />
          </Link>

          <div className="flex space-x-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                aria-label="Live Demo"
              >
                <FiExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Simplified border effect for better performance */}
      <div
        className={`absolute inset-0 border-2 border-violet-600 dark:border-violet-500 rounded-xl pointer-events-none transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />
    </motion.article>
  );
};

export default ProjectCard;
