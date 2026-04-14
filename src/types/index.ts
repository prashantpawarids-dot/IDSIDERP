// User and Authentication Types
export interface User {
  id: string;
  username: string;
  password: string; // In production, never store plain passwords
  email: string;
  fullName: string;
  role: 'admin' | 'user' | 'manager';
  department: string;
  isActive: boolean;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

export interface ValidationError {
  field: string;
  message: string;
}

export interface LoginFormState {
  username: string;
  password: string;
  errors: Record<string, string>;
  isLoading: boolean;
}
