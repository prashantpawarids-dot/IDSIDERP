import type { LoginCredentials, ValidationError } from '@/types';

export const validateLoginForm = (
  credentials: LoginCredentials
): ValidationError[] => {
  const errors: ValidationError[] = [];

  // Username validation
  if (!credentials.username || credentials.username.trim() === '') {
    errors.push({
      field: 'username',
      message: 'User ID is required',
    });
  } else if (credentials.username.trim().length < 3) {
    errors.push({
      field: 'username',
      message: 'User ID must be at least 3 characters long',
    });
  }

  // Password validation
  if (!credentials.password) {
    errors.push({
      field: 'password',
      message: 'Password is required',
    });
  } else if (credentials.password.length < 6) {
    errors.push({
      field: 'password',
      message: 'Password must be at least 6 characters long',
    });
  }

  return errors;
};

export const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};
