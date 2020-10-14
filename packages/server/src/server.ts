/* eslint-disable no-console */
import 'reflect-metadata';
import './database/connection';

import express from 'express';
import path from 'path';
import Routes from './routes';

const app = express();

app.use(express.json());
app.use(Routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

const PORT = 3333;

app.listen(PORT, () => { console.log(`Server start on port ${PORT}`); });
