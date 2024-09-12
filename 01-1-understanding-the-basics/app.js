// Import from Node 
const http = require('http');
// Import from routes.js local file
const requestHandler = require("./routes");

// Here we have a basic routing system in just node code
const server = http.createServer(requestHandler);

// Sets up the port for the server to listen
server.listen(3000);