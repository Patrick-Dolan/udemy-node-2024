// Assignment objectives
// [X] 1. Create a npm project and install express.js (nodemon if you want)
// [X] 2. Create an express.js app which funnels the requests through 2 middleware functions that log something to the console and return one response
// [ ] 3. Handle requests "/" and "/users" such that each request only has on handler/middleware that does something with it (e.g. send dummy response)

const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log("Middleware 1");
  next();
});

app.use((req, res, next) => {
  console.log("Middleware 2");
  res.send("<h1>Its a response from Express!</h1>")
});

app.listen(3000);
