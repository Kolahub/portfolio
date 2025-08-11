import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiCode,
  FiLayers,
  FiClipboard,
  FiCalendar,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";
import { setCurrentProject } from "../store/projectsSlice";

const ProjectDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  const { fallbackProjects } = useSelector((state) => state.projects);
  const currentProject = useSelector((state) => state.projects.currentProject);

  useEffect(() => {
    setIsLoading(true);
    // Find the project in the fallbackProjects array
    const foundProject = fallbackProjects.find((project) => project.id === id);

    if (foundProject) {
      dispatch(setCurrentProject(foundProject));
    }

    // Simulate loading for smoother transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch, id, fallbackProjects]);

  // If loading
  if (isLoading) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-4 border-violet-600 border-t-transparent animate-spin"></div>
      </div>
    );
  }

  // If no project is found
  if (!currentProject || currentProject.id !== id) {
    return (
      <div className="pt-32 pb-20 container mx-auto px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Project not found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The project you're looking for doesn't seem to exist.
        </p>
        <Link
          to="/projects"
          className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
        >
          <FiArrowLeft /> Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        {/* Breadcrumb navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Link
              to="/"
              className="hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
            >
              Home
            </Link>
            <FiChevronRight className="mx-2" />
            <Link
              to="/projects"
              className="hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
            >
              Projects
            </Link>
            <FiChevronRight className="mx-2" />
            <span className="text-gray-700 dark:text-gray-300 font-medium truncate max-w-[200px]">
              {currentProject.title}
            </span>
          </div>
        </motion.div>

        {/* Project header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span className="inline-block px-3 py-1 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 text-xs font-medium rounded-full mb-3">
                {currentProject.category}
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                {currentProject.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
                {currentProject.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 mt-4 sm:mt-0">
              {currentProject.github && (
                <a
                  href={currentProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-800 hover:bg-violet-100 dark:hover:bg-violet-900/30 text-gray-800 dark:text-gray-200 hover:text-violet-700 dark:hover:text-violet-400 px-4 py-2 rounded-lg transition-colors"
                >
                  <FiGithub /> GitHub
                </a>
              )}
              {currentProject.liveDemo && (
                <a
                  href={currentProject.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <FiExternalLink /> Live Demo
                </a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Project content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images and description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Main image with gradient overlay */}
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-[30rem] overflow-hidden">
                <img
                  src={
                    currentProject.image?.img1 ||
                    currentProject.image ||
                    "/placeholder.svg?height=600&width=800"
                  }
                  alt={currentProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {currentProject.technologies?.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 text-violet-600 dark:text-violet-400 rounded-full text-xs font-medium backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional project images */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-36 sm:h-44 md:h-52 overflow-hidden">
                  <img
                    src={
                      currentProject.image?.img2 ||
                      currentProject.image?.img1 ||
                      currentProject.image ||
                      "/placeholder.svg?height=400&width=600&text=Screenshot+1"
                    }
                    alt="Project screenshot 1"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="h-36 sm:h-44 md:h-52 overflow-hidden">
                  <img
                    src={
                      currentProject.image?.img3 ||
                      currentProject.image?.img1 ||
                      currentProject.image ||
                      "/placeholder.svg?height=400&width=600&text=Screenshot+2"
                    }
                    alt="Project screenshot 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Project description */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-gray-700">
                Project Overview
              </h2>
              <div className="prose prose-violet dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                  {currentProject.fullDescription || currentProject.description}
                </p>

                {/* {currentProject.challenges && (
                  <div className="mt-8">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      Challenges & Solutions
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                      {currentProject.challenges}
                    </p>
                  </div>
                )} */}

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0 list-none">
                  {currentProject.keyFeatures ? (
                    currentProject.keyFeatures.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg"
                      >
                        <div className="mt-0.5 text-violet-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          {feature}
                        </span>
                      </li>
                    ))
                  ) : (
                    <>
                      <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        <div className="mt-0.5 text-violet-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Responsive design that works on all device sizes
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        <div className="mt-0.5 text-violet-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Intuitive navigation and user interface
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        <div className="mt-0.5 text-violet-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Performance optimized for fast loading
                        </span>
                      </li>
                      <li className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-700/30 rounded-lg">
                        <div className="mt-0.5 text-violet-500 flex-shrink-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                          </svg>
                        </div>
                        <span className="text-gray-700 dark:text-gray-300">
                          Clean, maintainable code structure
                        </span>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right column - Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Technologies */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 rounded-lg flex items-center justify-center text-xl">
                  <FiCode />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Technologies
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {currentProject.technologies?.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-lg text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Project details */}
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-gray-100 dark:border-gray-700">
                <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 rounded-lg flex items-center justify-center text-xl">
                  <FiClipboard />
                </div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                  Project Details
                </h2>
              </div>
              <ul className="space-y-4">
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded flex items-center justify-center">
                    <FiUser size={14} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Client
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {currentProject.client || "Personal Project"}
                    </span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded flex items-center justify-center">
                    <FiCalendar size={14} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Date
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {currentProject.date || "2024"}
                    </span>
                  </div>
                </li>
                <li className="flex gap-3 items-start">
                  <div className="w-6 h-6 mt-0.5 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded flex items-center justify-center">
                    <FiLayers size={14} />
                  </div>
                  <div>
                    <span className="block text-sm text-gray-500 dark:text-gray-400">
                      Type
                    </span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">
                      {currentProject.category || "Frontend Development"}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-violet-600 to-indigo-600 p-6 rounded-xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-3">
                Want a similar project?
              </h3>
              <p className="mb-5 text-white/90">
                I'm available for freelance projects. Let's work together to
                bring your ideas to life!
              </p>
              <Link
                to="/contact"
                className="inline-block w-full bg-white text-violet-600 font-medium py-3 px-4 rounded-lg text-center hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
            </div>

            {/* Back to projects button */}
            <Link
              to="/projects"
              className="block text-center w-full py-3 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-medium rounded-lg transition-colors"
            >
              <span className="flex items-center justify-center gap-2">
                <FiArrowLeft size={16} /> Back to All Projects
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Related projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
            Other Projects You Might Like
          </h2>

          {/* Related projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fallbackProjects
              .filter(
                (p) =>
                  p.id !== currentProject.id &&
                  p.technologies.some((tech) =>
                    currentProject.technologies.includes(tech)
                  )
              )
              .slice(0, 3)
              .map((project, i) => (
                <Link
                  to={`/projects/${project.id}`}
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={
                        project.image?.img1 ||
                        project.image ||
                        "/placeholder.svg?height=400&width=600"
                      }
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-1 bg-violet-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 flex-grow flex flex-col">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-500 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 flex items-center justify-between">
                      <span className="text-violet-600 dark:text-violet-500 font-medium text-sm flex items-center gap-1">
                        View Details{" "}
                        <FiChevronRight size={14} className="mt-0.5" />
                      </span>
                      <div className="flex gap-2">
                        {project.technologies.slice(0, 2).map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetail;
