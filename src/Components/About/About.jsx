import React from 'react';
import PropTypes from 'prop-types';
import { FaDownload } from 'react-icons/fa6';

const aboutContent = {
    title: "Discover My Journey",
    description: [
        "Seasoned front-end architect with 2+ years of experience in crafting high-performance web applications. Specialized in React ecosystem and modern JavaScript practices, with a strong focus on accessibility and performance optimization.",
        "Passionate about creating immersive digital experiences that blend technical excellence with artistic vision. Continuously exploring emerging technologies to deliver cutting-edge solutions.",
        "Open-source contributor and technical writer, actively engaged in knowledge sharing through blog posts and workshop facilitation."
    ],
    resume: {
        url: "https://darkcode-it.github.io/whoami/",
        label: "Download Professional Profile"
    }
};

function About() {
    return (
        <section
            className="relative py-20 px-4 md:px-8 "
            id="about"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="mb-16 text-center">
                    <h2 className="text-4xl font-extrabold mb-4 ">
                        {aboutContent.title}
                        <span className="text-blue-600 ml-2">.</span>
                    </h2>
                </div>

                {/* Content Grid */}
                <div className="grid lg:grid-cols-3 gap-12 items-start">
                    {/* Text Content */}
                    <div className="lg:col-span-2 space-y-6">
                        {aboutContent.description.map((paragraph, index) => (
                            <p
                                key={`para-${index}`}
                                className="text-lg leading-relaxed "
                            >
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Download Card */}
                    <div className="rounded-2xl shadow-xl p-8 border border-gray-100 hover:shadow-2xl transition-shadow">
                        <div className="text-center">
                            <div className="mb-6">
                <span className="inline-block bg-blue-100 text-blue-600 p-4 rounded-2xl">
                  <FaDownload className="w-8 h-8" />
                </span>
                            </div>
                            <h3 className="text-xl font-bold  mb-4 ">
                                Technical Portfolio
                            </h3>
                            <a
                                href={aboutContent.resume.url}
                                download
                                className="inline-flex items-center justify-center w-full bg-gray-800 hover:bg-gray-700 text-white px-6
                                 py-4 rounded-xl transition-all duration-300 group"
                                aria-label={aboutContent.resume.label}
                            >
                                <span className="font-medium">{aboutContent.resume.label}</span>
                                <FaDownload className="ml-3 w-5 h-5 transition-transform group-hover:translate-y-1" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-20 max-w-7xl mx-auto">
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                </div>
            </div>
        </section>
    );
}

About.propTypes = {
    aboutContent: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.arrayOf(PropTypes.string).isRequired,
        resume: PropTypes.shape({
            url: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired
        }).isRequired
    })
};

export default About;