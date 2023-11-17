import { Router } from 'express';
import {
  createTag,
  deleteTag,
  getTag,
  getUserTags,
  updateTag,
} from '@controller/TagController';

export const documentRouter: Router = Router();

documentRouter.get('/api/tags', getUserTags);

documentRouter.post('/api/tags', createTag);

documentRouter.get('/api/tags/:id', getTag);

documentRouter.put('/api/tags/:id', updateTag);

documentRouter.delete('/api/tags/:id', deleteTag);
