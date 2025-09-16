/**
 * Backend-Integrated Contact Component
 * کامپوننت تماس یکپارچه با بک‌اند
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { usePost } from '../../hooks/useApi.js';
import contactService from '../../services/contactService.js';
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import { MdMarkEmailUnread } from "react-icons/md";

function BackendContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    phone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Use the contact service hook
  const { post: sendMessage, loading, error } = usePost('/contact');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await sendMessage(formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        phone: ''
      });
    } catch (error) {
      setSubmitStatus('error');
      console.error('Failed to send message:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="py-12 px-4 md:px-8 bg-white" id="contact" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8 text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-2">Get In Touch</h3>
            <p className="text-gray-600">I'm always open to new opportunities and collaborations</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <FaLocationDot className="text-blue-600 text-xl"/>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">Address</h5>
                  <p className="text-gray-600">Tehran, Iran</p>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-green-600 text-xl"/>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">Phone</h5>
                  <a href="tel:+989123456789"
                     className="text-gray-600 hover:text-blue-600 transition-colors">
                    +98 912 345 6789
                  </a>
                </div>
              </div>

              <div className="flex items-start p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <MdMarkEmailUnread className="text-purple-600 text-xl"/>
                </div>
                <div>
                  <h5 className="text-lg font-semibold text-gray-800 mb-1">Email</h5>
                  <a
                    href="mailto:darkcodeit@protonmail.com"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    darkcodeit@protonmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-6">Send me a message</h4>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+98 912 345 6789"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell me about your project or question..."
                  />
                </div>

                {/* Submit Status Messages */}
                {submitStatus === 'success' && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    Failed to send message. Please try again or contact me directly.
                  </div>
                )}

                {error && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    Error: {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 
                           text-white font-medium py-3 px-6 rounded-md transition-all duration-300 
                           disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg"
                >
                  {loading || isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

BackendContact.propTypes = {
  // PropTypes can be added if needed for additional props
};

export default BackendContact;
