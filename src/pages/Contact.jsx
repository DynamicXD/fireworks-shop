import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill out all fields!", {
        position: "bottom-right",
        autoClose: 3000,
      });
      return;
    }

    // Simulate form submission (replace with actual API call)
    console.log("Form Data:", formData);
    toast.success("Your message has been sent successfully!", {
      position: "bottom-right",
      autoClose: 3000,
    });

    // Reset form fields
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#f5f1eb] dark:bg-gray-900 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
          Contact Us
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-center max-w-2xl mx-auto mb-8">
          Have questions or need assistance? Fill out the form below, and we'll get back to you as soon as possible.
        </p>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter your name"
                autoComplete="off" // Disable autocomplete
                required
              />
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter your email"
                autoComplete="off" // Disable autocomplete
                required
              />
            </div>

            {/* Subject Field */}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                placeholder="Enter the subject"
                autoComplete="off" // Disable autocomplete
                required
              />
            </div>

            {/* Message Field */}
            <div className="mb-6">
              <label className="block text-gray-700 dark:text-gray-300 font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#dcc7ad] dark:bg-gray-700 dark:text-white dark:border-gray-600"
                rows="5"
                placeholder="Enter your message"
                autoComplete="off" // Disable autocomplete
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#dcc7ad] dark:bg-gray-700 text-gray-800 dark:text-white px-4 py-2 rounded-md font-semibold hover:bg-[#c5b39c] dark:hover:bg-gray-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;