import { apiClient } from './client';
import type {
  LoginCredentials,
  SignupData,
  AuthResponse,
  ApiResponse,
} from '../../types';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user';

export const authService = {
  // 🔐 LOGIN
  async login(
    credentials: LoginCredentials
  ): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<AuthResponse>(
      '/auth/login',
      credentials
    );

    if (response.success && response.data) {
      this.setSession(response.data);
    }

    return response;
  },

  // 🆕 SIGNUP
  async signup(
    data: SignupData
  ): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<AuthResponse>(
      '/auth/signup',
      data
    );

    if (response.success && response.data) {
      this.setSession(response.data);
    }

    return response;
  },

  // 🚪 LOGOUT (frontend only for now)
  async logout(): Promise<void> {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    // backend logout doesn't exist yet → safe call (ignore errors)
    try {
      await apiClient.post('/auth/logout');
    } catch {
      // ignore
    }
  },

  // 👤 GET CURRENT USER (from localStorage for now)
  async getCurrentUser(): Promise<ApiResponse<AuthResponse['user']>> {
    const user = this.getStoredUser();

    if (!user) {
      return {
        success: false,
        error: 'No user found',
      };
    }

    return {
      success: true,
      data: user,
    };
  },

  // 🔄 REFRESH TOKEN (NOT IMPLEMENTED YET IN BACKEND)
  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    return {
      success: false,
      error: 'Refresh token not implemented yet',
    };
  },

  // 💾 STORE SESSION
  setSession(data: AuthResponse) {
    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));
  },

  // 📦 GET STORED USER
  getStoredUser(): AuthResponse['user'] | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;

    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  // 🔐 CHECK AUTH
  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  // 🔑 GET TOKEN
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
};