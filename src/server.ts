import express, { Express } from 'express';
import cors from 'cors';
import config from '@secret/config.json';
import { userRouter } from '@routes/UserRoutes';
import { applicationRouter } from '@routes/ApplicationRoutes';
import { pathRouter } from '@routes/PathRoutes';
import { linkRouter } from '@routes/LinkRoutes';
import { tagRouter } from '@routes/TagRoutes';
import { documentRouter } from '@routes/DocumentRoutes';
import { logger } from './middleware/logger';

const port = config.port || 3000;
const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(logger);
app.use(userRouter);
app.use(applicationRouter);
app.use(pathRouter);
app.use(linkRouter);
app.use(tagRouter);
app.use(documentRouter);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
