import * as cookieParser from 'cookie-parser';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as hpp from 'hpp';
import * as logger from 'morgan';
import * as http from 'http';

import errorMiddleware from './middlewares/error.middleware';
import validateEnv from './utils/validateEnv';
import { router } from './routes';

validateEnv();

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8080;
const env = process.env.NODE_ENV === 'production' ? true : false;

// init middleware
if (env) {
  app.use(hpp());
  app.use(helmet());
  app.use(logger('combined'));
  // TODO: prod cors
  // this.app.use(cors({ origin: 'your.domain.com', credentials: true }));
} else {
  app.use(logger('dev'));
  app.use(cors({ origin: true, credentials: true }));
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(errorMiddleware);

// routers
app.use(router);

server.listen(port, () => {
  console.log(`🚀 App listening on the port ${port}`);
});
