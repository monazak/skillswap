import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import type { AuthResponse } from'../types';
import type { User, LoginCredentials, SignupData } from '../types';
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  signup: (data: SignupData) => Promise<boolean>;
  logout: () => Promise<void>;
  isAuthenticated: boolean;
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}