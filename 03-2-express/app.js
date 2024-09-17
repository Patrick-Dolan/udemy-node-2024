// Import express
const express = require('express');

// Create app object by calling express
const app = express();

// The .use() method is what controls the middleware
// The order and paths given to middleware matter
// This first one will run every time no matter the path given
// If you take off the next call it won't run the other paths since that tells the middleware to forward the request to the next one
app.use('/', (req, res, next) => {
  console.log("Always runs");
  next();
});

// An example of a path, uses the .send method to give response
app.use('/add-product', (req, res, next) => {
  res.send('<h1>Add product!</h1>');
});

// This is the default that will run if no other path is matched
app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

// This creates the server and listens on port given
app.listen(3000);