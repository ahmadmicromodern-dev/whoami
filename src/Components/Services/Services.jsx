import React from 'react';
import PropTypes from 'prop-types';
import { FiCode, FiLayers, FiBookOpen } from 'react-icons/fi';

const servicesData = [
    {
        id: 1,
        title: "Custom Template Implementation",
        description: "Professional implementation of your design templates with pixel-perfect accuracy, optimized for performance and accessibility across all devices.",
        icon: <FiLayers className="w-6 h-6" />,
        highlights: [
            "HTML5/CSS3 Implementation",
            "Mobile-First Approach",
            "Cross-Browser Compatibility",
            "Performance Optimization"
        ]
    },
    {
        id: 2,
        title: "React & NextJS Development",
        description: "Enterprise-grade application development using modern React ecosystem with focus on scalability, maintainability and security best practices.",
        icon: <FiCode className="w-6 h-6" />,
        highlights: [
            "SSR/SSG with Next.js",
            "State Management",
            "API Integration",
            "Testing (Jest/Cypress)"
        ]
    },
    {
        id: 3,
        title: "Technical Mentorship",
        description: "Personalized 1:1 coaching sessions to accelerate your learning curve in modern frontend development and software engineering principles.",
        icon: <FiBookOpen className="w-6 h-6" />,
        highlights: [
            "Career Roadmapping",
            "Code Reviews",
            "Project Architecture",
            "Interview Preparation"
        ]
    }
];

function Services() {
    return (
        <section
            className="py-20 px-4 md:px-8 bg-gradient-to-b from-gray-50 to-white"
            id="services"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                        Professional Services
                        <span className="text-blue-600 ml-2">.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Tailored solutions to bring your digital vision to life
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl
              border border-gray-100 overflow-hidden transition-all duration-300
              hover:-translate-y-2"
                        >
                            {/* Service Header */}
                            <div className="p-6">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="p-3 bg-blue-100 text-blue-600 rounded-lg">
                                        {service.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900">
                                        {service.title}
                                    </h3>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 mb-6">
                                    {service.description}
                                </p>

                                {/* Highlights */}
                                <ul className="space-y-2">
                                    {service.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="text-blue-500 mt-1">•</span>
                                            <span className="text-gray-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Hover Effect */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-xl pointer-events-none transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

Services.propTypes = {
    servicesData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            icon: PropTypes.element.isRequired,
            highlights: PropTypes.arrayOf(PropTypes.string).isRequired
        })
    )
};

export default Services;