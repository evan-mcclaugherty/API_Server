var express = require('express');
var router = express.Router();
var data = require('../public/javascripts/data.js')
/* GET home page. */
router.get('/data', function(req, res, next) {
  res.json(data);
});

module.exports = router;
