import { Router } from 'express';
import {
  createTag,
  deleteTag,
  getTag,
  getUserTags,
  updateTag,
} from '@controller/TagController';

export const tagRouter: Router = Router();

tagRouter.get('/api/tags', getUserTags);

tagRouter.post('/api/tags', createTag);

tagRouter.get('/api/tags/:id', getTag);

tagRouter.put('/api/tags/:id', updateTag);

tagRouter.delete('/api/tags/:id', deleteTag);
