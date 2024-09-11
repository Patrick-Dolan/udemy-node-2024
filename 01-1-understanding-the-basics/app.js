const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  // process.exit(); Can be used to exit the event loop and end the program.
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head><title>Server response</title></head>')
  res.write(`<body><h1>${req.url}</h1></body>`)
  res.write('</html>')
  res.end();
});

server.listen(3000);