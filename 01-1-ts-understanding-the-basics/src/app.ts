import http from "http";

const server = http.createServer((req, res) => {
  console.log("Connected...");
});

server.listen(3000);
