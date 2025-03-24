import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const { isDarkMode } = useTheme();

  useEffect(() => {
    // Only apply custom cursor on non-touch devices
    if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
      return;
    }

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const mouseDown = () => setCursorVariant("click");
    const mouseUp = () => setCursorVariant("default");

    const handleLinkHover = () => setCursorVariant("hover");
    const handleLinkLeave = () => setCursorVariant("default");

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mousedown", mouseDown);
    window.addEventListener("mouseup", mouseUp);

    // Add event listeners to all links and buttons
    const interactiveElements = document.querySelectorAll(
      'a, button, input, textarea, [role="button"]'
    );
    interactiveElements.forEach((element) => {
      element.addEventListener("mouseenter", handleLinkHover);
      element.addEventListener("mouseleave", handleLinkLeave);
    });

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mousedown", mouseDown);
      window.removeEventListener("mouseup", mouseUp);

      interactiveElements.forEach((element) => {
        element.removeEventListener("mouseenter", handleLinkHover);
        element.removeEventListener("mouseleave", handleLinkLeave);
      });
    };
  }, []);

  // Cursor variants
  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: isDarkMode
        ? "rgba(255, 255, 255, 0.1)"
        : "rgba(0, 0, 0, 0.1)",
      border: isDarkMode
        ? "1px solid rgba(255, 255, 255, 0.3)"
        : "1px solid rgba(0, 0, 0, 0.3)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(124, 58, 237, 0.2)",
      border: "1px solid rgba(124, 58, 237, 0.6)",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(124, 58, 237, 0.4)",
      border: "1px solid rgba(124, 58, 237, 0.8)",
      transition: {
        type: "spring",
        mass: 0.6,
        damping: 20,
      },
    },
  };

  // Only show custom cursor on non-touch devices
  if (typeof navigator !== "undefined" && navigator.maxTouchPoints > 0) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate={cursorVariant}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  );
};

export default CustomCursor;
