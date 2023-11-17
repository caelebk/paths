import { Router } from 'express';
import {
  createDocument,
  deleteDocument,
  getDocument,
  getUserDocuments,
  updateDocument,
  addDocumentTag,
  getDocumentTags,
  removeDocumentTag,
} from '@controller/DocumentController';

export const documentRouter: Router = Router();

documentRouter.get('/api/documents', getUserDocuments);

documentRouter.post('/api/documents', createDocument);

documentRouter.get('/api/documents/:id', getDocument);

documentRouter.put('/api/documents/:id', updateDocument);

documentRouter.delete('/api/documents/:id', deleteDocument);

documentRouter.get('/api/documents/:id/tags', getDocumentTags);

documentRouter.post('/api/documents/:id/tags', addDocumentTag);

documentRouter.delete('/api/documents/:id/tags/:tagID', removeDocumentTag);
