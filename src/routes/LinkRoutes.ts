import { Router } from 'express';
import {
  createLink,
  deleteLink,
  getLink,
  getUserLinks,
  updateLink,
} from '@controller/LinkController';

export const linkRouter: Router = Router();

linkRouter.get('/api/links', getUserLinks);

linkRouter.post('/api/links', createLink);

linkRouter.get('/api/links/:id', getLink);

linkRouter.put('/api/links/:id', updateLink);

linkRouter.delete('/api/links/:id', deleteLink);
