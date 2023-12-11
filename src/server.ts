import express, { Express } from 'express';
import cors from 'cors';
import config from '@secret/config.json';
import passportLocal from 'passport-local';
import passport from 'passport';
import logger from 'morgan';
import session from 'express-session';
import { userRouter } from '@routes/UserRoutes';
import { applicationRouter } from '@routes/ApplicationRoutes';
import { pathRouter } from '@routes/PathRoutes';
import { linkRouter } from '@routes/LinkRoutes';
import { tagRouter } from '@routes/TagRoutes';
import { documentRouter } from '@routes/DocumentRoutes';
import { User } from '@prisma/client';
import { prisma } from './prisma/db';
import { verifyUser } from './middleware/VerifyUser';

const port = config.port || 3000;
const app: Express = express();
const LocalStrategy = passportLocal.Strategy;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
  }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(userRouter);
app.use(applicationRouter);
app.use(pathRouter);
app.use(linkRouter);
app.use(tagRouter);
app.use(documentRouter);

passport.use(new LocalStrategy(verifyUser));

passport.serializeUser((user: User, done) => {
  process.nextTick(function () {
    done(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(async (id: number, done) => {
  process.nextTick(function () {
    return done(null, id);
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
