import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { FiArrowRight, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import TypedText from "./TypedText";

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-16 sm:py-20 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-violet-500/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            style={{ y, opacity }}
            className="space-y-5 sm:space-y-6 text-center lg:text-left"
          >
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-violet-600 dark:text-violet-500 font-mono text-sm md:text-base">
                Hello, my name is
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                Faheez Ayofe
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-700 dark:text-gray-300 flex items-center justify-center lg:justify-start">
                I build{" "}
                <TypedText
                  strings={[
                    "websites",
                    "web apps",
                    "experiences",
                    "responsive UIs",
                  ]}
                  typeSpeed={80}
                  backSpeed={50}
                  backDelay={2000}
                  className="text-violet-600 dark:text-violet-500 ml-2"
                />
              </h2>
            </motion.div>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
Frontend developer with 3 years of experience building web apps using React, Next.js, Tailwind CSS, and TanStack Query. Strong grasp of UI/UX principles and performance-focused development.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors"
              >
                View My Work <FiArrowRight />
              </Link>
              <a
                href="/Kola_Frontend_Developer_CV.docx"
                download
                className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-2.5 sm:py-3 px-5 sm:px-6 rounded-lg transition-colors"
              >
                <FiDownload /> CV
              </a>
            </motion.div>

            <motion.div
              className="flex gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a
                href="https://github.com/Kolahub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/faheez-ayofe-13049725b/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-sm mx-auto">
              {/* Gradient background with animated effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-blue-500/30 rounded-full transform rotate-12 scale-110"
                animate={{
                  scale: [1.1, 1.15, 1.1],
                  rotate: [12, 10, 12],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 8,
                  ease: "easeInOut",
                }}
              ></motion.div>

              {/* Highlight glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-500 rounded-full opacity-30 blur-xl group-hover:opacity-40 animate-pulse"></div>

              {/* Image container with better styling - adjusted to be taller with professional look */}
              <div className="relative bg-white dark:bg-gray-800 rounded-full overflow-hidden aspect-[4/5] shadow-xl border-2 border-white/50 dark:border-gray-700/50">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-500/10 z-10"
                  animate={{ opacity: [0.3, 0.5, 0.3] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                {/* Enhanced image styling with vignette effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-[5]"></div>
                <img
                  src="/images/meimg1.jpg"
                  alt="Faheez Ayofe"
                  className="w-full h-full object-cover object-center relative z-0"
                />
              </div>

              {/* Floating elements positioned for taller image */}
              <motion.div
                className="absolute -top-6 -right-6 md:-right-4 lg:-right-6 bg-white dark:bg-gray-800 p-3 sm:p-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="mt-2 font-mono text-xs sm:text-sm text-gray-800 dark:text-gray-200">
                  <span className="text-violet-600 dark:text-violet-500">
                    const
                  </span>{" "}
                  dev ={" "}
                  <span className="text-green-600 dark:text-green-500">
                    'passionate'
                  </span>
                  ;
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-6 -left-6 md:-left-4 lg:-left-6 bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 4,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                  <span className="inline-block w-3 h-3 bg-violet-600 dark:bg-violet-500 rounded-full animate-pulse"></span>
                  <span className="font-mono text-xs sm:text-sm">
                    Lagos, Nigeria
                  </span>
                </div>
              </motion.div>

              {/* Tech stack floating elements - positioned for taller image */}
              <motion.div
                className="absolute top-1/3 -right-12 md:-right-8 lg:-right-12 transform bg-white dark:bg-gray-800 py-2 px-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0, y: [0, -5, 0] }}
                transition={{
                  opacity: { delay: 0.5, duration: 0.5 },
                  x: { delay: 0.5, duration: 0.5 },
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    delay: 1,
                  },
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-blue-600"
                    >
                      <path d="M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm2.595 4.935a3.483 3.483 0 01-.424 4.151c-.47.528-1.232.935-1.432 1.993-.039.2-.68.4-.106.395h-.578c-.056 0-.092-.199-.106-.399-.13-1.225-.7-1.573-1.126-1.975-1.144-1.08-1.692-2.931-.146-4.521a2.796 2.796 0 114.068.356zm-6.484 14.95A5.480 5.480 0 0012 18.945a5.480 5.480 0 003.889.94l.723.946H7.788z" />
                    </svg>
                  </span>
                  <span className="font-mono text-xs text-gray-800 dark:text-gray-200">
                    React.js
                  </span>
                </div>
              </motion.div>

              {/* New additional tech badge */}
              <motion.div
                className="absolute bottom-1/3 -left-12 md:-left-8 lg:-left-12 transform bg-white dark:bg-gray-800 py-2 px-3 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0, y: [0, 5, 0] }}
                transition={{
                  opacity: { delay: 0.7, duration: 0.5 },
                  x: { delay: 0.7, duration: 0.5 },
                  y: {
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    delay: 0.5,
                  },
                }}
              >
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-6 h-6 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-3 h-3 text-teal-600"
                    >
                      <path
                        d="M12 6v12m-8-6h16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                  <span className="font-mono text-xs text-gray-800 dark:text-gray-200">
                    Tailwind
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
