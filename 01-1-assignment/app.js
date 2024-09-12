// Assignment objectives:
// [X] Spin up Node.js server on port 3000
// [X] Handle two routes: "/" and "/users"
//     [X] Return some greeting text on "/"
//     [X] Return a list of dummy users (e.g. <ul><li>User 1</li></ul>)
// [X] Add a form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click
// [X] Add the "/create-user" route and parse the incoming data (i.e. the username) and simply log it to the console


const http = require('http');
const requestHandler = require('./routes');

const server = http.createServer(requestHandler)

server.listen(3000);