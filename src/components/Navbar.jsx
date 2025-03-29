import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  FiMenu,
  FiX,
  FiMoon,
  FiSun,
  FiHome,
  FiUser,
  FiFolder,
  FiMail,
  FiChevronRight,
  FiGithub,
  FiLinkedin,
  FiArrowLeft,
} from "react-icons/fi";

// Theme toggle component for a more polished look
const ThemeToggle = ({ className = "" }) => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className={`relative overflow-hidden rounded-full focus:outline-none ${className}`}
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <div className="h-10 w-20 rounded-full bg-gray-100 dark:bg-gray-800 p-1.5 relative">
        {/* 3D Sliding circle with shadow */}
        <motion.div
          className="absolute h-7 w-7 rounded-full bg-white z-10"
          animate={{
            x: isDarkMode ? 40 : 0,
            rotateY: isDarkMode ? 180 : 0,
            scale: 1.1,
          }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 30,
            scale: { duration: 0.1 },
          }}
          style={{
            boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",
          }}
        />

        {/* Sun icon with dynamic scaling */}
        <motion.div
          className="absolute left-1.5 top-1.5 h-7 w-7 flex items-center justify-center z-20"
          animate={{
            scale: isDarkMode ? 0.9 : 1.1,
            opacity: isDarkMode ? 0.7 : 1,
          }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <FiSun
            className={`h-5 w-5 transition-colors ${
              isDarkMode ? "text-gray-400" : "text-amber-500"
            }`}
          />
        </motion.div>

        {/* Moon icon with dynamic scaling */}
        <motion.div
          className="absolute right-1.5 top-1.5 h-7 w-7 flex items-center justify-center z-20"
          animate={{
            scale: isDarkMode ? 1.1 : 0.9,
            opacity: isDarkMode ? 1 : 0.7,
          }}
          transition={{ type: "spring", stiffness: 500 }}
        >
          <FiMoon
            className={`h-5 w-5 transition-colors ${
              isDarkMode ? "text-violet-400" : "text-gray-400"
            }`}
          />
        </motion.div>

        {/* 3D groove effect */}
        <div className="absolute inset-0 rounded-full border border-black/10 dark:border-white/10" />
      </div>
    </motion.button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const navRef = useRef(null);
  const dragControls = useDragControls();
  const [pendingNavigation, setPendingNavigation] = useState(null);

  // Handle navigation with animation complete
  const handleNavigation = (path) => {
    setPendingNavigation(path);
    setIsOpen(false);
  };

  const handleAnimationComplete = () => {
    if (pendingNavigation) {
      navigate(pendingNavigation);
      setPendingNavigation(null);
    }
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(e.target) &&
        !e.target.closest(".menu-button")
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none"; // Prevent touch scrolling
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = ""; // Reset touch actions
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isOpen]);

  // Handle swipe to close
  function startDrag(event) {
    dragControls.start(event, { snapToCursor: false });
  }

  // Function to handle drag end
  function handleDragEnd(_, info) {
    if (info.offset.x > 100) {
      setIsOpen(false);
    }
  }

  const navLinks = [
    { name: "Home", path: "/", icon: <FiHome /> },
    { name: "About", path: "/about", icon: <FiUser /> },
    { name: "Projects", path: "/projects", icon: <FiFolder /> },
    { name: "Contact", path: "/contact", icon: <FiMail /> },
  ];

  const socialLinks = [
    { name: "GitHub", icon: <FiGithub />, url: "https://github.com/Kolahub" },
    {
      name: "LinkedIn",
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/faheez-ayofe-13049725b/",
    },
  ];

  // Animation variants
  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "tween",
        duration: 0.35,
        ease: [0.4, 0.0, 0.2, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      x: 0,
      transition: {
        type: "tween",
        duration: 0.4,
        ease: [0.4, 0.0, 0.2, 1],
        staggerChildren: 0.07,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
      },
    },
  };

  const overlayVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.25,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.35,
      },
    },
  };

  // Swipe indicator animation
  const swipeIndicatorVariants = {
    initial: { x: 10, opacity: 0 },
    animate: {
      x: 0,
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop",
        ease: "easeInOut",
        times: [0, 0.5, 1],
      },
    },
  };

  // Menu button pulse effect on first render
  const menuButtonVariants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        delay: 1,
        duration: 0.5,
        times: [0, 0.5, 1],
      },
    },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 lg ${
        scrolled
          ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="group relative z-10">
          <motion.div
            className="text-2xl font-bold flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-violet-600 dark:text-violet-500">Dev</span>
            <span className="text-gray-900 dark:text-white">Folio</span>
            <motion.span
              className="ml-1 inline-block bg-violet-600 dark:bg-violet-500 w-2 h-2 rounded-full"
              animate={{ scale: [1, 1.5, 1] }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => `
                relative text-base font-medium transition-colors
                ${
                  isActive
                    ? "text-violet-600 dark:text-violet-500"
                    : "text-gray-700 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-500"
                }
              `}
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-violet-600 dark:bg-violet-500"
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden z-[60] p-2 rounded-full bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300 focus:outline-none menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          whileTap={{ scale: 0.95 }}
          variants={menuButtonVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Navigation Overlay & Drawer */}
      <AnimatePresence onExitComplete={handleAnimationComplete}>
        {isOpen && (
          <>
            {/* Backdrop Overlay */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 z-[55] backdrop-blur-sm"
              initial="closed"
              animate="open"
              exit="closed"
              variants={overlayVariants}
              onClick={() => setIsOpen(false)}
              style={{
                height: "100vh",
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
              }}
            />

            {/* Mobile Menu Drawer */}
            <motion.div
              className="md:hidden fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-white dark:bg-gray-900 shadow-2xl z-[56] flex flex-col touch-none overflow-hidden"
              ref={navRef}
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              drag="x"
              dragDirectionLock
              dragControls={dragControls}
              dragListener={false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={handleDragEnd}
              onPointerDown={startDrag}
              style={{ height: "100vh" }}
            >
              {/* Swipe indicator */}
              <div className="absolute top-1/2 left-2 transform -translate-y-1/2 hidden sm:flex items-center justify-center text-gray-400 dark:text-gray-600 opacity-60">
                <motion.div
                  variants={swipeIndicatorVariants}
                  initial="initial"
                  animate="animate"
                  className="flex items-center gap-1.5"
                >
                  <FiArrowLeft size={16} />
                  <span className="text-xs font-medium">swipe to close</span>
                </motion.div>
              </div>

              {/* Menu Header with logo and theme toggle */}
              <div className="p-5 border-b border-gray-100 dark:border-gray-800 flex justify-between items-center">
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigation("/");
                  }}
                  className="text-xl font-bold flex items-center"
                >
                  <span className="text-violet-600 dark:text-violet-500">
                    Dev
                  </span>
                  <span className="text-gray-900 dark:text-white">Folio</span>
                </Link>
                <div className="flex items-center gap-2">
                  <ThemeToggle />
                  <motion.button
                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
                    onClick={() => setIsOpen(false)}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FiX size={20} />
                  </motion.button>
                </div>
              </div>

              {/* Content container - fixed height with scrolling */}
              <div className="flex flex-col flex-1 h-full overflow-hidden">
                {/* Menu Links */}
                <div className="flex-1 overflow-y-auto py-6 px-5 no-scrollbar">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <motion.div
                      className="mb-3 px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                      variants={itemVariants}
                    >
                      Navigation
                    </motion.div>

                    {navLinks.map((link, index) => (
                      <motion.div
                        key={link.name}
                        variants={itemVariants}
                        custom={index}
                      >
                        <NavLink
                          to={link.path}
                          onClick={(e) => {
                            e.preventDefault();
                            handleNavigation(link.path);
                          }}
                          className={({ isActive }) => `
                            flex items-center justify-between p-3 rounded-xl transition-all active:bg-gray-100 dark:active:bg-gray-800 touch-manipulation
                ${
                  isActive
                    ? "bg-gradient-to-r from-violet-50 to-blue-50 dark:from-violet-900/30 dark:to-blue-900/30 text-violet-600 dark:text-violet-400 font-medium"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                }
                          `}
                        >
                          {({ isActive }) => (
                            <>
                              <div className="flex items-center gap-3">
                                <div
                                  className={`${
                                    isActive
                                      ? "text-violet-600 dark:text-violet-400"
                                      : "text-gray-500 dark:text-gray-400"
                                  }`}
                                >
                                  {link.icon}
                                </div>
                                <span>{link.name}</span>
                              </div>
                              {isActive && (
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <FiChevronRight className="text-violet-600 dark:text-violet-400" />
                                </motion.div>
                              )}
                            </>
                          )}
                        </NavLink>
                      </motion.div>
                    ))}

                    {/* Extra decoration */}
                    <motion.div
                      variants={itemVariants}
                      className="mt-8 py-4 px-3 rounded-xl bg-gradient-to-br from-violet-50/80 to-blue-50/80 dark:from-violet-900/20 dark:to-blue-900/20 border border-violet-100/50 dark:border-violet-800/20"
                    >
                      <div className="text-sm text-gray-700 dark:text-gray-300">
                        <p className="mb-1 font-medium text-violet-700 dark:text-violet-400">
                          Need a developer?
                        </p>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">
                          I'm available for freelance projects.
                        </p>
                      </div>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Menu Footer with social links and contact button */}
                <div className="shrink-0">
                  {/* Social links */}
                  <motion.div
                    className="p-5 border-t border-gray-100 dark:border-gray-800"
                    variants={itemVariants}
                  >
                    <div className="mb-3 px-1 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Connect
                    </div>
                    <div className="flex gap-3 mb-5">
                      {socialLinks.map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-violet-100 dark:hover:bg-violet-900/30 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                          aria-label={social.name}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {social.icon}
                        </motion.a>
                      ))}
                    </div>

                    <Link
                      to="/contact"
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavigation("/contact");
                      }}
                      className="w-full py-2.5 px-4 bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white rounded-lg font-medium text-center flex items-center justify-center gap-2 shadow-sm hover:shadow transition-all active:scale-[0.98]"
                    >
                      <FiMail size={16} />
                      <span>Get in Touch</span>
                    </Link>
                  </motion.div>

                  {/* Brand signature */}
                  <motion.div
                    className="p-4 text-center text-xs text-gray-500 dark:text-gray-400"
                    variants={itemVariants}
                  >
                    <p>
                      © {new Date().getFullYear()} DevFolio. All rights
                      reserved.
                    </p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
