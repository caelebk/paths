import {
  createUser,
  deleteUser,
  getProfile,
  loginUser,
  updateProfile,
} from '@controller/UserController';
import { Router } from 'express';
import passport from 'passport';

export const userRouter: Router = Router();

userRouter.post('/api/users', createUser);

userRouter.post(
  '/api/users/login',
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/fail',
  }),
  loginUser,
);

userRouter.get('/api/users/:id', getProfile);

userRouter.put('/api/users/:id', updateProfile);

userRouter.delete('/api/users/:id', deleteUser);
