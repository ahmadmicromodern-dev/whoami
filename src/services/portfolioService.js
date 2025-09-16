/**
 * Portfolio Service - API calls for portfolio data
 * سرویس پورتفولیو - فراخوانی‌های API برای داده‌های پورتفولیو
 */

import apiService from './apiService.js';
import { API_CONFIG } from '../config/api.js';

class PortfolioService {
  /**
   * Get all portfolio projects
   */
  async getProjects(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.PORTFOLIO, params);
  }

  /**
   * Get single project by ID
   */
  async getProject(projectId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.PROJECTS}/${projectId}`);
  }

  /**
   * Create new project
   */
  async createProject(projectData) {
    return apiService.post(API_CONFIG.ENDPOINTS.PROJECTS, projectData);
  }

  /**
   * Update project
   */
  async updateProject(projectId, projectData) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.PROJECTS}/${projectId}`, projectData);
  }

  /**
   * Delete project
   */
  async deleteProject(projectId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.PROJECTS}/${projectId}`);
  }

  /**
   * Upload project image
   */
  async uploadProjectImage(projectId, imageFile) {
    return apiService.uploadFile(
      `${API_CONFIG.ENDPOINTS.PROJECTS}/${projectId}/image`,
      imageFile
    );
  }

  /**
   * Get project statistics
   */
  async getProjectStats(projectId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.PROJECTS}/${projectId}/stats`);
  }
}

export default new PortfolioService();
