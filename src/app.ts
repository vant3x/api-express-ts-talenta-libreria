import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router }  from './routes';
import models from './models/index';

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

export default app;
