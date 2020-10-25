import {Request, Response} from "express";
import {QuoteController} from "../controllers/QuoteController";
const express = require('express');

const quoteController = new QuoteController();
const quoteRouter = express.Router()

quoteRouter.get('/', async (req: Request, res: Response) => {
  const quotes = await quoteController.all();
  res.json({quotes});
});

quoteRouter.get('/:id', async (req: Request, res: Response) => {
  const quote = await quoteController.one(req);

  if (typeof quote === 'undefined') {
    res.status(404);
    res.json({error: 'Not found'});
  } else {
    res.json({quote});
  }
});

quoteRouter.post('/', async (req: Request, res: Response) => {
  const quote = await quoteController.save(req);
  res.json(quote);
});

export default quoteRouter;
