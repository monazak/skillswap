// Export all hooks
export { useApi, useMutation } from './useApi';
export { useAuth, AuthProvider } from './useAuth';

// Specific data hooks
import { useApi } from './useApi';
import { usersService, sessionsService, notificationsService, chatService } from '../services/api';
import type { UserFilters } from '../types';

/**
 * Hook to fetch users with optional filters
 */
export function useUsers(filters?: UserFilters, page = 1, limit = 10) {
  return useApi(() => usersService.getUsers(filters, page, limit));
}

/**
 * Hook to fetch a single user by ID
 */
export function useUser(id: string) {
  return useApi(() => usersService.getUserById(id));
}

/**
 * Hook to fetch user matches
 */
export function useMatches(userId: string) {
  return useApi(() => usersService.getMatches(userId));
}

/**
 * Hook to fetch sessions
 */
export function useSessions(status?: string) {
  return useApi(() => sessionsService.getSessions(status));
}

/**
 * Hook to fetch upcoming sessions
 */
export function useUpcomingSessions() {
  return useApi(() => sessionsService.getUpcomingSessions());
}

/**
 * Hook to fetch a single session
 */
export function useSession(id: string) {
  return useApi(() => sessionsService.getSessionById(id));
}

/**
 * Hook to fetch notifications
 */
export function useNotifications() {
  return useApi(() => notificationsService.getNotifications());
}

/**
 * Hook to fetch chats
 */
export function useChats() {
  return useApi(() => chatService.getChats());
}

/**
 * Hook to fetch messages for a chat
 */
export function useMessages(chatId: string) {
  return useApi(() => chatService.getMessages(chatId));
}
