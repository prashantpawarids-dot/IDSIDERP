import type { LoginCredentials, AuthResponse, User } from '@/types';
import { MOCK_USERS } from '@/data/mockUsers';
import { validateLoginForm } from '@/lib/validation';

/**
 * Authentication Service
 * Handles user login and authentication logic
 * In production, this would make API calls to a backend server
 */

export const authService = {
  /**
   * Authenticate user with credentials
   * @param credentials - Username and password
   * @returns Promise with authentication response
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Validate input
    const validationErrors = validateLoginForm(credentials);
    if (validationErrors.length > 0) {
      return {
        success: false,
        message: validationErrors[0].message,
      };
    }

    // Find user in mock database
    const user = MOCK_USERS.find(
      (u) =>
        u.username === credentials.username &&
        u.password === credentials.password
    );

    if (!user) {
      return {
        success: false,
        message: 'Invalid username or password',
      };
    }

    if (!user.isActive) {
      return {
        success: false,
        message: 'This account has been deactivated',
      };
    }

    // Remove password from response for security
    const { password, ...userWithoutPassword } = user;

    return {
      success: true,
      message: 'Login successful',
      user: userWithoutPassword as User,
    };
  },

  /**
   * Validate credentials format without database check
   * Useful for client-side validation before submission
   */
  validateCredentials: (credentials: LoginCredentials) => {
    return validateLoginForm(credentials);
  },
};
