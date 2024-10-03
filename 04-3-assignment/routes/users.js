const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('add-user', { docTitle: 'Add User' });
});

router.get('/users', (req, res) => {
  res.render('users', { docTitle: 'Users' });
});

router.post('/add-user', (req, res) => {
  console.log('Post request reached for /add-user');
  res.redirect('/');
});

module.exports = router;