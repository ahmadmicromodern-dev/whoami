/**
 * Backend-Integrated Banner Component
 * کامپوننت بنر یکپارچه با بک‌اند
 */

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useGet } from '../../hooks/useApi.js';
import profileService from '../../services/profileService.js';
import { FaGithub, FaTelegram, FaAngleDown, FaGlobe } from 'react-icons/fa';

const iconComponents = {
  FaGithub: FaGithub,
  FaTelegram: FaTelegram,
  FaGlobe: FaGlobe
};

function BackendBanner() {
  // Fetch profile data from backend
  const { data: profileData, loading, error, refetch } = useGet('/profile');

  // Fallback data structure
  const fallbackData = {
    name: "Ahmad Rasouli",
    jobTitle: "Front-End Developer & Cybersecurity Specialist",
    profileImage: "./images/my3.jpg",
    backgroundImage: "./images/fotis.jpg",
    socialLinks: [
      {
        name: "GitHub",
        url: "https://github.com/Darkcode-it",
        icon: "FaGithub"
      },
      {
        name: "Telegram",
        url: "https://t.me/Darkcodeit",
        icon: "FaTelegram"
      },
      {
        name: "Website",
        url: "https://ahmad-rasouli-sgd5qfa.gamma.site/",
        icon: "FaGlobe"
      }
    ]
  };

  // Use backend data or fallback
  const data = profileData || fallbackData;
  const { name, jobTitle, profileImage, socialLinks } = data;

  // Loading state
  if (loading) {
    return (
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-center text-center space-y-8">
            <div className="w-64 h-64 rounded-full bg-gray-200 animate-pulse"></div>
            <div className="space-y-4">
              <div className="h-12 w-96 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-8 w-80 bg-gray-200 rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.warn('Failed to load profile data from backend, using fallback:', error);
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center space-y-8">
          {/* Profile Image */}
          <div
            className="relative group w-64 h-64 rounded-full border-4 border-blue-500/20 p-2
            shadow-2xl transition-all duration-500 hover:border-blue-500/50"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              src={profileImage}
              alt={name}
              className="w-full h-full rounded-full object-cover transform
              group-hover:scale-105 transition-transform"
              onError={(e) => {
                e.target.src = './images/my3.jpg'; // Fallback image
              }}
            />
          </div>

          {/* Main Text */}
          <div className="space-y-6" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400
            to-cyan-400 bg-clip-text text-transparent">
              {name}
            </h1>
            <p className="text-2xl md:text-3xl font-medium text-gray-700">
              {jobTitle}
            </p>

            {/* Social Links */}
            <div className="flex justify-center space-x-6">
              {socialLinks?.map((link) => {
                const Icon = iconComponents[link.icon];
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
                    aria-label={`Visit ${link.name}`}
                  >
                    <Icon className="w-8 h-8"/>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Scroll Down */}
          <a
            href="#about"
            className="animate-bounce-slow inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-500/20 hover:bg-blue-500/30 transition-colors"
            aria-label="Scroll to next section"
          >
            <FaAngleDown className="w-6 h-6 text-blue-400"/>
          </a>
        </div>
      </div>
    </section>
  );
}

BackendBanner.propTypes = {
  // PropTypes can be added if needed for additional props
};

export default BackendBanner;
