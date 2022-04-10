var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productpage', { data: ['lol1','lol2','s','sss','ff'], title: 'Wvss Testing Crew'});
});
router.get('/menu', function(req, res, next) {
  res.render('mainmenu', {title: 'Wvss Testing Crew'});
});

module.exports = router;
