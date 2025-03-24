import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 inline-block text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        {title}
        <motion.span
          className="text-violet-600 dark:text-violet-500"
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          .
        </motion.span>
      </motion.h2>

      {subtitle && (
        <motion.p
          className={`text-gray-600 dark:text-gray-400 max-w-2xl ${
            centered ? "mx-auto" : ""
          }`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

export default SectionHeading;
