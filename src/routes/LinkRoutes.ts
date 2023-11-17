import { Router } from 'express';
import {
  createLink,
  deleteLink,
  getLink,
  getUserLinks,
  updateLink,
} from '@controller/LinkController';

export const documentRouter: Router = Router();

documentRouter.get('/api/links', getUserLinks);

documentRouter.post('/api/links', createLink);

documentRouter.get('/api/links/:id', getLink);

documentRouter.put('/api/links/:id', updateLink);

documentRouter.delete('/api/links/:id', deleteLink);
