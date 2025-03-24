import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import ProjectCard from "../components/ProjectCard";
import PageTransition from "../components/PageTransition";
import { fetchAllProjects } from "../store/projectsSlice";

const Projects = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { fallbackProjects, loading: projectsLoading } = useSelector(
    (state) => state.projects
  );
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch all projects when component mounts
    dispatch(fetchAllProjects());
  }, [dispatch]);

  // Filter categories from projects
  const categories = [
    "all",
    ...new Set(
      fallbackProjects.map((project) => project.category.toLowerCase())
    ),
  ];

  // Filter and search projects
  const filteredProjects = fallbackProjects.filter((project) => {
    const matchesFilter =
      filter === "all" || project.category.toLowerCase() === filter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <PageTransition>
      <section className="py-16 md:py-24" key={location.pathname}>
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            >
              My Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
            >
              A collection of my recent work, showing my skills in frontend
              development, responsive implementation, and UI implementation.
            </motion.p>
          </section>

          {/* Filters */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row justify-between items-center gap-6"
            >
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setFilter(category)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      filter === category
                        ? "bg-violet-600 text-white"
                        : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
              <div className="w-full md:w-auto">
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500"
                />
              </div>
            </motion.div>
          </section>

          {/* Projects Grid */}
          <section>
            {projectsLoading ? (
              <div className="flex justify-center items-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600"></div>
              </div>
            ) : filteredProjects.length > 0 ? (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-7"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {filteredProjects.map((project, index) => (
                  <ProjectCard
                    key={`${project.id}-${location.pathname}`}
                    project={project}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
                  No projects found
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search or filter to find what you're
                  looking for.
                </p>
              </div>
            )}
          </section>
        </div>
      </section>
    </PageTransition>
  );
};

export default Projects;
