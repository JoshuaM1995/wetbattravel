import {Request, Response} from "express";
import {QuoteController} from "./controllers/QuoteController";

const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const quoteController = new QuoteController();
require('dotenv').config()

/**
 * Express instance
 * @public
 */
const server = express();

// parse body params and attache them to req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));

// gzip compression
server.use(compress());

// secure servers by setting various HTTP headers
server.use(helmet());

// enable CORS - Cross Origin Resource Sharing
server.use(cors());

server.get('/api/quotes', async (req: Request, res: Response) => {
  const quotes = await quoteController.all();
  res.json({quotes});
});

server.get('/api/quote/:id', async (req: Request, res: Response) => {
  const quote = await quoteController.one(req);

  if (typeof quote === 'undefined') {
    res.status(404);
    res.json({error: 'Not found'});
  } else {
    res.json({quote});
  }
});

server.post('/api/quote/', async (req: Request, res: Response) => {
  const quote = await quoteController.save(req);
  res.json(quote);
});

server.use('/*', (req: any, res: any) => {
  res.status(404);
  res.json({error: 'Not found'});
});

require('reflect-metadata');

const port = process.env.port || 4000;

server.listen(port, () => {
  console.info(`Server started on port ${port}`);
});

module.exports.default = server;
