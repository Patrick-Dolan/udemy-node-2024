// Assignment objectives
// [X] Create a npm project and install Express.js, and a template engine of your choice.
// Add two routes:
//  [X] "/" will hold a <form> that allows users to input their name
//  [ ] "/users" outputs a <ul> with the user names (or some error text)
// [ ] use layouts/partials in whatever template engine you use.


// Third party packages
const express = require('express');

// Local imports
const userRoutes = require('./routes/users');

// App
const app = express();

app.use(userRoutes);

app.use('/', (req, res) => {
  res.write('<h1>Page not found.</h1>');
});

app.listen(3000);