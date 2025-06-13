import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FiArrowRight } from "react-icons/fi";
import HeroSection from "../components/HeroSection";
import SectionHeading from "../components/SectionHeading";
import ProjectCard from "../components/ProjectCard";
import SkillsSection from "../components/SkillsSection";
import { fetchFeaturedProjects } from "../store/projectsSlice";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { featuredProjects, loading: projectsLoading } = useSelector(
    (state) => state.projects
  );

  useEffect(() => {
    dispatch(fetchFeaturedProjects());
  }, [dispatch]);

  return (
    <PageTransition>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden"
        key={location.pathname}
      >
        {/* Hero Section */}
        <HeroSection />

        {/* Featured Projects Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <SectionHeading
              title="Featured Projects"
              subtitle="Here are some of my recent works. Each project is unique and showcases different skills and technologies."
            />

            {projectsLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-violet-600"></div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
                  {featuredProjects.slice(0, 3).map((project, index) => (
                    <ProjectCard
                      key={project.id || project._id}
                      project={project}
                      index={index}
                    />
                  ))}
                </div>

                <motion.div
                  className="text-center mt-10 sm:mt-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors"
                  >
                    View All Projects <FiArrowRight />
                  </Link>
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Skills Section */}
        <SkillsSection />

        {/* About Preview Section */}
        <section className="py-16 sm:py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
                  <img
                    src="/images/meimg1.jpg"
                    alt="About Me"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-violet-600/30 mix-blend-multiply"></div>
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 p-3 sm:p-4 bg-white dark:bg-gray-800 rounded-xl shadow-xl">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-500"></span>
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-500"></span>
                  </div>
                  <div className="mt-2 text-gray-900 dark:text-white font-mono text-xs sm:text-sm">
                    <span className="text-violet-600 dark:text-violet-500">
                      const
                    </span>{" "}
                    passion ={" "}
                    <span className="text-green-600 dark:text-green-500">
                      'coding'
                    </span>
                    ;
                  </div>
                </div>
              </motion.div>

              <motion.div
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7, delay: 0.2 }}
  className="space-y-5 sm:space-y-6"
>
  <SectionHeading title="About Me" centered={false} />

  <motion.p
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.1 }}
    className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl"
  >
    A showcase of my recent projects highlighting my strengths in frontend
    development, responsive design, and clean UI implementation.
  </motion.p>

  <p className="text-gray-600 dark:text-gray-400">
    Frontend developer with 3 years of experience building modern web apps using
    React, Next.js, Tailwind CSS, and TanStack Query. Skilled at turning Figma designs
    into polished, accessible UIs.
  </p>

  <p className="text-gray-600 dark:text-gray-400">
    <span className="text-violet-600 dark:text-violet-500 font-medium">
      Familiar with backend tools like Firebase, Supabase, and Node.js.
    </span>{" "}
    Focused on performance, scalability, and continuous learning.
  </p>

  <motion.div
    className="mt-6 sm:mt-8"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.4 }}
  >
    <Link
      to="/about"
      className="inline-flex items-center gap-2 text-violet-600 dark:text-violet-500 hover:text-violet-700 dark:hover:text-violet-400 font-medium transition-colors"
    >
      Learn more about me <FiArrowRight />
    </Link>
  </motion.div>
</motion.div>

            </div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-16 sm:py-24 relative overflow-hidden">
          {/* Background elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-violet-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-violet-200/30 dark:bg-violet-900/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-64 h-64 bg-blue-200/30 dark:bg-blue-900/10 rounded-full filter blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-2xl shadow-xl p-6 sm:p-8 md:p-10 lg:p-12 max-w-4xl mx-auto border border-gray-100 dark:border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <span className="inline-block text-sm font-semibold text-violet-600 dark:text-violet-400 uppercase tracking-wider mb-2">
                    Let's Talk
                  </span>
                  <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      Let's Work{" "}
                      <span className="text-violet-600 dark:text-violet-500">
                        Together
                      </span>
                    </h2>
                    <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full mb-4 sm:mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 sm:mb-8">
                      Interested in working together? I'm always open to
                      discussing product design work or partnership
                      opportunities.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors"
                    >
                      Get in Touch
                    </Link>
                    <a
                      href="mailto:ayofefaheez@gmail.com"
                      className="inline-flex items-center justify-center gap-2 bg-transparent border border-violet-600 text-violet-600 hover:bg-violet-600/10 font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors"
                    >
                      Send an Email
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-violet-600 to-blue-600 p-5 sm:p-6 rounded-xl text-white"
                >
                  <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold">
                      My Services
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base">
                      Here's what I can help you with
                    </p>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/90">
                       Backend Development
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/90">
                        Web Application Development
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        className="w-5 h-5 text-white mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/90">
                        Frontend Development
                      </span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.div>
    </PageTransition>
  );
};

export default Home;
