// Assignment objectives
// [X] Create a npm project and install Express.js, and a template engine of your choice.
// Add two routes:
//  [X] "/" will hold a <form> that allows users to input their name
//  [X] "/users" outputs a <ul> with the user names (or some error text)
// [X] use layouts/partials in whatever template engine you use.

// Core imports
const path = require('path');

// Third party packages
const express = require('express');
const bodyParser = require('body-parser');

// Local imports
const userRoutes = require('./routes/users');

// App
const app = express();

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(userRoutes);

app.use('/', (req, res) => {
  res.write('<h1>Page not found.</h1>');
});

app.listen(3000);