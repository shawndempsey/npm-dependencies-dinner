const http = require('http');
const { Taco } = require("npm-dependencies-taco");
const { Salad } = require("npm-dependencies-salad");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  const taco = new Taco();
  const salad = new Salad();

  res.end(`${taco.describe()}\n${salad.describe()}`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

