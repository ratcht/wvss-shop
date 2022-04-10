var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { data: ['lol1','lol2','s','sss','ff'], title: 'Wvss Shop - Home'});
});
router.get('/help', function(req, res, next) {
  res.render('help', { title: 'Express' });
});

module.exports = router;
