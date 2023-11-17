import { Router } from 'express';
import {
  addApplicationTag,
  createApplication,
  deleteApplication,
  getApplication,
  getApplicationTags,
  removeApplicationTag,
  updateApplication,
} from '@controller/ApplicationController';

export const applicationRouter: Router = Router();

applicationRouter.post('/api/applications', createApplication);

applicationRouter.get('/api/applications/:id', getApplication);

applicationRouter.put('/api/applications/:id', updateApplication);

applicationRouter.delete('/api/applications/:id', deleteApplication);

applicationRouter.get('/api/applications/:id/tags', getApplicationTags);

applicationRouter.post('/api/applications/:id/tags', addApplicationTag);

applicationRouter.delete(
  '/api/applications/:id/tags/:tagID',
  removeApplicationTag,
);
