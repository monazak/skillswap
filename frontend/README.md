# SkillSwap - Peer-to-Peer Skill Exchange Platform

A modern web application where people exchange skills using time credits instead of money. Built with React, TypeScript, and Tailwind CSS.

## Features

- **User Authentication** - Secure login and signup
- **Skill Matching** - AI-powered matching based on complementary skills
- **Session Booking** - Schedule skill exchange sessions
- **Real-time Chat** - Communicate with your matches
- **Reviews & Ratings** - Build reputation through reviews
- **TimeCredits System** - Fair time-based economy
- **Dark/Light Mode** - Customizable theme
- **Responsive Design** - Works on all devices

## Tech Stack

### Frontend
- **React 19** with TypeScript
- **React Router v7** for routing
- **Tailwind CSS v4** for styling
- **Motion** (Framer Motion) for animations
- **Vite** for build tooling

### Backend Ready
- **API Service Layer** - Structured API client
- **Custom Hooks** - Reusable data fetching hooks
- **TypeScript Types** - Complete type definitions
- **Error Handling** - Error boundaries and handlers

## Project Structure

```
src/
├── app/
│   ├── components/        # Reusable UI components
│   │   ├── ui/           # Base UI components (Button, Card, etc.)
│   │   ├── UserCard.tsx
│   │   ├── EmptyState.tsx
│   │   └── ErrorBoundary.tsx
│   │
│   ├── pages/            # Page components
│   │   ├── marketing/    # Marketing pages (Landing, About, etc.)
│   │   ├── auth/         # Authentication pages
│   │   ├── app/          # App pages (Dashboard, Profile, etc.)
│   │   └── onboarding/   # Onboarding flow
│   │
│   ├── layouts/          # Layout components
│   │   ├── MarketingLayout.tsx
│   │   └── AppLayout.tsx
│   │
│   ├── hooks/            # Custom React hooks
│   │   ├── useApi.ts     # Generic API hook
│   │   ├── useAuth.ts    # Authentication hook
│   │   └── index.ts      # Specific data hooks
│   │
│   ├── services/         # API service layer
│   │   └── api/
│   │       ├── client.ts          # Base API client
│   │       ├── auth.service.ts    # Auth endpoints
│   │       ├── users.service.ts   # User endpoints
│   │       └── sessions.service.ts # Session endpoints
│   │
│   ├── types/            # TypeScript types
│   │   └── index.ts      # All interface definitions
│   │
│   ├── utils/            # Utility functions
│   │   └── helpers.ts    # Helper functions
│   │
│   ├── config/           # Configuration
│   │   └── constants.ts  # App constants
│   │
│   ├── context/          # React contexts
│   │   └── ThemeContext.tsx
│   │
│   └── data/             # Mock data (to be replaced with API)
│       └── mockData.ts
│
└── styles/               # Global styles
    ├── index.css
    ├── colors.css
    ├── fonts.css
    └── theme.css
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repo-url>
   cd skillswap
   ```

2. **Install dependencies:**
   ```bash
   pnpm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

The app will run on `http://localhost:5173`

## Development Best Practices Implemented

### 1. **Type Safety**
- Complete TypeScript types in `src/app/types/`
- No `any` types - everything is properly typed
- Shared interfaces for frontend/backend consistency

### 2. **Separation of Concerns**
- **Components** - Only UI logic
- **Hooks** - Data fetching and state management
- **Services** - API communication
- **Utils** - Pure helper functions

### 3. **Error Handling**
- **Error Boundaries** - Catch React component errors
- **API Error Handling** - Centralized in API client
- **User-friendly Messages** - Clear error messages

### 4. **Code Organization**
- **Feature-based Structure** - Related code together
- **Reusable Components** - DRY principle
- **Custom Hooks** - Business logic separation

### 5. **Performance**
- **Code Splitting** - Route-based lazy loading ready
- **Optimized Images** - SVG and optimized assets
- **Memoization Ready** - Structure supports React.memo

### 6. **Security Best Practices**
- **Input Sanitization** - Helper functions in utils
- **JWT Token Storage** - Secure localStorage handling
- **CORS Ready** - Backend CORS configuration example
- **XSS Prevention** - Input sanitization helpers

### 7. **Scalability**
- **Service Layer** - Easy to swap data sources
- **Environment Config** - Different configs per environment
- **Feature Flags** - Easy to toggle features
- **API Versioning Ready** - Structured for API changes

## API Integration

The app is ready to connect to a backend API:

### Using Custom Hooks

```tsx
import { useUsers, useSessions } from './hooks';

function Dashboard() {
  const { data: users, loading, error, refetch } = useUsers();
  const { data: sessions } = useSessions();

  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage error={error} />;

  return (
    <div>
      {users?.data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

### Using Services Directly

```tsx
import { usersService } from './services/api';

async function updateProfile(userId: string, data: Partial<User>) {
  const response = await usersService.updateProfile(userId, data);
  
  if (response.success) {
    console.log('Profile updated!', response.data);
  } else {
    console.error('Error:', response.error);
  }
}
```

## Environment Variables

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# App Configuration
VITE_APP_ENV=development
VITE_APP_NAME=SkillSwap
```

## Available Scripts

```bash
# Development
pnpm dev              # Start dev server

# Build
pnpm build            # Build for production
pnpm preview          # Preview production build

# Type Checking
pnpm type-check       # Run TypeScript compiler

# Linting
pnpm lint             # Run ESLint
```

## Full-Stack Setup

To set up the complete full-stack application:

1. **Read the Full-Stack Setup Guide:**
   ```
   See FULLSTACK_SETUP.md for detailed instructions
   ```

2. **Backend Examples:**
   ```
   See backend-example/ for Node.js backend structure
   ```

3. **API Documentation:**
   - All endpoints documented in FULLSTACK_SETUP.md
   - TypeScript types match backend models

## Migration from Mock Data to Real API

Currently using mock data from `src/app/data/mockData.ts`.

To migrate to real API:

1. ✅ Set up your backend (see `FULLSTACK_SETUP.md`)
2. ✅ Update `.env` with API URL
3. ✅ Replace mock data imports with custom hooks
4. ✅ Test each feature with real data

**Example:**

```tsx
// Before (Mock Data)
import { mockUsers } from '../data/mockData';
const users = mockUsers;

// After (Real API)
import { useUsers } from '../hooks';
const { data: users, loading, error } = useUsers();
```

## Deployment

### Frontend (Vite)

**Build for production:**
```bash
pnpm build
```

**Deploy `dist/` folder to:**
- Vercel (Recommended for Vite)
- Netlify
- AWS S3 + CloudFront
- Any static hosting

**Environment variables** must be set in your hosting platform.

### Backend

See `backend-example/README.md` for backend deployment instructions.

## Contributing

1. Create a feature branch
2. Make your changes
3. Write/update tests
4. Submit a pull request

## Code Quality

- **TypeScript** - Strict mode enabled
- **ESLint** - Code linting
- **Prettier** - Code formatting (recommended)
- **Error Boundaries** - Production error handling

## Future Enhancements

- [ ] Real-time chat with WebSocket
- [ ] Video calling with WebRTC
- [ ] Push notifications
- [ ] Email notifications
- [ ] Advanced search and filters
- [ ] User profile verification
- [ ] Payment integration (optional premium features)
- [ ] Mobile app (React Native)
- [ ] Admin dashboard

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue on GitHub
- Check the documentation
- Review the example code

## Acknowledgments

- Inter font by Google Fonts
- Icons by Lucide
- Animations by Motion (Framer Motion)
- UI inspiration from modern SaaS applications
