import { apiClient } from './client';
import type {
  LoginCredentials,
  SignupData,
  AuthResponse,
  ApiResponse,
} from '../../types';

const TOKEN_KEY = 'auth_token';
const USER_KEY = 'user';

type BackendAuthWrapper = {
  success?: boolean;
  data?: {
    success?: boolean;
    data?: AuthResponse;
    user?: AuthResponse['user'];
    token?: string;
  } | AuthResponse;
};

export const authService = {
  // 🔐 LOGIN
  async login(credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<BackendAuthWrapper>(
      '/auth/login',
      credentials
    );

    console.log("🔐 RAW LOGIN RESPONSE:", response);

    // ✅ SAFE UNWRAP (handles all backend shapes)
    const raw: any = response.data;

    const payload: AuthResponse =
      raw?.data?.data ??   // double wrapped
      raw?.data ??         // single wrapped
      raw ??               // direct
      {};

    console.log("📦 FINAL LOGIN PAYLOAD:", payload);

    if (payload?.token && payload?.user) {
      this.setSession(payload);
    }

    return {
      success: true,
      data: payload,
    };
  },

  // 🆕 SIGNUP
  async signup(data: SignupData): Promise<ApiResponse<AuthResponse>> {
    const response = await apiClient.post<BackendAuthWrapper>(
      '/auth/signup',
      data
    );

    console.log("🆕 RAW SIGNUP RESPONSE:", response);

    const raw: any = response.data;

    const payload: AuthResponse =
      raw?.data?.data ??
      raw?.data ??
      raw ??
      {};

    if (payload?.token && payload?.user) {
      this.setSession(payload);
    }

    return {
      success: true,
      data: payload,
    };
  },

  // 🚪 LOGOUT
  async logout(): Promise<void> {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);

    try {
      await apiClient.post('/auth/logout');
    } catch {
      // ignore
    }
  },

  // 👤 CURRENT USER
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

  // 🔄 REFRESH TOKEN
  async refreshToken(): Promise<ApiResponse<{ token: string }>> {
    return {
      success: false,
      error: 'Refresh token not implemented yet',
    };
  },

  // 💾 STORE SESSION
  setSession(data: AuthResponse) {
    if (!data?.token || !data?.user) {
      console.warn("❌ Invalid session data:", data);
      return;
    }

    localStorage.setItem(TOKEN_KEY, data.token);
    localStorage.setItem(USER_KEY, JSON.stringify(data.user));

    console.log("✅ SESSION STORED");
  },

  // 📦 USER
  getStoredUser(): AuthResponse['user'] | null {
    const userStr = localStorage.getItem(USER_KEY);
    if (!userStr) return null;

    try {
      return JSON.parse(userStr);
    } catch {
      return null;
    }
  },

  // 🔐 AUTH CHECK
  isAuthenticated(): boolean {
    return !!localStorage.getItem(TOKEN_KEY);
  },

  // 🔑 TOKEN
  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  },
};