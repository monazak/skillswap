// User Types
export interface User {
  id: string;
  name: string;
  email?: string;
  avatar: string;
  bio: string;
  skillsOffered: string[];
  skillsWanted: string[];
  rating: number;
  completedSessions: number;
  matchPercentage?: number;
  createdAt?: string;
  updatedAt?: string;
}

// Session Types
export type SessionStatus = 'upcoming' | 'completed' | 'cancelled' | 'in-progress';

export interface Session {
  id: string;
  with: User;
  skill: string;
  date: string;
  time: string;
  duration: number;
  status: SessionStatus;
  createdAt?: string;
  updatedAt?: string;
}

// Chat Types
export interface Chat {
  id: string;
  user: User;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

export interface Message {
  id: string;
  chatId: string;
  senderId: string;
  receiverId: string;
  text: string;
  timestamp: string;
  read: boolean;
}

// Notification Types
export type NotificationType = 'match' | 'session' | 'review' | 'credit' | 'message';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message: string;
  timestamp: string;
  read: boolean;
  actionUrl?: string;
}

// Review Types
export interface Review {
  id: string;
  fromUserId: string;
  toUserId: string;
  sessionId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

// Booking Types
export interface Booking {
  userId: string;
  skill: string;
  date: string;
  time: string;
  duration: number;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

// Auth Types
export interface LoginCredentials {
  email: string;
  password: string;
}

export interface SignupData {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Filter Types
export interface UserFilters {
  skillsOffered?: string[];
  availability?: string[];
  rating?: number;
  sortBy?: 'match' | 'rating' | 'sessions';
}
