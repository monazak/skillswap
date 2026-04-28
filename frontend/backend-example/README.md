# Backend Example for SkillSwap

This folder contains example backend code structure for your Node.js API.

## Quick Start

1. Create a new `backend` directory in your project root
2. Copy the structure and files from this example
3. Run `npm install` to install dependencies
4. Set up your `.env` file
5. Run `npm run dev` to start the server

## File Structure

```
backend/
├── src/
│   ├── server.ts           # Entry point
│   ├── app.ts              # Express app configuration
│   ├── controllers/        # Route handlers
│   │   ├── auth.controller.ts
│   │   ├── users.controller.ts
│   │   └── sessions.controller.ts
│   ├── routes/             # API routes
│   │   ├── auth.routes.ts
│   │   ├── users.routes.ts
│   │   └── sessions.routes.ts
│   ├── middleware/         # Custom middleware
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   ├── models/             # Database models (Prisma/Mongoose)
│   ├── services/           # Business logic
│   ├── utils/              # Helper functions
│   └── config/             # Configuration
├── prisma/                 # Prisma schema (if using PostgreSQL)
│   └── schema.prisma
├── .env
├── package.json
└── tsconfig.json
```

## Dependencies

```json
{
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "bcryptjs": "^2.4.3",
    "jsonwebtoken": "^9.0.2",
    "zod": "^3.22.4",
    "@prisma/client": "^5.7.0"
  },
  "devDependencies": {
    "@types/express": "^4.17.21",
    "@types/cors": "^2.8.17",
    "@types/node": "^20.10.5",
    "@types/bcryptjs": "^2.4.6",
    "@types/jsonwebtoken": "^9.0.5",
    "typescript": "^5.3.3",
    "tsx": "^4.7.0",
    "nodemon": "^3.0.2",
    "prisma": "^5.7.0"
  }
}
```

## Environment Variables

Create a `.env` file:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL=postgresql://user:password@localhost:5432/skillswap
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRES_IN=7d
CORS_ORIGIN=http://localhost:5173
```

## Example Files

See the `examples/` directory for:
- `server.ts` - Express server setup
- `auth.controller.ts` - Authentication endpoints
- `users.controller.ts` - User management endpoints
- `auth.middleware.ts` - JWT authentication middleware
- `prisma/schema.prisma` - Database schema

## Running the Backend

```bash
# Install dependencies
npm install

# Run Prisma migrations (if using Prisma)
npx prisma migrate dev

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## API Testing

Use tools like:
- Postman
- Insomnia
- Thunder Client (VS Code extension)
- curl commands

## Frontend Integration

The frontend is already configured to connect to `http://localhost:3000/api`.

Make sure to:
1. Start the backend on port 3000
2. Start the frontend on port 5173
3. The frontend will automatically connect to your API
