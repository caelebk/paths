import { Router } from 'express';
import {
  createPath,
  deletePath,
  getPath,
  getPathApplications,
  getUserPaths,
  updatePath,
} from '@controller/PathController';

export const pathRouter: Router = Router();

pathRouter.post('/api/paths', createPath);

pathRouter.get('/api/paths', getUserPaths);

pathRouter.get('/api/paths/:id', getPath);

pathRouter.put('/api/paths/:id', updatePath);

pathRouter.delete('/api/paths/:id', deletePath);

pathRouter.get('/api/paths/:id/applications', getPathApplications);
