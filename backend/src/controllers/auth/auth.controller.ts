import type { Request, Response } from 'express';
import * as authService from '../../services/auth/auth.service.js';

export const signup = async (req: Request, res: Response) => {
  try {
    const { name, email, password, ...safeUser} = req.body;

    const user = await authService.signup(name, email, password);
    
    res.status(201).json({
      success: true,
      data: safeUser,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password, ...safeUser } = req.body;

    const result = await authService.login(email, password);

    res.json({
      success: true,
      data: {
        user:safeUser, 
        token:result.token
      }
    });
  } catch (error: any) {
    res.status(401).json({
      success: false,
      error: error.message,
    });
  }
};