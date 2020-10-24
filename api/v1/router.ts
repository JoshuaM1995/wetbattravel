import {Request, Response} from 'express';
import sequelize from '../sequelize';

const express = require('express');
const router = express.Router();

router.get('/', (req: Request, res: Response) => {
  sequelize.authenticate().then(() => {
    res.json({ message: 'Connection has been established successfully.' });
  }).catch((error: any) => {
    res.json({ message: 'Connection failed', error });
  });
});

module.exports = router;
