# SkillSwap Full-Stack Setup Guide

This guide will help you set up the complete SkillSwap application with a Node.js backend.

## Project Structure

```
skillswap/
├── frontend/              # React + Vite frontend (current project)
│   ├── src/
│   │   ├── app/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── layouts/
│   │   │   ├── hooks/       # Custom React hooks
│   │   │   ├── services/    # API service layer
│   │   │   ├── types/       # TypeScript interfaces
│   │   │   ├── utils/       # Helper functions
│   │   │   └── config/      # Constants and config
│   │   └── styles/
│   └── package.json
│
└── backend/               # Node.js + Express backend (to be created)
    ├── src/
    │   ├── controllers/
    │   ├── models/
    │   ├── routes/
    │   ├── middleware/
    │   ├── services/
    │   ├── utils/
    │   └── config/
    ├── .env
    └── package.json
```

## Frontend Setup (Current Project)

### Prerequisites
- Node.js 18+ and pnpm

### Installation

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```

3. **Configure the API URL in `.env`:**
   ```env
   VITE_API_BASE_URL=http://localhost:3000/api
   ```

4. **Start the development server:**
   ```bash
   pnpm dev
   ```

The frontend will run on `http://localhost:5173`

## Backend Setup (To Be Created)

### Recommended Tech Stack

- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Database:** PostgreSQL or MongoDB
- **ORM:** Prisma (PostgreSQL) or Mongoose (MongoDB)
- **Authentication:** JWT
- **Validation:** Zod or Joi
- **API Documentation:** Swagger/OpenAPI

### Backend Structure

Create a new folder `backend/` and set it up:

```bash
mkdir backend && cd backend
npm init -y
npm install express cors dotenv bcryptjs jsonwebtoken
npm install -D typescript @types/node @types/express @types/cors tsx nodemon
```

### Backend `.env` Example

```env
# Server
PORT=3000
NODE_ENV=development

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/skillswap
# OR for MongoDB:
# MONGODB_URI=mongodb://localhost:27017/skillswap

# JWT
JWT_SECRET=your-super-secret-jwt-key
JWT_EXPIRES_IN=7d

# CORS
CORS_ORIGIN=http://localhost:5173
```

## API Endpoints to Implement

### Authentication
```
POST   /api/auth/signup      - Register new user
POST   /api/auth/login       - Login user
POST   /api/auth/logout      - Logout user
GET    /api/auth/me          - Get current user
POST   /api/auth/refresh     - Refresh JWT token
```

### Users
```
GET    /api/users            - Get all users (with filters)
GET    /api/users/:id        - Get user by ID
PATCH  /api/users/:id        - Update user profile
GET    /api/users/search     - Search users
GET    /api/users/:id/matches - Get user matches
```

### Sessions
```
GET    /api/sessions         - Get all sessions
GET    /api/sessions/:id     - Get session by ID
POST   /api/sessions         - Create new session (booking)
PATCH  /api/sessions/:id     - Update session
POST   /api/sessions/:id/cancel - Cancel session
POST   /api/sessions/:id/complete - Complete session
```

### Notifications
```
GET    /api/notifications    - Get all notifications
PATCH  /api/notifications/:id/read - Mark as read
POST   /api/notifications/read-all - Mark all as read
DELETE /api/notifications/:id - Delete notification
```

### Chats
```
GET    /api/chats            - Get all chats
GET    /api/chats/:id        - Get chat by ID
GET    /api/chats/:id/messages - Get chat messages
POST   /api/chats/:id/messages - Send message
POST   /api/chats/:id/read   - Mark messages as read
```

### Reviews
```
POST   /api/reviews          - Create review
GET    /api/reviews/:userId  - Get user reviews
```

## Database Schema

### Users Table
```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  avatar VARCHAR(255),
  bio TEXT,
  skills_offered TEXT[],
  skills_wanted TEXT[],
  rating DECIMAL(3,2) DEFAULT 0,
  completed_sessions INT DEFAULT 0,
  credits INT DEFAULT 3,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Sessions Table
```sql
CREATE TABLE sessions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id),
  partner_id UUID REFERENCES users(id),
  skill VARCHAR(255) NOT NULL,
  date DATE NOT NULL,
  time TIME NOT NULL,
  duration INT NOT NULL,
  status VARCHAR(50) DEFAULT 'upcoming',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

### Reviews Table
```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  from_user_id UUID REFERENCES users(id),
  to_user_id UUID REFERENCES users(id),
  session_id UUID REFERENCES sessions(id),
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## Development Workflow

### Running Both Frontend and Backend

1. **Terminal 1 - Backend:**
   ```bash
   cd backend
   npm run dev
   ```

2. **Terminal 2 - Frontend:**
   ```bash
   cd frontend  # or stay in root
   pnpm dev
   ```

### API Integration

The frontend is already set up to work with the backend:

1. **API Client** (`src/app/services/api/client.ts`): 
   - Handles all HTTP requests
   - Automatically adds JWT token to headers
   - Handles timeouts and errors

2. **Service Modules** (`src/app/services/api/`):
   - Each resource has its own service (users, sessions, etc.)
   - Ready to connect to your backend endpoints

3. **Custom Hooks** (`src/app/hooks/`):
   - Use these hooks in your components to fetch data
   - Example: `useUsers()`, `useSessions()`, `useNotifications()`

### Example Component Usage

```tsx
import { useUsers } from '../hooks';

function ExploreUsers() {
  const { data, loading, error, refetch } = useUsers();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {data?.data.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}
```

## Migrating from Mock Data

The app currently uses mock data (`src/app/data/mockData.ts`). To switch to real data:

1. **Set up your backend** with the database
2. **Update `.env`** with the correct API URL
3. **Replace mock data imports** with the custom hooks:

**Before:**
```tsx
import { mockUsers } from '../data/mockData';

function Dashboard() {
  const users = mockUsers;
  // ...
}
```

**After:**
```tsx
import { useUsers } from '../hooks';

function Dashboard() {
  const { data: users, loading, error } = useUsers();
  
  if (loading) return <LoadingSkeleton />;
  if (error) return <ErrorMessage error={error} />;
  // ...
}
```

## Production Deployment

### Frontend (Vite)
```bash
pnpm build
pnpm preview  # Test production build
```

Deploy `dist/` folder to:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting

### Backend (Node.js)
Deploy to:
- Railway
- Render
- AWS EC2/ECS
- DigitalOcean
- Heroku

## Next Steps

1. ✅ Frontend structure is ready
2. 🚧 Create backend following the structure above
3. 🚧 Implement authentication
4. 🚧 Set up database
5. 🚧 Implement API endpoints
6. 🚧 Test integration
7. 🚧 Deploy

## Additional Features to Implement

- Real-time chat (WebSocket/Socket.io)
- Video calling (WebRTC)
- Email notifications
- Password reset
- Profile picture upload
- Search with filters
- Pagination
- Rate limiting
- API documentation (Swagger)
- Unit tests
- Integration tests

## Resources

- [Express.js Documentation](https://expressjs.com/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [JWT Best Practices](https://jwt.io/introduction)
- [React Query](https://tanstack.com/query) (optional upgrade for data fetching)

## Support

If you need help setting up the backend, refer to the backend examples in the `examples/` folder (to be created).
