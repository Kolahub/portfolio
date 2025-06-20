import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { FiCode, FiLayout, FiDatabase, FiTool } from "react-icons/fi";
import SectionHeading from "./SectionHeading";
import { useInView } from "framer-motion";

const SkillCard = ({ category, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: index * 0.1,
          ease: [0.16, 1, 0.3, 1], // Custom easing for smoother animation
        },
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      className="bg-white dark:bg-gray-800 p-5 sm:p-6 rounded-xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 sm:gap-4 mb-4">
        <div className="w-10 h-10 bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-500 rounded-lg flex items-center justify-center text-lg sm:text-xl">
          {category.icon}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
          {category.title}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill, i) => (
          <span
            key={i}
            className="px-2.5 sm:px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300 rounded-full text-xs sm:text-sm whitespace-nowrap"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FiLayout />,
      skills: ["React", "Next.js", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "Backend & Database",
      icon: <FiDatabase />,
      skills: ["Firebase", "Supabase", "Node.js", "TanStack Query"],
    },
    {
      title: "Tools & Environments",
      icon: <FiCode />,
      skills: ["Git", "VS Code", "RESTful APIs", "Responsive Design"],
    },
    {
      title: "Other Skills",
      icon: <FiTool />,
      skills: ["UI/UX Design", "Problem Solving", "Team Collaboration"],
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I work with on a daily basis"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 mt-10 sm:mt-12">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.title} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
