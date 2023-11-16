import { Router } from 'express';
import {
  createApplication,
  deleteApplication,
  getApplication,
  updateApplication,
} from '@controller/ApplicationController';

export const applicationRouter: Router = Router();

applicationRouter.post('/api/applications', createApplication);

applicationRouter.get('/api/applications/:id', getApplication);

applicationRouter.put('/api/applications/:id', updateApplication);

applicationRouter.delete('/api/applications/:id', deleteApplication);
