/**
 * Application Constants
 * Centralized configuration and constant values
 */

// Company Information
export const COMPANY = {
  name: 'IDSID Pvt. Ltd.',
  shortName: 'IDSID',
  website: 'https://idsid.com',
  email: 'support@idsid.com',
  phone: '+91-XXXXXXXXXX',
} as const;

// Application Info
export const APP = {
  name: 'MIT ERP',
  version: '1.0.0',
  description: 'Enterprise Resource Planning System',
  tagline: 'Enterprise Solution Provider',
} as const;

// Form Validation
export const VALIDATION = {
  USERNAME: {
    MIN_LENGTH: 3,
    MAX_LENGTH: 50,
  },
  PASSWORD: {
    MIN_LENGTH: 6,
    MAX_LENGTH: 128,
  },
  EMAIL: {
    PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  },
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  USERNAME_REQUIRED: 'User ID is required',
  USERNAME_TOO_SHORT: `User ID must be at least ${VALIDATION.USERNAME.MIN_LENGTH} characters long`,
  USERNAME_TOO_LONG: `User ID cannot exceed ${VALIDATION.USERNAME.MAX_LENGTH} characters`,
  PASSWORD_REQUIRED: 'Password is required',
  PASSWORD_TOO_SHORT: `Password must be at least ${VALIDATION.PASSWORD.MIN_LENGTH} characters long`,
  PASSWORD_TOO_LONG: `Password cannot exceed ${VALIDATION.PASSWORD.MAX_LENGTH} characters`,
  INVALID_CREDENTIALS: 'Invalid username or password',
  ACCOUNT_INACTIVE: 'This account has been deactivated',
  UNEXPECTED_ERROR: 'An unexpected error occurred. Please try again.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Login successful',
  LOGOUT_SUCCESS: 'Logged out successfully',
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/api/auth/login',
    LOGOUT: '/api/auth/logout',
    REGISTER: '/api/auth/register',
    REFRESH: '/api/auth/refresh',
    PROFILE: '/api/auth/profile',
  },
  USERS: {
    LIST: '/api/users',
    GET: '/api/users/:id',
    CREATE: '/api/users',
    UPDATE: '/api/users/:id',
    DELETE: '/api/users/:id',
  },
} as const;

// User Roles
export const USER_ROLES = {
  ADMIN: 'admin',
  USER: 'user',
  MANAGER: 'manager',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  USER: 'user',
  TOKEN: 'auth_token',
  REFRESH_TOKEN: 'refresh_token',
  PREFERENCES: 'user_preferences',
} as const;

// Routes
export const ROUTES = {
  LOGIN: '/',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  SETTINGS: '/settings',
  LOGOUT: '/logout',
} as const;

// Timing (in milliseconds)
export const TIMING = {
  API_TIMEOUT: 30000, // 30 seconds
  DEBOUNCE: 300,
  SESSION_TIMEOUT: 15 * 60 * 1000, // 15 minutes
  TOKEN_REFRESH_INTERVAL: 5 * 60 * 1000, // 5 minutes
} as const;

// Feature Flags
export const FEATURE_FLAGS = {
  ENABLE_REGISTRATION: false,
  ENABLE_SOCIAL_LOGIN: false,
  ENABLE_TWO_FACTOR: false,
  ENABLE_REMEMBER_ME: true,
} as const;
