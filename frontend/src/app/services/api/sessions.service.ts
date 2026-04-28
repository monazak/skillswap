import { apiClient } from './client';
import type { Session, Booking, ApiResponse } from '../../types';

export const sessionsService = {
  async getSessions(status?: string): Promise<ApiResponse<Session[]>> {
    const params = status ? `?status=${status}` : '';
    return apiClient.get(`/sessions${params}`);
  },

  async getSessionById(id: string): Promise<ApiResponse<Session>> {
    return apiClient.get(`/sessions/${id}`);
  },

  async createSession(booking: Booking): Promise<ApiResponse<Session>> {
    return apiClient.post('/sessions', booking);
  },

  async updateSession(id: string, data: Partial<Session>): Promise<ApiResponse<Session>> {
    return apiClient.patch(`/sessions/${id}`, data);
  },

  async cancelSession(id: string): Promise<ApiResponse<Session>> {
    return apiClient.post(`/sessions/${id}/cancel`);
  },

  async completeSession(id: string): Promise<ApiResponse<Session>> {
    return apiClient.post(`/sessions/${id}/complete`);
  },

  async getUpcomingSessions(): Promise<ApiResponse<Session[]>> {
    return this.getSessions('upcoming');
  },

  async getPastSessions(): Promise<ApiResponse<Session[]>> {
    return this.getSessions('completed');
  },
};
