// Export all services
export { authService } from './auth.service';
export { usersService } from './users.service';
export { sessionsService } from './sessions.service';
export { apiClient } from './client';

// Export notification service
import { apiClient } from './client';
import type { Notification, ApiResponse } from '../../types';

export const notificationsService = {
  async getNotifications(): Promise<ApiResponse<Notification[]>> {
    return apiClient.get('/notifications');
  },

  async markAsRead(id: string): Promise<ApiResponse<Notification>> {
    return apiClient.patch(`/notifications/${id}/read`);
  },

  async markAllAsRead(): Promise<ApiResponse<void>> {
    return apiClient.post('/notifications/read-all');
  },

  async deleteNotification(id: string): Promise<ApiResponse<void>> {
    return apiClient.delete(`/notifications/${id}`);
  },
};

// Export chat service
import type { Chat, Message } from '../../types';

export const chatService = {
  async getChats(): Promise<ApiResponse<Chat[]>> {
    return apiClient.get('/chats');
  },

  async getChatById(id: string): Promise<ApiResponse<Chat>> {
    return apiClient.get(`/chats/${id}`);
  },

  async getMessages(chatId: string): Promise<ApiResponse<Message[]>> {
    return apiClient.get(`/chats/${chatId}/messages`);
  },

  async sendMessage(chatId: string, text: string): Promise<ApiResponse<Message>> {
    return apiClient.post(`/chats/${chatId}/messages`, { text });
  },

  async markMessagesAsRead(chatId: string): Promise<ApiResponse<void>> {
    return apiClient.post(`/chats/${chatId}/read`);
  },
};
