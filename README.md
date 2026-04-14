# MIT ERP - Enterprise Resource Planning System

A professional, scalable Enterprise Resource Planning (ERP) system built for **IDSID Pvt. Ltd.** with a clean, modular architecture designed to accommodate future features and modules.

## 🎯 Features (Phase 1 - Login)

- ✅ Professional login interface matching modern ERP standards
- ✅ Clean, form validation with error handling
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Demo credentials for testing
- ✅ Scalable folder structure ready for expansion
- ✅ TypeScript for type safety
- ✅ Modular component architecture

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (or npm/yarn)

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the login page.

## 📝 Demo Credentials

For testing purposes, use these credentials:

| Username | Password | Role |
|----------|----------|------|
| admin | admin123 | Admin |
| user | user123 | User |
| manager | manager123 | Manager |

## 📁 Project Structure

```
MIT-ERP/
├── app/                              # Next.js App Router
│   ├── layout.tsx                   # Root layout with SEO metadata
│   ├── page.tsx                     # Login page entry point
│   └── globals.css                  # Global styles
│
├── src/                             # Source code
│   ├── components/
│   │   ├── auth/                   # Authentication module
│   │   │   ├── LoginForm.tsx       # Login form with validation
│   │   │   └── LoginPanel.tsx      # Login page layout
│   │   └── ui/                     # shadcn/ui components
│   │
│   ├── types/
│   │   └── index.ts                # TypeScript type definitions
│   │
│   ├── data/
│   │   └── mockUsers.ts            # Hardcoded user database
│   │
│   ├── lib/
│   │   └── validation.ts           # Form validation logic
│   │
│   └── services/
│       └── authService.ts          # Authentication business logic
│
├── components/                      # Shared UI components
│   └── ui/                         # shadcn/ui library
│
├── public/                          # Static assets
│   └── logo-idsid.png              # Company logo
│
└── Configuration files
    ├── package.json
    ├── tsconfig.json
    ├── tailwind.config.ts
    └── next.config.mjs
```

See [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) for detailed documentation.

## 🏗️ Architecture

### Clean Architecture Pattern

The project follows a **3-layer architecture**:

1. **Presentation Layer** (`components/`)
   - UI components and user interactions
   - Form handling and display logic

2. **Business Logic Layer** (`services/`)
   - Authentication logic
   - Data validation
   - Business rules

3. **Data Layer** (`data/`, `lib/`)
   - Mock data and static content
   - Validation functions
   - Type definitions

### Key Design Principles

- **Separation of Concerns** - Each module has a single responsibility
- **Reusability** - Components and services are built for reuse
- **Scalability** - Folder structure supports adding new modules
- **Type Safety** - Full TypeScript implementation
- **Error Handling** - Comprehensive error management
- **Validation** - Centralized form validation

## 💻 Technology Stack

- **Frontend Framework**: Next.js 16 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Form Management**: React Hook Form
- **Validation**: Custom validation layer (Zod-ready)
- **Package Manager**: pnpm

## 🔐 Security Features (Current)

- ✅ Input validation on client side
- ✅ Error message sanitization
- ✅ Password field masking
- ✅ Form state management
- ✅ Demo credentials clearly labeled

⚠️ **Production Requirements:**
- Implement backend authentication
- Use bcrypt for password hashing
- Enable HTTPS
- Add JWT token management
- Implement CSRF protection
- Add rate limiting
- Use environment variables for secrets

## 📚 Development Guide

### Adding a New Feature

1. **Create Type Definition** in `src/types/`
   ```typescript
   export interface FeatureName {
     id: string;
     // ... properties
   }
   ```

2. **Create Service** in `src/services/`
   ```typescript
   export const featureService = {
     // business logic
   };
   ```

3. **Create Component** in `src/components/`
   ```typescript
   export function FeatureComponent() {
     // React component
   }
   ```

4. **Add Mock Data** in `src/data/` (temporary)
   ```typescript
   export const MOCK_FEATURES = [/* data */];
   ```

### Component Best Practices

- Use functional components with hooks
- Keep components focused and small
- Extract reusable logic to services
- Use TypeScript for type safety
- Add proper error handling
- Document complex logic

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server

# Production
pnpm build           # Build for production
pnpm start           # Start production server

# Code Quality
pnpm lint            # Run ESLint
```

## 🎨 Styling

The project uses **Tailwind CSS** with custom design tokens:

- **Brand Blue**: `#1a3a52` (Dark blue for sidebar/left panel)
- **Brand Orange**: `#f59e0b` (Orange accent for User ID field)
- **Brand Red**: `#dc2626` (Red for "Login" heading)

### Responsive Design

Mobile-first approach with breakpoints:
- `sm:` - 640px
- `md:` - 768px
- `lg:` - 1024px
- `xl:` - 1280px

## 📝 API Routes (Future)

When connecting to backend, the following API structure is recommended:

```
/api/auth/
  POST /login          - Authenticate user
  POST /logout         - Logout user
  POST /register       - Register new user
  POST /refresh-token  - Refresh JWT token
  GET  /profile        - Get current user profile
```

## 🔄 Deployment

### Deploy to Vercel

```bash
# Push to GitHub
git push origin main

# Deploy using Vercel CLI
vercel

# Or connect GitHub repository to Vercel dashboard
```

### Environment Variables

Copy `.env.example` to `.env.local` and update values:

```bash
cp .env.example .env.local
```

## 🚦 Next Steps / Roadmap

### Phase 1 ✅ (Complete)
- Login page UI and layout
- Form validation
- Mock authentication
- Project structure

### Phase 2 (Planned)
- Dashboard module
- User management
- Real authentication (JWT)
- Database integration

### Phase 3 (Planned)
- Reports module
- Inventory management
- Document management
- Workflow automation

### Phase 4 (Planned)
- Analytics and insights
- Mobile app
- API documentation
- Performance optimization

## 🤝 Contributing

When adding new features:

1. Follow the established folder structure
2. Use TypeScript for type safety
3. Add proper error handling
4. Write meaningful comments
5. Keep components small and reusable
6. Test all changes locally

## 📖 Documentation

- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Detailed folder structure and patterns
- [.env.example](./.env.example) - Environment variables template

## 🐛 Known Issues & Limitations

- Current implementation uses hardcoded mock data
- reCAPTCHA is UI-only (not functional)
- "Forgot Password" link is placeholder
- No persistent authentication state

## 📞 Support

For issues and questions:
1. Check existing documentation
2. Review code comments
3. Consult PROJECT_STRUCTURE.md

## 📄 License

This project is proprietary software of IDSID Pvt. Ltd.

## 👥 Company

**IDSID Pvt. Ltd.**
Enterprise Solution Provider

---

**Last Updated**: April 2024
**Version**: 1.0.0 (Phase 1)
