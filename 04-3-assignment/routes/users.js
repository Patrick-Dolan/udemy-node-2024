const path = require('path');

const express = require('express');
const router = express.Router();

const users = [];

router.get('/', (req, res) => {
  res.render('add-user', { docTitle: 'Add User' });
});

router.get('/users', (req, res) => {
  res.render('users', { docTitle: 'Users', users: users });
});

router.post('/add-user', (req, res) => {
  users.push({ username: req.body.user });
  res.redirect('/users');
});

module.exports = router;