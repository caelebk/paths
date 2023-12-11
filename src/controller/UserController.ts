import { Request, Response } from 'express';
import { prisma } from '@prisma/db';
import bcrypt from 'bcryptjs';
import { User } from '@prisma/client';
import passport from 'passport';

/**
 * Creates user account in the database
 *  - Don't create user if email or username already exist in the database.
 * @param req - request object
 * @param res - response object
 * @returns - response object
 */
export async function createUser(req: Request, res: Response) {
  const { username, password, email, firstName } = req.body;
  if (!username || !password || !email || !firstName) {
    res.json({ success: false });
  }

  const user = await prisma.user.findUnique({
    where: {
      username: username,
      email: email,
    },
  });

  if (user) {
    console.log('user found, register failed.');
    return res.json({ success: false });
  }

  const encyptedPassword = await bcrypt.hash(password, 10);

  try {
    console.log('create user');
    const createUser = await prisma.user.create({
      data: {
        username: username,
        password: encyptedPassword,
        email: email,
        firstName: firstName,
      },
    });
    return res.json({ success: true, user: createUser });
  } catch (error) {
    console.log('DB error');
    return res.json({ success: false });
  }
}

export async function loginUser() {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/fail',
  });
}

export async function deleteUser(req: Request, res: Response) {}

export async function getProfile(req: Request, res: Response) {}

export async function updateProfile(req: Request, res: Response) {}
