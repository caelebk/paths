import { Request, Response } from 'express';

export function logger(req: Request, res: Response, next) {
  console.log('Endpoint: ', req.path);
  console.log('Query: ', req.query);
  console.log('Body: ', req.body);
  next();
}
