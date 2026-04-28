// Application Constants

// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api',
  TIMEOUT: 30000, // 30 seconds
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
} as const;

// Auth Configuration
export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  USER_KEY: 'user',
  TOKEN_EXPIRY_KEY: 'token_expiry',
  REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 minutes before expiry
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
} as const;

// Session Configuration
export const SESSION_CONFIG = {
  MIN_DURATION: 1, // hours
  MAX_DURATION: 4, // hours
  DEFAULT_DURATION: 1, // hours
  BOOKING_ADVANCE_DAYS: 30, // days
} as const;

// Credits System
export const CREDITS_CONFIG = {
  INITIAL_CREDITS: 3,
  CREDIT_PER_HOUR: 1,
  MIN_BALANCE: 0,
} as const;

// File Upload
export const UPLOAD_CONFIG = {
  MAX_FILE_SIZE: 2 * 1024 * 1024, // 2MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  MAX_IMAGES: 5,
} as const;

// Validation
export const VALIDATION = {
  MIN_PASSWORD_LENGTH: 8,
  MAX_PASSWORD_LENGTH: 128,
  MIN_BIO_LENGTH: 10,
  MAX_BIO_LENGTH: 500,
  MIN_SKILL_LENGTH: 2,
  MAX_SKILL_LENGTH: 50,
  MAX_SKILLS_OFFERED: 10,
  MAX_SKILLS_WANTED: 10,
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  HOW_IT_WORKS: '/how-it-works',
  LOGIN: '/login',
  SIGNUP: '/signup',
  ONBOARDING: '/onboarding',
  DASHBOARD: '/app',
  EXPLORE: '/app/explore',
  PROFILE: '/app/profile',
  USER_PROFILE: '/app/profile/:userId',
  SETTINGS: '/app/settings',
  CHAT: '/app/chat',
  CHAT_WITH_USER: '/app/chat/:userId',
  NOTIFICATIONS: '/app/notifications',
  BOOKING: '/app/book/:userId',
  SESSION: '/app/session/:sessionId',
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER: 'user',
  THEME: 'theme',
  ONBOARDING_COMPLETED: 'onboarding_completed',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'You need to be logged in to access this resource.',
  FORBIDDEN: 'You do not have permission to access this resource.',
  NOT_FOUND: 'The requested resource was not found.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  SESSION_EXPIRED: 'Your session has expired. Please log in again.',
  UNKNOWN_ERROR: 'An unexpected error occurred.',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  LOGIN_SUCCESS: 'Logged in successfully!',
  SIGNUP_SUCCESS: 'Account created successfully!',
  LOGOUT_SUCCESS: 'Logged out successfully.',
  PROFILE_UPDATED: 'Profile updated successfully.',
  SESSION_BOOKED: 'Session booked successfully!',
  SESSION_CANCELLED: 'Session cancelled.',
  MESSAGE_SENT: 'Message sent.',
  REVIEW_SUBMITTED: 'Review submitted. Thank you!',
} as const;

// Feature Flags (for gradual feature rollout)
export const FEATURES = {
  ENABLE_VIDEO_CALLS: true,
  ENABLE_REVIEWS: true,
  ENABLE_NOTIFICATIONS: true,
  ENABLE_CHAT: true,
  ENABLE_SEARCH: true,
} as const;

// Date/Time Formats
export const DATE_FORMATS = {
  SHORT: 'MMM d',
  LONG: 'MMMM d, yyyy',
  TIME: 'h:mm a',
  DATETIME: 'MMM d, yyyy h:mm a',
} as const;
