import { Request, Response } from 'express';
import { prisma } from '@prisma/db';

/**
 * Creates user account in the database
 * @param req - request object
 * @param res - response object
 * @returns - response object
 */
export async function createUser(req: Request, res: Response) {
  const { username, password, email, firstName } = req.body;
  if (!username || !password || !email || !firstName) {
    res.json({ success: false });
  }

  try {
    const createUser = await prisma.user.create({
      data: {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
      },
    });
    res.json({ success: true, user: createUser });
  } catch (error) {
    return res.json({ success: false });
  }
}

export async function loginUser(req: Request, res: Response) {}

export async function deleteUser(req: Request, res: Response) {}

export async function getProfile(req: Request, res: Response) {}

export async function updateProfile(req: Request, res: Response) {}
