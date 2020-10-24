// @ts-ignore
const express = require('express');
const bodyParser = require('body-parser');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./v1/router');
require('dotenv').config()

/**
 * Express instance
 * @public
 */
const server = express();

// parse body params and attache them to req.body
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
server.use(compress());

// secure servers by setting various HTTP headers
server.use(helmet());

// enable CORS - Cross Origin Resource Sharing
server.use(cors());

// mount api v1 routes
server.use('/api/v1', routes);

server.use('/*', (req: any, res: any) => {
  res.status(404);
  res.json({ error: 'Not found' });
});

require('reflect-metadata');

const port = process.env.port || 4000;

server.listen(port, () => {
  console.info(`Server started on port ${port}`);
});

module.exports.default = server;
