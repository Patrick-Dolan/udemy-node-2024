// Assignment objectives:
// [X] Spin up Node.js server on port 3000
// [X] Handle two routes: "/" and "/users"
//     [X] Return some greeting text on "/"
//     [X] Return a list of dummy users (e.g. <ul><li>User 1</li></ul>)
// [ ] Add a form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click

const http = require('http');
const requestHandler = require('./routes');

const server = http.createServer(requestHandler)

server.listen(3000);