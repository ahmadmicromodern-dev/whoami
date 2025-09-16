/**
 * API Service for Backend Communication
 * سرویس API برای ارتباط با بک‌اند
 */

import { API_CONFIG, HTTP_STATUS, REQUEST_METHODS, CONTENT_TYPES } from '../config/api.js';

class ApiService {
  constructor() {
    this.baseURL = API_CONFIG.BASE_URL;
    this.timeout = API_CONFIG.TIMEOUT;
    this.defaultHeaders = { ...API_CONFIG.DEFAULT_HEADERS };
  }

  /**
   * Get authentication token from localStorage
   */
  getAuthToken() {
    return localStorage.getItem(API_CONFIG.AUTH.TOKEN_KEY);
  }

  /**
   * Set authentication token
   */
  setAuthToken(token) {
    localStorage.setItem(API_CONFIG.AUTH.TOKEN_KEY, token);
  }

  /**
   * Remove authentication token
   */
  removeAuthToken() {
    localStorage.removeItem(API_CONFIG.AUTH.TOKEN_KEY);
    localStorage.removeItem(API_CONFIG.AUTH.REFRESH_TOKEN_KEY);
  }

  /**
   * Get headers with authentication
   */
  getHeaders(customHeaders = {}) {
    const token = this.getAuthToken();
    const headers = { ...this.defaultHeaders, ...customHeaders };
    
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }
    
    return headers;
  }

  /**
   * Build full URL
   */
  buildURL(endpoint, params = {}) {
    const url = new URL(`${this.baseURL}${endpoint}`);
    
    // Add query parameters
    Object.keys(params).forEach(key => {
      if (params[key] !== undefined && params[key] !== null) {
        url.searchParams.append(key, params[key]);
      }
    });
    
    return url.toString();
  }

  /**
   * Handle API response
   */
  async handleResponse(response) {
    const contentType = response.headers.get('content-type');
    
    if (!response.ok) {
      const errorData = contentType?.includes('application/json') 
        ? await response.json() 
        : { message: response.statusText };
      
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    if (response.status === HTTP_STATUS.NO_CONTENT) {
      return null;
    }
    
    return contentType?.includes('application/json') 
      ? await response.json() 
      : await response.text();
  }

  /**
   * Make HTTP request
   */
  async request(method, endpoint, data = null, options = {}) {
    const {
      headers = {},
      params = {},
      timeout = this.timeout,
      signal = null
    } = options;

    const url = this.buildURL(endpoint, params);
    const requestHeaders = this.getHeaders(headers);

    const requestOptions = {
      method,
      headers: requestHeaders,
      signal: signal || AbortSignal.timeout(timeout),
    };

    // Add body for non-GET requests
    if (data && method !== REQUEST_METHODS.GET) {
      if (data instanceof FormData) {
        // Remove Content-Type header for FormData (browser will set it with boundary)
        delete requestHeaders['Content-Type'];
        requestOptions.body = data;
      } else {
        requestOptions.body = JSON.stringify(data);
      }
    }

    try {
      const response = await fetch(url, requestOptions);
      return await this.handleResponse(response);
    } catch (error) {
      if (error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  /**
   * GET request
   */
  async get(endpoint, params = {}, options = {}) {
    return this.request(REQUEST_METHODS.GET, endpoint, null, { ...options, params });
  }

  /**
   * POST request
   */
  async post(endpoint, data = null, options = {}) {
    return this.request(REQUEST_METHODS.POST, endpoint, data, options);
  }

  /**
   * PUT request
   */
  async put(endpoint, data = null, options = {}) {
    return this.request(REQUEST_METHODS.PUT, endpoint, data, options);
  }

  /**
   * PATCH request
   */
  async patch(endpoint, data = null, options = {}) {
    return this.request(REQUEST_METHODS.PATCH, endpoint, data, options);
  }

  /**
   * DELETE request
   */
  async delete(endpoint, options = {}) {
    return this.request(REQUEST_METHODS.DELETE, endpoint, null, options);
  }

  /**
   * Upload file
   */
  async uploadFile(endpoint, file, additionalData = {}) {
    const formData = new FormData();
    formData.append('file', file);
    
    // Add additional data
    Object.keys(additionalData).forEach(key => {
      formData.append(key, additionalData[key]);
    });

    return this.post(endpoint, formData, {
      headers: {
        // Don't set Content-Type for FormData
      }
    });
  }

  /**
   * Download file
   */
  async downloadFile(endpoint, filename = 'download') {
    const response = await fetch(this.buildURL(endpoint), {
      headers: this.getHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Download failed: ${response.statusText}`);
    }

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }
}

// Create singleton instance
const apiService = new ApiService();

export default apiService;
