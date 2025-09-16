/**
 * Services Service - API calls for professional services data
 * سرویس خدمات - فراخوانی‌های API برای داده‌های خدمات حرفه‌ای
 */

import apiService from './apiService.js';
import { API_CONFIG } from '../config/api.js';

class ServicesService {
  /**
   * Get all services
   */
  async getServices(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.SERVICES, params);
  }

  /**
   * Get single service
   */
  async getService(serviceId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}`);
  }

  /**
   * Create new service
   */
  async createService(serviceData) {
    return apiService.post(API_CONFIG.ENDPOINTS.SERVICES, serviceData);
  }

  /**
   * Update service
   */
  async updateService(serviceId, serviceData) {
    return apiService.put(`${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}`, serviceData);
  }

  /**
   * Delete service
   */
  async deleteService(serviceId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}`);
  }

  /**
   * Get service categories
   */
  async getServiceCategories() {
    return apiService.get(`${API_CONFIG.ENDPOINTS.SERVICES}/categories`);
  }

  /**
   * Get services by category
   */
  async getServicesByCategory(categoryId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.SERVICES}/category/${categoryId}`);
  }

  /**
   * Upload service icon
   */
  async uploadServiceIcon(serviceId, iconFile) {
    return apiService.uploadFile(
      `${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}/icon`,
      iconFile
    );
  }

  /**
   * Get service statistics
   */
  async getServiceStats(serviceId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}/stats`);
  }

  /**
   * Request service quote
   */
  async requestServiceQuote(serviceId, quoteData) {
    return apiService.post(`${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}/quote`, quoteData);
  }

  /**
   * Get service quotes (admin only)
   */
  async getServiceQuotes(serviceId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.SERVICES}/${serviceId}/quotes`);
  }
}

export default new ServicesService();
