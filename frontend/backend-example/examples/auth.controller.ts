// Example auth.controller.ts
import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// This is a simplified example - in production, use Prisma/Mongoose models

interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

// Helper to generate JWT token
function generateToken(userId: string): string {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET!,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
  );
}

export const signup = async (
  req: Request<{}, {}, SignupRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, email, password } = req.body;

    // Validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please provide name, email, and password',
      });
    }

    // Check if user already exists
    // const existingUser = await prisma.user.findUnique({ where: { email } });
    // if (existingUser) {
    //   return res.status(409).json({
    //     success: false,
    //     error: 'User with this email already exists',
    //   });
    // }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Create user in database
    // const user = await prisma.user.create({
    //   data: {
    //     name,
    //     email,
    //     passwordHash,
    //     credits: 3, // Initial credits
    //   },
    // });

    // Mock user response
    const user = {
      id: '1',
      name,
      email,
      avatar: '',
      bio: '',
      skillsOffered: [],
      skillsWanted: [],
      rating: 0,
      completedSessions: 0,
      credits: 3,
    };

    // Generate JWT token
    const token = generateToken(user.id);

    res.status(201).json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio,
          skillsOffered: user.skillsOffered,
          skillsWanted: user.skillsWanted,
          rating: user.rating,
          completedSessions: user.completedSessions,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request<{}, {}, LoginRequest>,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        error: 'Please provide email and password',
      });
    }

    // Find user
    // const user = await prisma.user.findUnique({ where: { email } });
    // if (!user) {
    //   return res.status(401).json({
    //     success: false,
    //     error: 'Invalid credentials',
    //   });
    // }

    // Mock user
    const user = {
      id: '1',
      name: 'Test User',
      email,
      passwordHash: await bcrypt.hash('password123', 10),
      avatar: '',
      bio: '',
      skillsOffered: [],
      skillsWanted: [],
      rating: 0,
      completedSessions: 0,
    };

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.passwordHash);
    if (!isValidPassword) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials',
      });
    }

    // Generate token
    const token = generateToken(user.id);

    res.json({
      success: true,
      data: {
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          avatar: user.avatar,
          bio: user.bio,
          skillsOffered: user.skillsOffered,
          skillsWanted: user.skillsWanted,
          rating: user.rating,
          completedSessions: user.completedSessions,
        },
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

export const getCurrentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // User ID is added to req by auth middleware
    const userId = (req as any).userId;

    // Fetch user from database
    // const user = await prisma.user.findUnique({
    //   where: { id: userId },
    // });

    // if (!user) {
    //   return res.status(404).json({
    //     success: false,
    //     error: 'User not found',
    //   });
    // }

    // Mock user
    const user = {
      id: userId,
      name: 'Test User',
      email: 'test@example.com',
      avatar: '',
      bio: '',
      skillsOffered: [],
      skillsWanted: [],
      rating: 0,
      completedSessions: 0,
    };

    res.json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const logout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // In a more complex setup, you might invalidate the token here
    // For JWT, logout is typically handled client-side by removing the token

    res.json({
      success: true,
      message: 'Logged out successfully',
    });
  } catch (error) {
    next(error);
  }
};
