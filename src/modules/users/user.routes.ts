import { Router } from 'express';
import { getAllUsers, getUserById, updateUser } from './user.controller';
import { authenticate, authorize } from '../../middleware/auth.middleware';
import { validate } from '../../middleware/validate.middleware';
import { updateUserSchema, getUserSchema } from '../../validations/user.validation';

const router = Router();

router.get('/', authenticate, authorize('ADMIN'), getAllUsers);
router.get('/:id', authenticate, validate(getUserSchema), getUserById);
router.put('/:id', authenticate, validate(updateUserSchema), updateUser);

export default router;
