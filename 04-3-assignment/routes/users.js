const path = require('path');

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'add-user.html'));
});

router.post('/add-user', (req, res) => {
  console.log('Post request reached for /add-user');
  res.redirect('/');
});

module.exports = router;