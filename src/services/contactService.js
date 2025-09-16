/**
 * Contact Service - API calls for contact and messaging
 * سرویس تماس - فراخوانی‌های API برای تماس و پیام‌رسانی
 */

import apiService from './apiService.js';
import { API_CONFIG } from '../config/api.js';

class ContactService {
  /**
   * Send contact message
   */
  async sendMessage(messageData) {
    return apiService.post(API_CONFIG.ENDPOINTS.CONTACT, messageData);
  }

  /**
   * Get contact messages (admin only)
   */
  async getMessages(params = {}) {
    return apiService.get(API_CONFIG.ENDPOINTS.MESSAGES, params);
  }

  /**
   * Get single message
   */
  async getMessage(messageId) {
    return apiService.get(`${API_CONFIG.ENDPOINTS.MESSAGES}/${messageId}`);
  }

  /**
   * Mark message as read
   */
  async markMessageAsRead(messageId) {
    return apiService.patch(`${API_CONFIG.ENDPOINTS.MESSAGES}/${messageId}/read`);
  }

  /**
   * Delete message
   */
  async deleteMessage(messageId) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.MESSAGES}/${messageId}`);
  }

  /**
   * Reply to message
   */
  async replyToMessage(messageId, replyData) {
    return apiService.post(`${API_CONFIG.ENDPOINTS.MESSAGES}/${messageId}/reply`, replyData);
  }

  /**
   * Get contact statistics
   */
  async getContactStats() {
    return apiService.get(`${API_CONFIG.ENDPOINTS.CONTACT}/stats`);
  }

  /**
   * Subscribe to newsletter
   */
  async subscribeNewsletter(emailData) {
    return apiService.post(`${API_CONFIG.ENDPOINTS.CONTACT}/newsletter`, emailData);
  }

  /**
   * Unsubscribe from newsletter
   */
  async unsubscribeNewsletter(email) {
    return apiService.delete(`${API_CONFIG.ENDPOINTS.CONTACT}/newsletter`, {
      params: { email }
    });
  }
}

export default new ContactService();
