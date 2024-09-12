// Assignment objectives:
// [X] Spin up Node.js server on port 3000
// [ ] Handle two routes: "/" and "/users"
//     [ ] Return some greeting text on "/"
//     [ ] Return a list of dummy users (e.g. <ul><li>User 1</li></ul>)
// [ ] Add a form with a "username" <input> to the "/" page and submit a POST request to "/create-user" upon a button click

const http = require('http');

const server = http.createServer((req, res) => {
  console.log("Server running.");
})

server.listen(3000);