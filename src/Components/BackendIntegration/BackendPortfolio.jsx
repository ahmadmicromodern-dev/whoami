/**
 * Backend-Integrated Portfolio Component
 * کامپوننت پورتفولیو یکپارچه با بک‌اند
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useGet, usePost, usePut, useDelete } from '../../hooks/useApi.js';
import portfolioService from '../../services/portfolioService.js';
import { CiWarning } from "react-icons/ci";
import { useTranslation } from 'react-i18next';

const BackendPortfolio = () => {
  const { i18n } = useTranslation();
  const [editingProject, setEditingProject] = useState(null);

  // Fetch projects from backend
  const { 
    data: projectsData, 
    loading, 
    error, 
    refetch 
  } = useGet('/portfolio');

  // Hooks for CRUD operations
  const { post: createProject, loading: creating } = usePost('/projects');
  const { put: updateProject, loading: updating } = usePut('/projects');
  const { delete: deleteProject, loading: deleting } = useDelete('/projects');

  // Fallback data
  const fallbackData = {
    projects: [
      {
        id: "whoami",
        title: "WhoAmI Portfolio",
        image: "./images/is.png",
        link: "https://darkcode-it.github.io/whoami/",
        repo: "https://github.com/Darkcode-it/whoami",
        tags: ["React", "Tailwind", "Vite"],
        description: "Personal portfolio website built with React and Tailwind CSS"
      }
    ]
  };

  const portfolioData = projectsData || fallbackData;

  const addImageFallback = (event) => {
    event.currentTarget.src = 'https://via.placeholder.com/400x200?text=Image+Not+Found';
    event.currentTarget.onerror = null;
  };

  const handleCreateProject = async (projectData) => {
    try {
      await createProject(projectData);
      refetch(); // Refresh the list
    } catch (error) {
      console.error('Failed to create project:', error);
    }
  };

  const handleUpdateProject = async (projectId, projectData) => {
    try {
      await updateProject(`/${projectId}`, projectData);
      setEditingProject(null);
      refetch(); // Refresh the list
    } catch (error) {
      console.error('Failed to update project:', error);
    }
  };

  const handleDeleteProject = async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await deleteProject(`/${projectId}`);
        refetch(); // Refresh the list
      } catch (error) {
        console.error('Failed to delete project:', error);
      }
    }
  };

  // Loading state
  if (loading) {
    return (
      <section className="relative py-12 px-4 md:px-8" id="portfolio">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <div className="h-12 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
            <div className="h-6 w-96 bg-gray-200 rounded animate-pulse mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // Error state
  if (error) {
    console.warn('Failed to load portfolio data from backend, using fallback:', error);
  }

  return (
    <section className="relative py-12 px-4 md:px-8" id="portfolio" data-aos="fade-up">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-3">
            Portfolio
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 mt-4">
            The projects may not be perfect from your point of view, but I make them more perfect every day
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioData.projects?.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onError={addImageFallback}
              index={index}
              onEdit={setEditingProject}
              onDelete={handleDeleteProject}
              isEditing={editingProject === project.id}
              onUpdate={handleUpdateProject}
            />
          ))}
        </div>

        {/* Add New Project Button (Admin only) */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setEditingProject('new')}
            className="inline-block bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white
            px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1 mr-4"
          >
            Add New Project
          </button>
          <a
            href="/index2"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white
            px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            View all projects
          </a>
        </div>
      </div>
    </section>
  );
};

// Project Card Component
const ProjectCard = ({ 
  project, 
  onError, 
  index, 
  onEdit, 
  onDelete, 
  isEditing, 
  onUpdate 
}) => {
  const [editData, setEditData] = useState(project);

  const handleSave = () => {
    onUpdate(project.id, editData);
  };

  const handleCancel = () => {
    setEditData(project);
    onEdit(null);
  };

  if (isEditing) {
    return (
      <div className="group relative h-[400px]">
        <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-5 
                      shadow-md hover:shadow-xl transition-all duration-500 
                      hover:-translate-y-2 hover:bg-white/30 overflow-hidden h-full">
          <div className="space-y-4">
            <input
              type="text"
              value={editData.title}
              onChange={(e) => setEditData({...editData, title: e.target.value})}
              className="w-full p-2 border rounded"
              placeholder="Project Title"
            />
            <input
              type="text"
              value={editData.link}
              onChange={(e) => setEditData({...editData, link: e.target.value})}
              className="w-full p-2 border rounded"
              placeholder="Project Link"
            />
            <input
              type="text"
              value={editData.repo}
              onChange={(e) => setEditData({...editData, repo: e.target.value})}
              className="w-full p-2 border rounded"
              placeholder="Repository Link"
            />
            <textarea
              value={editData.description}
              onChange={(e) => setEditData({...editData, description: e.target.value})}
              className="w-full p-2 border rounded h-20"
              placeholder="Project Description"
            />
            <div className="flex gap-2">
              <button
                onClick={handleSave}
                className="flex-1 bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
              >
                Save
              </button>
              <button
                onClick={handleCancel}
                className="flex-1 bg-gray-600 text-white py-2 px-4 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="group relative h-[400px]"
      style={{
        animationDelay: `${index * 100}ms`
      }}
    >
      <div className="relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-xl p-5 
                    shadow-md hover:shadow-xl transition-all duration-500 
                    hover:-translate-y-2 hover:bg-white/30 overflow-hidden h-full">
        {/* Gradient Effect on Hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>

        <div className="relative z-10 flex flex-col h-full">
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="block flex-grow-0">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
              onError={onError}
            />
          </a>

          <div className="p-4 text-center flex-grow flex flex-col justify-between">
            <div>
              <h5 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-2">
                {project.title}
              </h5>

              {project.warning && (
                <div className="text-red-600 font-medium mb-3 flex items-center justify-center">
                  <CiWarning className="w-5 h-5 mr-1" />
                  {project.warning}
                </div>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <a
                href={project.repo}
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium
                transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Source
                <CiWarning className="w-5 h-5 mr-1" />
              </a>
              
              {/* Admin Controls */}
              <div className="flex gap-2 justify-center">
                <button
                  onClick={() => onEdit(project.id)}
                  className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(project.id)}
                  className="text-sm bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    repo: PropTypes.string.isRequired,
    warning: PropTypes.string,
  }).isRequired,
  onError: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  isEditing: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

export default BackendPortfolio;
