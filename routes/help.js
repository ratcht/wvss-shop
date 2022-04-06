var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('partialtest', { data: ['lol1','lol2','s','sss','ff'] });
});

module.exports = router;
