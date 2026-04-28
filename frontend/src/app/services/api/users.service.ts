import { apiClient } from './client';
import type { User, UserFilters, PaginatedResponse, ApiResponse } from '../../types';

export const usersService = {
  async getUsers(filters?: UserFilters, page = 1, limit = 10): Promise<ApiResponse<PaginatedResponse<User>>> {
    const params = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
      ...(filters?.skillsOffered && { skillsOffered: filters.skillsOffered.join(',') }),
      ...(filters?.availability && { availability: filters.availability.join(',') }),
      ...(filters?.rating && { rating: filters.rating.toString() }),
      ...(filters?.sortBy && { sortBy: filters.sortBy }),
    });

    return apiClient.get(`/users?${params.toString()}`);
  },

  async getUserById(id: string): Promise<ApiResponse<User>> {
    return apiClient.get(`/users/${id}`);
  },

  async updateProfile(id: string, data: Partial<User>): Promise<ApiResponse<User>> {
    return apiClient.patch(`/users/${id}`, data);
  },

  async searchUsers(query: string): Promise<ApiResponse<User[]>> {
    return apiClient.get(`/users/search?q=${encodeURIComponent(query)}`);
  },

  async getMatches(userId: string): Promise<ApiResponse<User[]>> {
    return apiClient.get(`/users/${userId}/matches`);
  },
};
