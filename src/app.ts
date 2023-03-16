import "dotenv/config";
import express from 'express';
import cors from 'cors';
import { router }  from './routes';
import models from './models/index';
import helmet from "helmet";

const app = express();
//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// habilitar carpeta publica
app.use(express.static("uploads"));
app.use(router);
app.use(helmet);

export default app;
