/**
 * Profile Service - API calls for user profile data
 * سرویس پروفایل - فراخوانی‌های API برای داده‌های پروفایل کاربر
 */

import apiService from './apiService.js';
import { API_CONFIG } from '../config/api.js';

class ProfileService {
  /**
   * Get user profile
   */
  async getProfile() {
    return apiService.get(API_CONFIG.ENDPOINTS.PROFILE);
  }

  /**
   * Update user profile
   */
  async updateProfile(profileData) {
    return apiService.put(API_CONFIG.ENDPOINTS.PROFILE, profileData);
  }

  /**
   * Upload profile image
   */
  async uploadProfileImage(imageFile) {
    return apiService.uploadFile(
      `${API_CONFIG.ENDPOINTS.PROFILE}/image`,
      imageFile
    );
  }

  /**
   * Get user statistics
   */
  async getUserStats() {
    return apiService.get(`${API_CONFIG.ENDPOINTS.USER}/stats`);
  }

  /**
   * Update social links
   */
  async updateSocialLinks(socialLinks) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.PROFILE}/social-links`, {
      socialLinks
    });
  }

  /**
   * Get user settings
   */
  async getSettings() {
    return apiService.get(API_CONFIG.ENDPOINTS.SETTINGS);
  }

  /**
   * Update user settings
   */
  async updateSettings(settings) {
    return apiService.put(API_CONFIG.ENDPOINTS.SETTINGS, settings);
  }
}

export default new ProfileService();
