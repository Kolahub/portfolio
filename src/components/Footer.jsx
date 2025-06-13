import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiHeart,
  FiArrowUp,
  FiMessageSquare,
  FiCode,
  FiLayers,
  FiUser,
  FiHome,
  FiBriefcase,
  FiSend
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const socialLinks = [
    {
      icon: <FiGithub className="text-xl" />,
      url: "https://github.com/Kolahub/Y-Combinator-landing-page-clone",
      label: "GitHub",
      bg: "bg-gray-800 hover:bg-gray-700"
    },
    {
      icon: <FiLinkedin className="text-xl" />,
      url: "https://www.linkedin.com/in/faheez-ayofe-13049725b/",
      label: "LinkedIn",
      bg: "bg-blue-600 hover:bg-blue-700"
    },
    { 
      icon: <FiTwitter className="text-xl" />, 
      url: "https://x.com/AdekolaFaheez", 
      label: "X (Twitter)",
      bg: "bg-black hover:bg-gray-800"
    },
  ];

  const footerLinks = [
    { name: "Home", path: "/", icon: <FiHome className="mr-2" /> },
    { name: "About", path: "/about", icon: <FiUser className="mr-2" /> },
    { name: "Projects", path: "/projects", icon: <FiLayers className="mr-2" /> },
    { name: "Contact", path: "/contact", icon: <FiSend className="mr-2" /> },
  ];


  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200 dark:border-gray-800 pt-16">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* About Section */}
          <motion.div
            className="md:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-6">
              <div className="text-3xl font-bold flex items-center">
                <span className="text-violet-600 dark:text-violet-400">Dev</span>
                <span className="text-gray-900 dark:text-white">Folio</span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md">
              Skilled frontend developer with nearly 3 years of experience in
              web development. Passionate about building responsive and
              optimized web applications.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.bg} text-white p-3 rounded-full hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300`}
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>


          {/* Contact */}
          <motion.div
            className="md:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Contact Me
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <FiHome className="text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
                <span className="ml-3 text-gray-600 dark:text-gray-300">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <FiMail className="text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
                <a
                  href="mailto:ayofefaheez@gmail.com"
                  className="ml-3 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  ayofefaheez@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-900/50 flex items-center justify-center">
                    <FiBriefcase className="text-violet-600 dark:text-violet-400" />
                  </div>
                </div>
                <a
                  href="tel:+2347043675310"
                  className="ml-3 text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  +234 704 367 5310
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} Faheez Ayofe. All rights reserved.
          </p>
        </motion.div>
      </div>

      {/* Back to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-violet-600 text-white p-3 rounded-full shadow-lg hover:bg-violet-700 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2 z-50"
            aria-label="Back to top"
          >
            <FiArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
