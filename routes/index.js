var express = require('express');
var router = express.Router();
var db=require('../database');


/* GET home page. */
router.get('/', function(req, res, next) {

  return res.redirect('/home');
});



router.get('/home', function(req, res, next) {
  console.log("index");
  var sql='SELECT * FROM primaryproducts';
  db.query(sql, function (err, data, fields) {
  if (err) throw err;
  res.render('index', { productData: data, title: 'Wvss Shop - Home', isAuthed: req.session.isAuth, user: req.session.userInfo});
});
});


module.exports = router;
