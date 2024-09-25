const express = require('express');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('Shop Products: ', adminData.products);
  res.render('shop');
});

module.exports = router;