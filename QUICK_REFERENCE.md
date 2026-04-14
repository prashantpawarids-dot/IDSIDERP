# MIT ERP - Quick Reference Card

## 🚀 Start Here

```bash
pnpm install      # Install dependencies
pnpm dev          # Start development server
# Visit http://localhost:3000
```

## 🔑 Demo Login Credentials

```
┌─────────────┬──────────────┬─────────────┐
│ Username    │ Password     │ Role        │
├─────────────┼──────────────┼─────────────┤
│ admin       │ admin123     │ Admin       │
│ user        │ user123      │ User        │
│ manager     │ manager123   │ Manager     │
└─────────────┴──────────────┴─────────────┘
```

---

## 📁 File Locations

### Login Page Files
```
app/page.tsx                    ← Entry point
  └─ LoginPanel (src/components/auth/LoginPanel.tsx)
      └─ LoginForm (src/components/auth/LoginForm.tsx)
         └─ authService (src/services/authService.ts)
```

### Key Files to Edit
| Need | File | Location |
|------|------|----------|
| Change login logic | authService.ts | src/services/ |
| Add form validation | validation.ts | src/lib/ |
| Add new users | mockUsers.ts | src/data/ |
| Add new types | index.ts | src/types/ |
| Add new components | Create folder | src/components/ |

---

## 🎨 Design Colors

```
Brand Blue    #1a3a52   (Left panel, dark backgrounds)
Brand Orange  #f59e0b   (Input focus border)
Brand Red     #dc2626   (Login heading)
White         #ffffff   (Right panel, text)
Gray          #f3f4f6   (Background)
```

---

## 🔧 Common Commands

```bash
# Development
pnpm dev              # Start dev server on :3000
pnpm build            # Create production build
pnpm start            # Run production build locally

# Code Quality
pnpm lint             # Run ESLint
npx tsc --noEmit      # Check TypeScript
```

---

## 📂 Adding New Features

### 1. Add Type Definition
```typescript
// src/types/index.ts
export interface NewFeature {
  id: string;
  name: string;
}
```

### 2. Add Mock Data
```typescript
// src/data/mockNewFeature.ts
export const MOCK_NEW_FEATURE = [{...}];
```

### 3. Add Service
```typescript
// src/services/newFeatureService.ts
export const newFeatureService = {
  getAll: async () => { /* logic */ }
};
```

### 4. Add Component
```typescript
// src/components/features/NewFeature.tsx
export function NewFeature() {
  return <div>...</div>;
}
```

### 5. Add Route
```typescript
// app/new-feature/page.tsx
import { NewFeature } from '@/components/features/NewFeature';
export default function Page() {
  return <NewFeature />;
}
```

---

## 🐛 Troubleshooting

| Problem | Solution |
|---------|----------|
| Port 3000 in use | `pnpm dev -- -p 3001` |
| Module not found | Check imports in tsconfig.json |
| Styles not loading | Run `pnpm install` again |
| TypeScript errors | Add types to src/types/index.ts |
| Components not rendering | Check 'use client' directive |

---

## 📚 Documentation Files

| File | Purpose | Read Time |
|------|---------|-----------|
| README.md | Project overview | 5 min |
| PROJECT_STRUCTURE.md | Folder organization & patterns | 10 min |
| DEVELOPMENT_GUIDE.md | How to develop & extend | 15 min |
| IMPLEMENTATION_SUMMARY.md | What was delivered | 10 min |
| QUICK_REFERENCE.md | This file (quick lookup) | 2 min |

---

## 🔐 Production Checklist

- [ ] Replace mock data with real database
- [ ] Implement real authentication (JWT)
- [ ] Add password hashing (bcrypt)
- [ ] Enable HTTPS
- [ ] Set environment variables
- [ ] Add rate limiting
- [ ] Add CSRF protection
- [ ] Test security thoroughly

---

## 🌐 Deployment

