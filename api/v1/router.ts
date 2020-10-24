import {Request, Response} from 'express';

const express = require('express');
const router = express.Router();

router.get('/', function (req: Request, res: Response) {
  res.json({ test: 'testing6', });
});

module.exports = router;
