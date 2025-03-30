import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLayout, FiServer } from "react-icons/fi";
import SectionHeading from "../components/SectionHeading";

const About = () => {
  const skills = [
    {
      category: "Languages & Frameworks",
      items: [
        "JavaScript (React, Redux)",
        "HTML",
        "CSS (Tailwind CSS, Bootstrap, Sass)",
      ],
    },
    {
      category: "Backend & Databases",
      items: ["Firebase", "Supabase", "Node.js"],
    },
    {
      category: "Tools & Environments",
      items: ["Visual Studio", "Visual Studio Code", "Cursor"],
    },
    {
      category: "Other",
      items: [
        "Responsive Design",
        "UI/UX Design Principles",
        "Optimization",
        "Git",
      ],
    },
  ];

  const experiences = [
    {
      title: "Web Development Intern",
      company: "SQI College of ICT",
      period: "January 2024 - June 2024",
      description:
        "Developed and maintained multiple web projects, including website clones, a mobile emulator, and a banking web application. Gained hands-on experience in front-end and back-end development using modern web technologies. Worked on responsive web design, improving UI/UX for various applications. Collaborated with a team to debug and optimize web applications for better performance.",
    },
  ];

  const education = [
    {
      institution: "Babcock University",
      location: "Ogun State",
      degree: "Bachelor of Science in Computer Science",
      period: "Expected July 2025",
      achievement: "Second class upper",
    },
  ];

  const projects = [
    {
      title: "Entertainment web app",
      technologies: "React.js, Tailwind CSS, Firebase",
      description:
        "A full-stack entertainment web app with features like bookmarking, search functionality, and responsive design. The app allows users to browse movies and TV series with an intuitive interface.",
    },
    {
      title: "Space tourism multi-page website",
      technologies: "React.js, Tailwind CSS",
      description:
        "A multi-page website for a fictional space tourism company with tab-based navigation to display information about destinations, crew, and technology used for space travel.",
    },
    {
      title: "REST Countries API with theme switcher",
      technologies: "JavaScript, CSS, REST API",
      description:
        "An application that integrates with the REST Countries API to display information about countries around the world. Features include search, filtering by region, and a dark/light mode toggle.",
    },
    {
      title: "Audiophile e-commerce website",
      technologies: "React.js, Tailwind CSS, Context API",
      description:
        "A fully functional e-commerce website for audio products with features like product browsing, shopping cart functionality, checkout process, and responsive design for all device sizes.",
    },
  ];

  const services = [
    {
      icon: <FiCode />,
      title: "Frontend Development",
      description:
        "Building responsive and interactive web applications using modern JavaScript frameworks like React with Redux.",
    },
    {
      icon: <FiLayout />,
      title: "UI Implementation",
      description:
        "Implementing UI designs from Figma into responsive and functional web applications with attention to detail.",
    },
    {
      icon: <FiDatabase />,
      title: "Backend Integration",
      description:
        "Connecting your frontend applications to backend services using Firebase, Supabase or Node.js.",
    },
    {
      icon: <FiServer />,
      title: "Web Optimization",
      description:
        "Optimizing web applications for performance, speed, and SEO to enhance user experience.",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 overflow-hidden"
    >
      {/* Hero Section */}
      <section className="py-20 px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500/10 rounded-full filter blur-3xl"></div>
          <div className="hidden md:block absolute top-1/2 right-1/4 w-32 h-32 bg-teal-500/10 rounded-full filter blur-2xl"></div>
          <motion.div
            className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-violet-500/30 to-transparent"
            animate={{
              scaleX: [0.5, 1.5, 0.5],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              repeat: Infinity,
              duration: 8,
              ease: "easeInOut",
            }}
          />
        </div>

        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-lg border-l-2 border-t-2 border-violet-500/80"></div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 relative">
                  <span className="text-violet-600 dark:text-violet-500">
                    Faheez Ayofe
                  </span>
                </h1>
                <div className="absolute -bottom-2 -right-6 w-12 h-12 rounded-lg border-r-2 border-b-2 border-violet-500/80"></div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-gray-700 dark:text-gray-300 mb-6 flex items-center">
                Web Developer
                <span className="relative ml-4 px-3 py-1 text-sm font-medium bg-gradient-to-r from-violet-600 to-blue-600 text-white rounded-full shadow-lg">
                  Frontend
                </span>
              </h2>

              <div className="text-gray-600 dark:text-gray-400 space-y-4 mb-8 text-base md:text-lg max-w-2xl">
                <p className="border-l-4 border-violet-500 pl-4 py-1">
                  Skilled frontend developer with nearly 2 years of experience
                  in web development. Proficient in React and Tailwind CSS, with
                  experience implementing UI designs from Figma.
                </p>
                <p>
                  Knowledgeable in backend technologies such as Firebase,
                  Supabase, Node.js. Passionate about building responsive and
                  optimized web applications. Committed to continuous learning
                  and implementing best practices in modern web development.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:ayofefaheez@gmail.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-md hover:shadow-lg"
                >
                  ayofefaheez@gmail.com
                </a>
                <a
                  href="tel:+2347043675310"
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-violet-600 dark:text-violet-500 border border-violet-600 dark:border-violet-500 hover:bg-violet-50 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md"
                >
                  +234 704 367 5310
                </a>
                <a
                  href="https://www.linkedin.com/in/faheez-ayofe-13049725b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  LinkedIn Profile
                </a>
                <a
                  href="https://github.com/Kolahub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 font-medium py-3 px-6 rounded-lg transition-all shadow-sm hover:shadow-md border border-gray-200 dark:border-gray-700"
                >
                  Github Profile
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <div className="relative w-full max-w-md mx-auto">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-tr from-violet-600/30 to-blue-500/30 rounded-2xl transform rotate-6 scale-105"
                  animate={{
                    scale: [1.05, 1.08, 1.05],
                    rotate: [6, 4, 6],
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 8,
                    ease: "easeInOut",
                  }}
                ></motion.div>

                {/* Highlight effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-600 to-blue-500 rounded-2xl opacity-30 blur-xl animate-pulse"></div>

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/50 dark:border-gray-700/50">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-500/10 z-10"
                    animate={{ opacity: [0.3, 0.5, 0.3] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 5,
                      ease: "easeInOut",
                    }}
                  ></motion.div>

                  {/* Vignette effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-[5]"></div>

                  <img
                    src="/images/meimg2.jpg"
                    alt="Faheez Ayofe"
                    className="w-full h-full object-cover aspect-[4/5]"
                  />
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-20 h-20 bg-violet-600/20 rounded-full z-[-1]"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 5,
                    ease: "easeInOut",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-blue-600/20 rounded-full z-[-1]"
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 6,
                    delay: 0.5,
                    ease: "easeInOut",
                  }}
                ></motion.div>

                {/* Badge element */}
                <motion.div
                  className="absolute -bottom-4 right-6 bg-white dark:bg-gray-800 py-2 px-4 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700"
                  animate={{ y: [0, 5, 0] }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 4,
                    ease: "easeInOut",
                  }}
                >
                  <div className="flex items-center gap-2 text-gray-800 dark:text-gray-200">
                    <span className="inline-block w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="font-mono text-xs">
                      Available for work
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full filter blur-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <SectionHeading
            title="Skills"
            subtitle="Technical skills and expertise"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-bold text-violet-600 dark:text-violet-500 mb-4 flex items-center">
                  <span className="inline-block w-2 h-8 bg-violet-600 mr-3 rounded-sm"></span>
                  {skillGroup.category}
                </h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-start gap-2">
                      <span className="text-violet-600 dark:text-violet-500 mt-0.5">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/2 left-0 w-64 h-64 bg-violet-500/5 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <SectionHeading
            title="Experience"
            subtitle="Professional work experience"
          />

          <div className="max-w-4xl mx-auto mt-12">
            <div className="relative pl-8 border-l-2 border-violet-600 dark:border-violet-500 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] h-8 w-8 rounded-full bg-gradient-to-br from-violet-600 to-blue-600 dark:from-violet-500 dark:to-blue-500 flex items-center justify-center shadow-md">
                    <span className="h-4 w-4 rounded-full bg-white"></span>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/60 dark:to-blue-900/60 text-violet-800 dark:text-violet-300 rounded-full shadow-sm">
                        {exp.period}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-violet-600 dark:text-violet-500 mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/5 rounded-full filter blur-2xl"></div>
          <div className="absolute top-1/3 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <SectionHeading title="Education" subtitle="Academic background" />

          <div className="max-w-4xl mx-auto mt-12">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border border-gray-100 dark:border-gray-700 backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                  <div className="flex items-center">
                    <span className="inline-block w-2 h-12 bg-gradient-to-b from-violet-600 to-blue-600 mr-4 rounded-sm"></span>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {edu.institution}
                    </h3>
                  </div>
                  <span className="inline-block px-4 py-1 text-sm font-medium bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/60 dark:to-blue-900/60 text-violet-800 dark:text-violet-300 rounded-full shadow-sm">
                    {edu.period}
                  </span>
                </div>
                <h4 className="text-xl font-medium text-violet-600 dark:text-violet-500 mb-4 ml-6">
                  {edu.degree}
                </h4>
                <div className="flex flex-wrap gap-4 ml-6 text-base">
                  <span className="text-gray-600 dark:text-gray-400 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {edu.location}
                  </span>
                  <span className="text-gray-300 dark:text-gray-600">|</span>
                  <span className="text-gray-600 dark:text-gray-400 flex items-center">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {edu.achievement}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Overview Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 right-0 w-64 h-64 bg-violet-500/5 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <SectionHeading
            title="Key Projects"
            subtitle="Notable projects I've worked on"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-gray-800 p-0 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all overflow-hidden"
              >
                <div className="h-3 bg-gradient-to-r from-violet-600 to-blue-600 transform opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-500 transition-colors">
                    {project.title}
                  </h3>
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-gradient-to-r from-violet-100 to-blue-100 dark:from-violet-900/60 dark:to-blue-900/60 text-violet-800 dark:text-violet-300 rounded-full">
                      {project.technologies}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 relative">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent"></div>
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-violet-500/5 rounded-full filter blur-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <SectionHeading title="Services" subtitle="What I can do for you" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-all group overflow-hidden relative"
              >
                <div className="absolute -right-6 -top-6 w-12 h-12 bg-violet-500/10 rounded-full transform transition-transform duration-500 translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1"></div>
                <div className="absolute -left-6 -bottom-6 w-12 h-12 bg-blue-500/10 rounded-full transform transition-transform duration-500 translate-x-0 translate-y-0 group-hover:translate-x-1 group-hover:translate-y-1"></div>

                <div className="text-3xl text-gradient-to-r from-violet-600 to-blue-600 dark:from-violet-500 dark:to-blue-500 mb-4 bg-gray-100 dark:bg-gray-700 p-3 rounded-lg inline-block">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-violet-600 dark:group-hover:text-violet-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 relative z-10">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-64 h-64 bg-violet-500/5 rounded-full filter blur-2xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full filter blur-2xl"></div>
        </div>

        <div className="container mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-0 shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-violet-600 to-blue-600"></div>
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-r from-gray-50 to-white dark:from-gray-800 dark:to-gray-800/50 p-6 rounded-lg"
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                    <span className="inline-block w-1 h-8 bg-gradient-to-b from-violet-600 to-blue-600 mr-3 rounded-sm"></span>
                    Location
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 ml-4">
                    Currently based in{" "}
                    <span className="font-semibold text-violet-600 dark:text-violet-500">
                      Lagos, Nigeria
                    </span>{" "}
                    and available for remote work opportunities.
                  </p>
                  <div className="space-y-3 ml-4 mb-6">
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        GMT+1 (West Africa Time)
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Respond quickly to emails and messages
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/30 flex items-center justify-center text-violet-600 dark:text-violet-400 flex-shrink-0">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-600 dark:text-gray-400">
                        Fluent in English
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 ml-4 border-l-2 border-violet-500/50 pl-4 py-1">
                    Feel free to reach out to discuss your project requirements
                    or any collaboration opportunities.
                  </p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="rounded-xl overflow-hidden h-80 shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="relative h-full w-full">
                    <img
                      src="/images/lagos-map.jpg"
                      alt="Lagos, Nigeria"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://maps.googleapis.com/maps/api/staticmap?center=Lagos,Nigeria&zoom=12&size=600x400&maptype=roadmap&markers=color:red%7CLagos,Nigeria&key=${
                          import.meta.env.VITE_GOOGLE_MAPS_API_KEY
                        }`;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-[5]">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className="flex items-center space-x-2 mb-2">
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <p className="text-white text-base font-medium">
                            Lagos, Nigeria
                          </p>
                        </div>
                        <p className="text-white/90 text-sm ml-7 mb-3">
                          Nigeria's largest city & economic hub
                        </p>
                        <div className="flex items-center space-x-3 ml-7">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                            GMT+1
                          </span>
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                            Remote Work
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
