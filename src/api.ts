import express, { Application } from 'express';

import config from './config';
import ErrorMiddleware from './middlewares/errors/errorConverterMiddleware'
import notFoundMiddleware from './middlewares/notFoundMiddleware';
import router from './routes';
import morgan from 'morgan';

const api: Application = express();
const basePath = '/api';

api.use(express.json());
api.use(express.urlencoded({ extended: true }));

if (config.env !== 'production') {
  api.use(morgan('dev'));
}

api.use(basePath, router);

api.use(ErrorMiddleware);
api.use(notFoundMiddleware);

try {
  api.listen(config.port, () => {
    console.log(`Server starte on localhost:${config.port} (${config.env})`);
  })
} catch (error: any) {
  console.log(`Error occurred: ${error.message}`)
}
