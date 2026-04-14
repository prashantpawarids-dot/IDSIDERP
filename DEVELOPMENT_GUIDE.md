# MIT ERP - Development Guide

A comprehensive guide for developing and extending the MIT ERP system.

## 📌 Quick Reference

### Demo Login Credentials
```
Username: admin    | Password: admin123
Username: user     | Password: user123
Username: manager  | Password: manager123
```

### Project Commands
```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Run production server
pnpm lint         # Run linter
```

---

## 🏗️ Architecture Overview

### Layered Architecture

```
┌─────────────────────────────────────┐
│      UI Layer (Components)          │
│  LoginForm, LoginPanel, etc.        │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│   Business Logic Layer (Services)   │
│  authService, validationService     │
└────────────┬────────────────────────┘
             │
┌────────────▼────────────────────────┐
│    Data Layer (Data + Utilities)    │
│  mockUsers, validation, constants   │
└─────────────────────────────────────┘
```

### File Organization by Responsibility

| Layer | Location | Purpose |
|-------|----------|---------|
| **Presentation** | `src/components/` | React components, UI logic |
| **Business Logic** | `src/services/` | Authentication, validation, data processing |
| **Data Models** | `src/types/` | TypeScript interfaces and types |
| **Data** | `src/data/` | Mock data, constants, fixtures |
| **Utilities** | `src/lib/` | Helper functions, validators, formatters |

---

## 🚀 Adding New Features

### Step-by-Step: Adding a Dashboard Module

#### 1. Create Type Definition

**File:** `src/types/index.ts`

```typescript
// Add to existing types
export interface DashboardMetrics {
  totalUsers: number;
  activeUsers: number;
  totalRevenue: number;
  conversionRate: number;
}

export interface DashboardState {
  metrics: DashboardMetrics | null;
  isLoading: boolean;
  error: string | null;
}
```

#### 2. Create Mock Data

**File:** `src/data/mockDashboard.ts`

```typescript
import type { DashboardMetrics } from '@/types';

export const MOCK_DASHBOARD_METRICS: DashboardMetrics = {
  totalUsers: 1250,
  activeUsers: 892,
  totalRevenue: 54300,
  conversionRate: 12.5,
};
```

#### 3. Create Service

**File:** `src/services/dashboardService.ts`

```typescript
import type { DashboardMetrics } from '@/types';
import { MOCK_DASHBOARD_METRICS } from '@/data/mockDashboard';

export const dashboardService = {
  getMetrics: async (): Promise<DashboardMetrics> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 500));
    return MOCK_DASHBOARD_METRICS;
  },
};
```

#### 4. Create Component

**File:** `src/components/dashboard/DashboardPanel.tsx`

```typescript
'use client';

import { useEffect, useState } from 'react';
import type { DashboardMetrics } from '@/types';
import { dashboardService } from '@/services/dashboardService';

export function DashboardPanel() {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const data = await dashboardService.getMetrics();
        setMetrics(data);
      } catch (err) {
        setError('Failed to load metrics');
      } finally {
        setIsLoading(false);
      }
    };

    loadMetrics();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-8">
      {/* Dashboard content */}
    </div>
  );
}
```

#### 5. Create Page

**File:** `app/dashboard/page.tsx`

```typescript
import { DashboardPanel } from '@/components/dashboard/DashboardPanel';

export const metadata = {
  title: 'Dashboard | MIT ERP',
  description: 'Dashboard metrics and analytics',
};

export default function DashboardPage() {
  return <DashboardPanel />;
}
```

---

## 🎨 Component Guidelines

### Component Structure

```typescript
'use client';

import { useState } from 'react';
import type { ComponentProps } from '@/types';

interface MyComponentProps {
  title: string;
  onAction?: () => void;
}

export function MyComponent({ title, onAction }: MyComponentProps) {
  const [state, setState] = useState('');

  const handleClick = () => {
    // Logic here
    onAction?.();
  };

  return (
    <div className="p-4">
      <h1>{title}</h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}
```

### Best Practices

✅ **DO:**
- Use TypeScript for all components
- Keep components focused and single-responsibility
- Extract logic to services
- Use proper error handling
- Add JSDoc comments for complex logic
- Use shadcn/ui components for consistency

❌ **DON'T:**
- Put business logic in components
- Use `any` type
- Fetch data directly in components
- Mix styling concerns
- Create deeply nested components

---

## 📦 Service Pattern

Services handle all business logic, validation, and data processing.

### Service Template

