const server = require('./server');

console.log(process.env);
const port = process.env.port || 4000;

server.listen(port, () => {
  console.info(`Server started on port ${port}`);
});

module.exports = server;
