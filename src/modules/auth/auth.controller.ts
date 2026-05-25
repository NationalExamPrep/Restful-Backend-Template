import { Response } from 'express';
import { AuthService } from './auth.service';
import { sendResponse } from '../../utils/response.util';
import { tryCatch } from '../../utils/tryCatch';
import { AuthRequest } from '../../middleware/auth.middleware';

const authService = new AuthService();

export const register = tryCatch(async (req: AuthRequest, res: Response) => {
  const result = await authService.register(req.body);
  return sendResponse(res, 201, 'User registered successfully', result);
});

export const login = tryCatch(async (req: AuthRequest, res: Response) => {
  const result = await authService.login(req.body);
  return sendResponse(res, 200, 'Login successful', result);
});

export const getMe = tryCatch(async (req: AuthRequest, res: Response) => {
  const user = await authService.getMe(req.user!.userId);
  return sendResponse(res, 200, 'User retrieved successfully', user);
});
