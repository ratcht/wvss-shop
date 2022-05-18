var express = require('express');
var router = express.Router();
var db=require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {

  return res.redirect('/home');
});



router.get('/home', function(req, res, next) {
  console.log("index");
  res.render('index', { data: ['lol1','lol2','s','sss','ff','cdf'], title: 'Wvss Shop - Home', isAuthed: req.session.isAuth, user: req.session.userInfo});
});



module.exports = router;
