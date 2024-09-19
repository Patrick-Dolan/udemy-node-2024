// Assignment objectives
// [X] Create a npm project and install Express.js (Nodemon too if you want)
// [X] Create an Express.js app which serves two HTML files for "/" and "/users"
// [X] Add some static (.js or .css) files to your project that should be required by at least one of your HTML files. 

const express = require('express');
const path = require('path');
const userRoutes = require('./routes/users');
const rootDir = require('./utils/rootDir');

const app = express();
app.use(express.static(path.join(rootDir, 'public')));

app.use(userRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', 'page-not-found.html'));
});

app.listen(3000);