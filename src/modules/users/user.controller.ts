import { Response } from 'express';
import { UserService } from './user.service';
import { sendResponse } from '../../utils/response.util';
import { tryCatch } from '../../utils/tryCatch';
import { AuthRequest } from '../../middleware/auth.middleware';

const userService = new UserService();

export const getAllUsers = tryCatch(async (req: AuthRequest, res: Response) => {
  const users = await userService.getAllUsers();
  return sendResponse(res, 200, 'Users retrieved successfully', users);
});

export const getUserById = tryCatch(async (req: AuthRequest, res: Response) => {
  const user = await userService.getUserById(req.params.id);
  return sendResponse(res, 200, 'User retrieved successfully', user);
});

export const updateUser = tryCatch(async (req: AuthRequest, res: Response) => {
  const user = await userService.updateUser(req.params.id, req.body);
  return sendResponse(res, 200, 'User updated successfully', user);
});
