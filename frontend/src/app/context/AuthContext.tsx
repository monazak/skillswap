import { createContext, useState, useEffect, ReactNode } from 'react';
import { authService } from '../services/api';
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

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = authService.getStoredUser();
    if (storedUser) setUser(storedUser);
    setLoading(false);
  }, []);

  const login = async (credentials: LoginCredentials) => {
    setLoading(true);
    setError(null);

    try {
      const res = await authService.login(credentials);
      if (res.success && res.data) {
        setUser(res.data.user);
        return true;
      }
      setError(res.error || 'Login failed');
      return false;
    } catch {
      setError('Login error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data: SignupData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await authService.signup(data);
      if (res.success && res.data) {
        setUser(res.data.user);
        return true;
      }
      setError(res.error || 'Signup failed');
      return false;
    } catch {
      setError('Signup error');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
    setError(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        signup,
        logout,
        isAuthenticated: !!user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}