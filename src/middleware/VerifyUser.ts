import { User } from '@prisma/client';
import { prisma } from '@prisma/db';
import bcrypt from 'bcryptjs';

export async function verifyUser(username: string, password: string, done) {
  try {
    const user: User = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });
    if (!user) {
      console.log('user doesnt exist');
      return done(null, false, { message: 'Incorrect Username or Password.' });
    }
    const isCorrectPassword = bcrypt.compareSync(password, user.password);
    if (!isCorrectPassword) {
      console.log('wrong password');
      return done(null, false, { message: 'Incorrect Username or Password.' });
    }
    return done(null, user);
  } catch (error) {
    return done(error);
  }
}
