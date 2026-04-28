import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { users } from '../../models/user.model.js';
import type { User} from '../../models/user.model.js';
const JWT_SECRET = process.env.JWT_SECRET || 'secret';

export const signup = async (name: string, email: string, password: string) => {
  const existingUser = users.find(u => u.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: Date.now().toString(),
    name,
    email,
    password: hashedPassword,
  };

  users.push(newUser);

  return newUser;
};

export const login = async (email: string, password: string) => {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('Invalid credentials');

  const isValid = await bcrypt.compare(password, user.password);
  if (!isValid) throw new Error('Invalid credentials');

  const token = jwt.sign({ id: user.id }, JWT_SECRET, {
    expiresIn: '7d',
  });

  return { user, token };
};