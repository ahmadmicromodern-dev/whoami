import React from 'react';
import PropTypes from 'prop-types';
import projectsData from './Portfolio.json';
import { CiWarning } from "react-icons/ci";

const Portfolio = () => {
    const addImageFallback = (event) => {
        event.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
        event.currentTarget.onerror = null; // Prevent infinite loop if placeholder fails
    };

    return (<section className="py-12 px-4 md:px-8 bg-gray-50" id="portfolio">
        <div className="max-w-6xl mx-auto">
            {/* Header Section */}
            <div className="mb-12 text-center">
                <h3 className="text-4xl font-bold text-gray-900 mb-3">Portfolio</h3>
                <p className="max-w-2xl mx-auto text-gray-600">
                    The projects may not be perfect from your point of view, but I make them more perfect every day
                </p>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {projectsData.projects.map((project) => (
                    <ProjectCard key={project.id || project.title} project={project} onError={addImageFallback}/>))}
            </div>

            {/* CTA Button */}
            <div className="mt-12 text-center">
                <a
                    href="/index2"
                    className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                    View all projects
                </a>
            </div>
        </div>
    </section>);
};

// Extracted ProjectCard as a separate component for better reusability
const ProjectCard = ({project, onError}) => {
    return (<div
        className="group border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300 overflow-hidden bg-white">
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                onError={onError}
            />
        </a>

        <div className="p-5">
            <h5 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h5>

            {project.warning && (<div className="text-red-600 font-medium mb-3 flex items-center">
                <CiWarning className="w-5 h-5 mr-1"  />
                {project.warning}
            </div>)}

            <div className="mt-4">
                <a
                    href={project.repo}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View Source
                    <CiWarning className="w-5 h-5 mr-1"  />
                </a>
            </div>
        </div>
    </div>);
};

ProjectCard.propTypes = {
    project: PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        repo: PropTypes.string.isRequired,
        warning: PropTypes.string,
    }).isRequired, onError: PropTypes.func.isRequired,
};

export default Portfolio;