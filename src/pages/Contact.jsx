import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";
import ContactForm from "../components/ContactForm";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  const location = useLocation();

  return (
    <PageTransition>
      <section className="relative overflow-hidden" key={location.pathname}>
        {/* Background decorative elements */}
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-violet-50/50 to-transparent dark:from-violet-950/10 dark:to-transparent -z-10" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-100/30 dark:bg-blue-900/10 rounded-full blur-3xl -z-10 transform translate-x-1/4 translate-y-1/4" />
        <div className="absolute top-40 left-10 w-72 h-72 bg-violet-100/30 dark:bg-violet-900/10 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block mb-4">
              <motion.div
                className="flex items-center gap-1.5 bg-violet-100 dark:bg-violet-900/30 text-violet-800 dark:text-violet-300 px-3 py-1 rounded-full text-sm font-medium mb-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-600"></span>
                </span>
                Available for freelance work
              </motion.div>
            </div>

            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              Let's Connect
            </motion.h1>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              I'm always open to discussing new projects, creative ideas or
              opportunities to be part of your vision.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12">
            <div className="lg:col-span-2 order-2 lg:order-1">
              <motion.div
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 p-6 sm:p-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                key={`contact-info-${location.pathname}`}
              >
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                  <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-violet-600 to-blue-600 mr-3 rounded-sm"></span>
                  Contact Information
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      <FiMapPin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      <FiMail className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                        Email Address
                      </h3>
                      <a
                        href="mailto:ayofefaheez@gmail.com"
                        className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                      >
                        ayofefaheez@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      <FiPhone className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                        Phone
                      </h3>
                      <a
                        href="tel:+2347043675310"
                        className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                      >
                        +234 704 367 5310
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      <FiLinkedin className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                        LinkedIn
                      </h3>
                      <a
                        href="https://www.linkedin.com/in/faheez-ayofe-13049725b/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                      >
                        linkedin.com/in/faheez-ayofe
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 flex items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900/30 text-violet-600 dark:text-violet-400 flex-shrink-0">
                      <FiGithub className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-gray-900 dark:text-white mb-1">
                        GitHub
                      </h3>
                      <a
                        href="https://github.com/Kolahub"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 transition-colors"
                      >
                        github.com/Kolahub
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-base font-medium text-gray-900 dark:text-white mb-4">
                    My Location
                  </h3>
                  <div className="relative h-64 w-full rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-blue-600/10 z-10"></div>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.4595472939!2d3.1438011742089354!3d6.548055350875953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1689952202186!5m2!1sen!2sng"
                      className="w-full h-full border-0"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lagos, Nigeria on Google Maps"
                    ></iframe>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-3 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
