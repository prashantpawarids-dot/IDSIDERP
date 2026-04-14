# MIT ERP - Project Structure

## Overview
MIT ERP is an Enterprise Resource Planning system developed for IDSID Pvt. Ltd. This document outlines the scalable project structure designed to accommodate future modules and features.

## Folder Structure

```
.
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Home/Login page
│   └── globals.css              # Global styles
│
├── src/                         # Source code
│   ├── components/              # Reusable React components
│   │   ├── ui/                 # shadcn/ui components
│   │   └── auth/               # Authentication components
│   │       ├── LoginForm.tsx    # Login form component
│   │       └── LoginPanel.tsx   # Login page layout
│   │
│   ├── types/                  # TypeScript type definitions
│   │   └── index.ts            # User, Auth types
│   │
│   ├── data/                   # Mock/Static data
│   │   └── mockUsers.ts        # Hardcoded user database
│   │
│   ├── lib/                    # Utility functions
│   │   └── validation.ts       # Form validation logic
│   │
│   └── services/               # Business logic & API calls
│       └── authService.ts      # Authentication service
│
├── components/                 # Shared components (shadcn/ui)
│   └── ui/                    # UI component library
│
├── public/                     # Static assets
│   ├── logo-idsid.png         # Company logo
│   └── [other assets]
│
└── Configuration Files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    └── next.config.mjs

```

## Key Directories Explained

### `src/components/auth/`
Contains all authentication-related UI components.
- **LoginForm.tsx** - Form component with validation and error handling
- **LoginPanel.tsx** - Main login page layout

### `src/types/`
Central location for all TypeScript interfaces and types.
- User authentication types
- API response types
- Form state types

### `src/data/`
Mock data and static content (future: database models).
- User database (currently hardcoded)
- System configuration data

### `src/services/`
Business logic layer - isolated from UI components.
- **authService.ts** - Login logic, validation, user authentication
- Future: Payment service, Notification service, etc.

### `src/lib/`
Pure utility functions and helpers.
- Form validation
- String sanitization
- Date formatting (future)
- Data transformation (future)

## Design Patterns

### 1. **Separation of Concerns**
- Components handle UI only
- Services handle business logic
- Types define data contracts

### 2. **Validation Layer**
All form validation is centralized in `src/lib/validation.ts` for reusability.

### 3. **Mock Data**
Currently using hardcoded users in `src/data/mockUsers.ts`. This can easily be replaced with API calls to a real backend.

### 4. **Error Handling**
Comprehensive error handling in components with user-friendly error messages.

## Default Login Credentials (Demo)

```
Username: admin
Password: admin123

Username: user
Password: user123

Username: manager
Password: manager123
```

## Future Modules Structure

When adding new modules, follow this pattern:

```
src/
├── components/
│   ├── auth/              # Current
│   ├── dashboard/         # Future module
│   ├── users/            # Future module
│   ├── reports/          # Future module
│   └── ui/               # Shared UI
│
├── services/
│   ├── authService.ts    # Current
│   ├── dashboardService/ # Future
│   ├── userService/      # Future
│   └── reportService/    # Future
│
├── types/
│   ├── index.ts          # Core types
│   ├── dashboard.ts      # Dashboard-specific types (future)
│   ├── user.ts          # User types (future)
│   └── report.ts        # Report types (future)
│
└── data/
    ├── mockUsers.ts     # Current
    ├── mockDashboard/   # Future (future)
    └── mockReports/     # Future
```

## Development Workflow

1. **Create Types** - Define interfaces in `src/types/`
2. **Create Service** - Implement business logic in `src/services/`
3. **Create Component** - Build UI in `src/components/`
4. **Add Data** - Mock data in `src/data/` or connect to API
5. **Add Utility** - Helper functions in `src/lib/`

## Key Technologies

- **Next.js 16** - React framework with Server Components
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component library
- **React Hook Form** - Form handling
- **Zod** - Schema validation

## Configuration

### TypeScript Paths
Path aliases configured in `tsconfig.json`:
- `@/components/*` - Components directory
- `@/lib/*` - Utilities directory
- `@/types/*` - Types directory
- `@/data/*` - Mock data directory
- `@/services/*` - Services directory

## Security Notes

⚠️ **Important for Production:**
- Do NOT store passwords in plain text (use bcrypt)
- Use environment variables for secrets
- Implement proper JWT token management
- Add CSRF protection
- Use HTTPS only
- Implement rate limiting
- Add proper authentication middleware

## Next Steps

1. Connect to real database (Supabase, PostgreSQL, etc.)
2. Implement JWT authentication
3. Add protected routes/middleware
4. Build dashboard module
5. Add user management module
6. Implement reporting system
