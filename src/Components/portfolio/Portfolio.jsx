

import React from 'react';
import projectsData from './Portfolio.json';

const Portfolio = () => {
    const addImageFallback = (event) => {
        event.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
    };

    return (<section className="py-12 px-4 md:px-8" id="portfolio">
        <div className="max-w-6xl mx-auto">
            <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-800 mb-2">Portfolio</h3>
                <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
            The projects may not be perfect from your point of view, but I make them more perfect every day
          </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {projectsData.projects.map((project, index) => (<div
                    key={index}
                    className="group border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-200 relative overflow-hidden bg-white">
                    <a href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 object-cover rounded-t-lg transform group-hover:scale-105 transition-transform duration-300"
                            loading="lazy"
                            onError={addImageFallback}
                        />
                    </a>

                    <div className="p-4">
                        <h5 className="text-lg font-semibold mb-2 text-gray-800">
                            {project.title}
                        </h5>

                        {project.warning && (<h3 className="text-red-500 font-bold mb-2">
                            {project.warning}
                        </h3>)}

                        {project.description && (<p className="text-gray-600 text-sm mb-3">
                            {project.description}
                        </p>)}

                        {project.tags.length > 0 && (<div className="flex flex-wrap gap-2 mb-3">
                            {project.tags.map((tag, tagIndex) => (<span
                                key={tagIndex}
                                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>))}
                        </div>)}

                        <div className="mt-2">
                            <a
                                href={project.repo}
                                className="inline-flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
                                target="_blank"
                                rel="noopener noreferrer">
                                View Source
                                <svg
                                    className="w-4 h-4 ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>))}
            </div>

            <div className="mt-8 text-center">
                <a
                    href="/index2"
                    className="inline-block bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors duration-300 transform hover:-translate-y-1">
                    View all projects
                </a>
            </div>
        </div>
    </section>);
};

export default Portfolio;