/* eslint-disable no-console */
import 'reflect-metadata';
import './database/connection';

import express from 'express';
import cors from 'cors';
import path from 'path';
import 'express-async-errors';
import Routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors());
app.use(express.json());
app.use(Routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

const PORT = 3333;

app.listen(PORT, () => { console.log(`Server start on port ${PORT}`); });
