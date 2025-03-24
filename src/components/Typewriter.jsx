import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Typewriter = ({ texts, delay = 2000 }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    // Current text from the array
    const fullText = texts[currentTextIndex];

    // If we're deleting, remove a character, otherwise add a character
    if (isDeleting) {
      if (currentText.length === 0) {
        // If we've deleted everything, move to the next text
        setIsDeleting(false);
        setCurrentTextIndex((currentTextIndex + 1) % texts.length);
        timeout = setTimeout(() => {}, 500); // Pause before typing next word
      } else {
        // Delete a character
        setCurrentText(fullText.substring(0, currentText.length - 1));
        timeout = setTimeout(() => {}, 50); // Faster when deleting
      }
    } else {
      if (currentText.length === fullText.length) {
        // If we've typed everything, start deleting after a delay
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delay);
      } else {
        // Add a character
        setCurrentText(fullText.substring(0, currentText.length + 1));
        timeout = setTimeout(() => {}, 100); // Slower when typing
      }
    }

    return () => clearTimeout(timeout);
  }, [currentText, currentTextIndex, isDeleting, texts, delay]);

  return (
    <span className="relative ml-2 inline-block min-w-[100px] text-left">
      <motion.span
        key={currentText}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-violet-600 dark:text-violet-500"
      >
        {currentText}
      </motion.span>
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 0.8 }}
        className="absolute right-[-12px] top-0 text-violet-600 dark:text-violet-500"
      >
        |
      </motion.span>
    </span>
  );
};

export default Typewriter;
