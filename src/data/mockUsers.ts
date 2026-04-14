import type { User } from '@/types';

// Mock user database - In production, this would be a real database
export const MOCK_USERS: User[] = [
  {
    id: 'USR001',
    username: 'admin',
    password: 'admin123', // Demo password only
    email: 'admin@idsid.com',
    fullName: 'Admin User',
    role: 'admin',
    department: 'Administration',
    isActive: true,
  },
  {
    id: 'USR002',
    username: 'user',
    password: 'user123', // Demo password only
    email: 'user@idsid.com',
    fullName: 'Regular User',
    role: 'user',
    department: 'Operations',
    isActive: true,
  },
  {
    id: 'USR003',
    username: 'manager',
    password: 'manager123', // Demo password only
    email: 'manager@idsid.com',
    fullName: 'Manager User',
    role: 'manager',
    department: 'Management',
    isActive: true,
  },
];

// Demo credentials for easy testing
export const DEMO_CREDENTIALS = {
  username: 'admin',
  password: 'admin123',
};