```typescript
import type { InputType, OutputType } from '@/types';
import { validateInput } from '@/lib/validation';

export const myService = {
  /**
   * Service method description
   * @param input - Description
   * @returns Promise with result
   */
  methodName: async (input: InputType): Promise<OutputType> => {
    // Validate input
    const errors = validateInput(input);
    if (errors.length > 0) {
      throw new Error(errors[0].message);
    }

    // Process data
    const result = await processData(input);

    // Return result
    return result;
  },
};
```

---

## 🔍 Testing Your Changes

### Manual Testing Checklist

- [ ] Component renders without errors
- [ ] Form validation works
- [ ] Error messages display correctly
- [ ] Responsive design works on all screen sizes
- [ ] TypeScript compilation passes
- [ ] No console errors or warnings

### Browser Testing

```bash
# Development server auto-reloads
pnpm dev

# Check Chrome DevTools console
# Verify responsive design (F12 → Toggle device toolbar)
# Test on mobile devices/emulators
```

---

## 🐛 Debugging Tips

### Using Console Logs

```typescript
// Good for debugging
console.log('[v0] Component mounted:', { props });
console.log('[v0] API response received:', response);
console.error('[v0] Error occurred:', error);
```

### React Developer Tools

1. Install React Developer Tools browser extension
2. Inspect components in DevTools
3. View props and state in Component panel
4. Check re-render performance

### TypeScript Errors

- Hover over errors in your editor
- Use `strict: true` in tsconfig.json
- Check types in `src/types/index.ts`

---

## 📁 Folder Structure Reference

### When to Create New Folders

| Folder | When to Create | Example |
|--------|---|---|
| `src/components/[module]` | New major UI feature | `dashboard/`, `reports/` |
| `src/services/` | New business logic | `reportService.ts` |
| `src/types/` | New data models | Add to `index.ts` |
| `src/data/` | New mock data | `mockReports.ts` |
| `src/lib/` | New utilities | `formatter.ts` |
| `app/[route]` | New page/route | `app/reports/page.tsx` |

---

## 🔒 Security Checklist

Before deploying, verify:

- [ ] No hardcoded passwords in code
- [ ] All user input is validated
- [ ] Sensitive data not logged to console
- [ ] Environment variables used for secrets
- [ ] HTTPS enabled in production
- [ ] CORS configured properly
- [ ] Rate limiting implemented
- [ ] SQL injection prevention (if using database)

---

## 🚀 Deployment Checklist

### Before Deploying

```bash
# Build successfully
pnpm build

# No TypeScript errors
npx tsc --noEmit

# No linting errors
pnpm lint

# Test in production mode
pnpm start
```

### Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_APP_NAME=MIT ERP
NEXT_PUBLIC_COMPANY_NAME=IDSID Pvt. Ltd.
# Add more as needed
```

### Deploy to Vercel

```bash
# Option 1: CLI
vercel

# Option 2: GitHub integration
# Push to GitHub and let Vercel auto-deploy
```

---

## 📚 Useful Resources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

### Project Files
- [README.md](./README.md) - Project overview
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed structure
- [.env.example](./.env.example) - Environment template

---

## 💡 Common Tasks

### Add a New Page

```bash
# Create app route
app/new-page/page.tsx

# Add to navigation (future)
# components/Navigation.tsx
```

### Add a New Component

```bash
# Create component
src/components/[module]/MyComponent.tsx

# Export from index (if creating barrel exports)
# src/components/[module]/index.ts
```

### Add Form Validation

```typescript
// Add to src/lib/validation.ts
export const validateMyForm = (data: MyForm): ValidationError[] => {
  const errors: ValidationError[] = [];
  
  if (!data.field) {
    errors.push({ field: 'field', message: 'Field is required' });
  }
  
  return errors;
};
```

---

## ❓ FAQ

**Q: Where should I put helper functions?**
A: In `src/lib/` if they're utilities, or in the service if they're business logic.

**Q: How do I connect to a real database?**
A: Replace mock data in `src/data/` with actual API calls in services.

**Q: How do I add authentication?**
A: Extend `authService` in `src/services/authService.ts` with real login logic.

**Q: Can I use other UI libraries?**
A: Yes, but shadcn/ui is pre-installed. Adding others may increase bundle size.

**Q: How do I deploy?**
A: Run `pnpm build`, then deploy using Vercel, Netlify, or your hosting provider.

---

## 🤝 Contributing

When contributing code:

1. Follow the existing code style
2. Use TypeScript for type safety
3. Add proper error handling
4. Document complex logic
5. Test changes locally
6. Keep commits focused and descriptive

---

## 📞 Getting Help

1. Check this guide for answers
2. Review project files for examples
3. Check console for error messages
4. Use browser DevTools for debugging

---

**Version**: 1.0.0
**Last Updated**: April 2024
