const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req);
  // process.exit(); Can be used to exit the event loop and end the program.
});

server.listen(3000);