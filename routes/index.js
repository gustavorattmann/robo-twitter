var express = require('express');
var router = express.Router();

require('../src/admin');
require('../src/producer');
var {body} = require('../src/consumer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send(body)
});

module.exports = router;