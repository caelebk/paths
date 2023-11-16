import {
  createUser,
  deleteUser,
  getProfile,
  loginUser,
  updateProfile,
} from '@controller/UserController';
import { Router } from 'express';

export const userRouter: Router = Router();

userRouter.post('/api/users', createUser);

userRouter.post('/api/users/login', loginUser);

userRouter.get('/api/users/:id', getProfile);

userRouter.put('/api/users/:id', updateProfile);

userRouter.delete('/api/users/:id', deleteUser);