```bash
# Vercel
vercel               # Deploy to Vercel
vercel --prod        # Deploy to production

# Docker
docker build -t mit-erp .
docker run -p 3000:3000 mit-erp

# Traditional hosting
npm run build
npm start
```

---

## 🗂️ Project Structure at a Glance

```
MIT-ERP/
├── app/                    # Next.js pages & layouts
│   ├── page.tsx           # Login page (root)
│   └── layout.tsx         # Root layout
│
├── src/
│   ├── components/auth/   # Login components
│   ├── services/          # Business logic
│   ├── types/             # Type definitions
│   ├── data/              # Mock data
│   └── lib/               # Utilities & validation
│
├── public/                # Static assets
│   └── logo-idsid.png
│
├── README.md              # Start here
├── PROJECT_STRUCTURE.md   # Detailed architecture
├── DEVELOPMENT_GUIDE.md   # How to extend
└── IMPLEMENTATION_SUMMARY.md # What's included
```

---

## ⚙️ Environment Setup

### .env.local

```env
# Copy from .env.example
NEXT_PUBLIC_APP_NAME=MIT ERP
NEXT_PUBLIC_COMPANY_NAME=IDSID Pvt. Ltd.
```

### TypeScript Paths (tsconfig.json)

```
@/components/*  → ./components/
@/lib/*         → ./src/lib/
@/types/*       → ./src/types/
@/data/*        → ./src/data/
@/services/*    → ./src/services/
```

---

## 💡 Pro Tips

### Performance
- Use `next/image` for images (automatic optimization)
- Code split with dynamic imports
- Lazy load components
- Monitor bundle size with `next/bundle-analyzer`

### Development
- Use React DevTools browser extension
- Use TypeScript strict mode
- Enable ESLint for code quality
- Write tests as you code

### Maintenance
- Keep components small (< 200 lines)
- Extract logic to services
- Centralize constants in src/lib/constants.ts
- Document complex functions

---

## 🎯 Feature Checklist

### ✅ Implemented
- [x] Login page UI
- [x] Form validation
- [x] Mock authentication
- [x] Error handling
- [x] Responsive design
- [x] Project structure
- [x] Documentation

### 🔜 Next Phase
- [ ] Dashboard module
- [ ] User management
- [ ] Real authentication
- [ ] Database integration
- [ ] Reports module
- [ ] Mobile app

---

## 📖 Learning Path

1. **Start**: README.md (5 min)
2. **Setup**: `pnpm install && pnpm dev` (2 min)
3. **Explore**: Read PROJECT_STRUCTURE.md (10 min)
4. **Build**: Follow DEVELOPMENT_GUIDE.md (30 min)
5. **Extend**: Add your first feature (1-2 hours)

---

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

---

## 👨‍💻 Code Examples

### Using a Service
```typescript
import { authService } from '@/services/authService';

const response = await authService.login(credentials);
if (response.success) {
  console.log('User:', response.user);
}
```

### Creating a Component
```typescript
import type { MyType } from '@/types';

interface Props {
  data: MyType;
}

export function MyComponent({ data }: Props) {
  return <div>{data.name}</div>;
}
```

### Adding Validation
```typescript
import { validateLoginForm } from '@/lib/validation';

const errors = validateLoginForm(credentials);
if (errors.length > 0) {
  console.error(errors[0].message);
}
```

---

## 📞 Quick Support

**Error: Module not found**
→ Check import path matches tsconfig.json paths

**Error: Cannot find JSX**
→ Add `'use client'` at top of file

**Error: No default export**
→ Use `export function` or `export default`

**Styles not working**
→ Import component from correct location

---

## 🎉 You're All Set!

Everything is ready. Time to:
1. Run `pnpm dev`
2. Open http://localhost:3000
3. Login with demo credentials
4. Explore the code
5. Start building!

---

**Version**: 1.0.0
**Company**: IDSID Pvt. Ltd.
**Project**: MIT ERP
**Last Updated**: April 2024
