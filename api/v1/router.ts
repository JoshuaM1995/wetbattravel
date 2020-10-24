import {Request, Response} from 'express';
import database from '../database';
import {Quote} from "../entities/Quote";

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  const quote = await database.then((connection) => {
    return connection.getRepository(Quote).findOne(1);
  });
});

export default router;
