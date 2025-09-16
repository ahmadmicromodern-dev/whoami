/**
 * Skills Service - API calls for skills and experience data
 * سرویس مهارت‌ها - فراخوانی‌های API برای داده‌های مهارت‌ها و تجربیات
 */

import apiService from './apiService.js';
import { API_CONFIG } from '../config/api.js';

class SkillsService {
  /**
   * Get all skills
   */
  async getSkills(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.SKILLS, params);
  }

  /**
   * Get skill by ID
   */
  async getSkill(skillId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.SKILLS}/${skillId}`);
  }

  /**
   * Create new skill
   */
  async createSkill(skillData) {
    return apiService.post(API_CONFIG.ENDPOINTS.SKILLS, skillData);
  }

  /**
   * Update skill
   */
  async updateSkill(skillId, skillData) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.SKILLS}/${skillId}`, skillData);
  }

  /**
   * Delete skill
   */
  async deleteSkill(skillId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.SKILLS}/${skillId}`);
  }

  /**
   * Get experience data
   */
  async getExperience(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.EXPERIENCE, params);
  }

  /**
   * Get single experience entry
   */
  async getExperienceEntry(experienceId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.EXPERIENCE}/${experienceId}`);
  }

  /**
   * Create experience entry
   */
  async createExperience(experienceData) {
    return apiService.post(API_CONFIG.ENDPOINTS.EXPERIENCE, experienceData);
  }

  /**
   * Update experience entry
   */
  async updateExperience(experienceId, experienceData) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.EXPERIENCE}/${experienceId}`, experienceData);
  }

  /**
   * Delete experience entry
   */
  async deleteExperience(experienceId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.EXPERIENCE}/${experienceId}`);
  }

  /**
   * Get education data
   */
  async getEducation(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.EDUCATION, params);
  }

  /**
   * Get single education entry
   */
  async getEducationEntry(educationId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.EDUCATION}/${educationId}`);
  }

  /**
   * Create education entry
   */
  async createEducation(educationData) {
    return apiService.post(API_CONFIG.ENDPOINTS.EDUCATION, educationData);
  }

  /**
   * Update education entry
   */
  async updateEducation(educationId, educationData) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.EDUCATION}/${educationId}`, educationData);
  }

  /**
   * Delete education entry
   */
  async deleteEducation(educationId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.EDUCATION}/${educationId}`);
  }

  /**
   * Get certifications
   */
  async getCertifications(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.CERTIFICATIONS, params);
  }

  /**
   * Get single certification
   */
  async getCertification(certificationId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.CERTIFICATIONS}/${certificationId}`);
  }

  /**
   * Create certification
   */
  async createCertification(certificationData) {
    return apiService.post(API_CONFIG.ENDPOINTS.CERTIFICATIONS, certificationData);
  }

  /**
   * Update certification
   */
  async updateCertification(certificationId, certificationData) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.CERTIFICATIONS}/${certificationId}`, certificationData);
  }

  /**
   * Delete certification
   */
  async deleteCertification(certificationId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.CERTIFICATIONS}/${certificationId}`);
  }

  /**
   * Upload certification image
   */
  async uploadCertificationImage(certificationId, imageFile) {
    return apiService.uploadFile(
      `${API_CONFIG.ENDPOINTS.CERTIFICATIONS}/${certificationId}/image`,
      imageFile
    );
  }
}

export default new SkillsService();
