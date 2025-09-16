/**
 * API Configuration for Backend Integration
 * تنظیمات API برای اتصال به بک‌اند
 */

// Base API Configuration
export const API_CONFIG = {
  // Base URL for API requests
  BASE_URL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:3001/api',
  
  // API Version
  VERSION: 'v1',
  
  // Request timeout in milliseconds
  TIMEOUT: 10000,
  
  // Default headers
  DEFAULT_HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  
  // Authentication
  AUTH: {
    TOKEN_KEY: 'auth_token',
    REFRESH_TOKEN_KEY: 'refresh_token',
  },
  
  // Endpoints
  ENDPOINTS: {
    // Profile & User Data
    PROFILE: '/profile',
    USER: '/user',
    
    // Portfolio & Projects
    PORTFOLIO: '/portfolio',
    PROJECTS: '/projects',
    
    // Skills & Experience
    SKILLS: '/skills',
    EXPERIENCE: '/experience',
    EDUCATION: '/education',
    CERTIFICATIONS: '/certifications',
    
    // Services
    SERVICES: '/services',
    
    // Contact & Communication
    CONTACT: '/contact',
    MESSAGES: '/messages',
    
    // Analytics & Statistics
    ANALYTICS: '/analytics',
    STATS: '/stats',
    
    // File Upload
    UPLOAD: '/upload',
    FILES: '/files',
    
    // Settings & Configuration
    SETTINGS: '/settings',
    CONFIG: '/config',
  }
};

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
};

// API Response Types
export const API_RESPONSE_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

// Request Methods
export const REQUEST_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE',
};

// Content Types
export const CONTENT_TYPES = {
  JSON: 'application/json',
  FORM_DATA: 'multipart/form-data',
  URL_ENCODED: 'application/x-www-form-urlencoded',
};

export default API_CONFIG;
