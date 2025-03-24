import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiSend, FiUser, FiMail, FiMessageSquare } from "react-icons/fi";
import { useLocation } from "react-router-dom";

const ContactForm = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("");
  const [isFormReady, setIsFormReady] = useState(false);

  // Get API URL from environment variables
  const API_URL = import.meta.env.VITE_APP_API_URL || "";

  useEffect(() => {
    // Reset form state on component mount to ensure proper animation
    setIsFormReady(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    // If honeypot field is filled, silently "succeed" without sending the email
    if (formData.website) {
      // Simulate a successful submission for bots without actually sending
      setSuccess(true);
      setMessage(
        "Your message has been sent successfully! We'll get back to you soon."
      );
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website: "",
      });
      return;
    }

    // Reset any previous submission state
    setLoading(true);
    setSuccess(false);
    setError(null);
    setMessage("");

    try {
      // Use the API endpoint directly (now handled by Express server through Vite proxy)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("Contact form response:", data);

      if (response.ok) {
        setSuccess(true);
        setMessage(
          data.message ||
            "Your message has been sent successfully! I'll get back to you soon."
        );

        // Reset form data on success
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          website: "",
        });
      } else {
        // Show error message from server if available
        setError(
          data.message ||
            "An error occurred. Please try again or contact me directly."
        );
      }
    } catch (err) {
      console.error("Contact form submission error:", err);
      setError(
        "Network error. Please try again or contact me directly at ayofefaheez@gmail.com"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-800 p-5 sm:p-6 md:p-8 rounded-xl shadow-md border border-gray-100 dark:border-gray-700 relative overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={`contact-form-${location.pathname}`}
    >
      {/* Decorative elements */}
      <div className="absolute -right-16 -top-16 w-32 h-32 bg-violet-500/5 rounded-full"></div>
      <div className="absolute -left-16 -bottom-16 w-32 h-32 bg-blue-500/5 rounded-full"></div>

      <div className="relative z-10">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <span className="inline-block w-1.5 h-6 bg-gradient-to-b from-violet-600 to-blue-600 mr-3 rounded-sm"></span>
          Send Message
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-gray-700 dark:text-gray-300 text-sm font-medium flex items-center gap-2"
            >
              <FiUser className="text-violet-600 dark:text-violet-500" />
              Name
            </label>
            <div className={`relative ${errors.name ? "animate-shake" : ""}`}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full bg-gray-50 dark:bg-gray-900 border ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } rounded-lg px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500 transition-all`}
                placeholder="Your name"
                disabled={loading}
              />
              <motion.span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 ${
                  errors.name ? "w-0" : ""
                }`}
                initial={{ width: 0 }}
                animate={{ width: formData.name ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {errors.name && (
              <motion.p
                className="text-red-500 text-xs mt-1 flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                {errors.name}
              </motion.p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-gray-700 dark:text-gray-300 text-sm font-medium flex items-center gap-2"
            >
              <FiMail className="text-violet-600 dark:text-violet-500" />
              Email
            </label>
            <div className={`relative ${errors.email ? "animate-shake" : ""}`}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-gray-50 dark:bg-gray-900 border ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } rounded-lg px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500 transition-all`}
                placeholder="your.email@example.com"
                disabled={loading}
              />
              <motion.span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 ${
                  errors.email ? "w-0" : ""
                }`}
                initial={{ width: 0 }}
                animate={{ width: formData.email ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {errors.email && (
              <motion.p
                className="text-red-500 text-xs mt-1 flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                {errors.email}
              </motion.p>
            )}
          </div>

          <div className="space-y-2 md:col-span-2">
            <label
              htmlFor="subject"
              className="text-gray-700 dark:text-gray-300 text-sm font-medium flex items-center gap-2"
            >
              <FiMessageSquare className="text-violet-600 dark:text-violet-500" />
              Subject (Optional)
            </label>
            <div className="relative">
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500 transition-all"
                placeholder="What's this about?"
                disabled={loading}
              />
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300"
                initial={{ width: 0 }}
                animate={{ width: formData.subject ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <div className="space-y-2 md:col-span-2">
            <label
              htmlFor="message"
              className="text-gray-700 dark:text-gray-300 text-sm font-medium flex items-center gap-2"
            >
              <FiMessageSquare className="text-violet-600 dark:text-violet-500" />
              Message
            </label>
            <div
              className={`relative ${errors.message ? "animate-shake" : ""}`}
            >
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full bg-gray-50 dark:bg-gray-900 border ${
                  errors.message
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-700"
                } rounded-lg px-4 py-3 text-base text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-violet-600 dark:focus:ring-violet-500 transition-all resize-none`}
                placeholder="Your message here..."
                disabled={loading}
              />
              <motion.span
                className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-blue-600 transition-all duration-300 ${
                  errors.message ? "w-0" : ""
                }`}
                initial={{ width: 0 }}
                animate={{ width: formData.message ? "100%" : "0%" }}
                transition={{ duration: 0.3 }}
              />
            </div>
            {errors.message && (
              <motion.p
                className="text-red-500 text-xs mt-1 flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <span className="inline-block w-1 h-1 bg-red-500 rounded-full mr-1"></span>
                {errors.message}
              </motion.p>
            )}
          </div>
        </div>

        {/* Honeypot field - hidden from users but bots will fill it out */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="website">Website (Leave this empty)</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />
        </div>

        {(success || error) && (
          <motion.div
            className={`mt-6 p-4 rounded-lg ${
              success
                ? "bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-800/30 text-green-800 dark:text-green-400"
                : "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/30 dark:to-pink-900/30 border border-red-200 dark:border-red-800/30 text-red-800 dark:text-red-400"
            } text-sm flex items-start gap-3`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`${
                success ? "text-green-500" : "text-red-500"
              } mt-0.5`}
            >
              {success ? (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </span>
            <p>{success ? message : error}</p>
          </motion.div>
        )}

        <motion.button
          type="submit"
          disabled={loading}
          className="mt-6 w-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg text-base transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {loading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </>
          ) : (
            <>
              <FiSend className="text-white/90" /> Send Message
            </>
          )}
        </motion.button>
      </div>
    </motion.form>
  );
};

export default ContactForm;
