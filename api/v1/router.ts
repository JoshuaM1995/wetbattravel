import {Request, Response} from 'express';

const express = require('express');
const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  // sequelize.authenticate().then(() => {
  //   res.json({ message: 'Connection has been established successfully.' });
  // }).catch((error: any) => {
  //   res.json({ message: 'Connection failed', error });
  // });
});

export default router;
