import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiMail,
  FiHeart,
} from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FiGithub />,
      url: "https://github.com/AyofeHoC",
      label: "GitHub",
    },
    {
      icon: <FiLinkedin />,
      url: "https://linkedin.com/in/faheez-ayofe-a73b06281",
      label: "LinkedIn",
    },
    { icon: <FiMail />, url: "mailto:ayofefaheez@gmail.com", label: "Email" },
  ];

  const footerLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Link to="/" className="inline-block mb-4">
              <div className="text-2xl font-bold flex items-center">
                <span className="text-violet-600 dark:text-violet-500">
                  Dev
                </span>
                <span className="text-gray-900 dark:text-white">Folio</span>
              </div>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
              Skilled frontend developer with nearly 2 years of experience in
              web development. Passionate about building responsive and
              optimized web applications.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="text-gray-600 dark:text-gray-400">
                Lagos, Nigeria
              </li>
              <li>
                <a
                  href="mailto:ayofefaheez@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
                >
                  ayofefaheez@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2347043675310"
                  className="text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-500 transition-colors"
                >
                  +234 704 367 5310
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

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
          <p className="text-gray-600 dark:text-gray-400 text-sm flex items-center">
            Made with <FiHeart className="mx-1 text-red-500" /> using React,
            Tailwind CSS, and Framer Motion
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
