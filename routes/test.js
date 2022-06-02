var express = require('express');
var router = express.Router();
var db=require('../database');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productpage-test', { data: ['lol1','lol2','s','sss','ff', 'xsd'], title: 'Wvss Testing Crew', isAuthed: req.session.isAuth, user: req.session.userInfo});
});
router.get('/product', function(req, res, next) {
  res.render('detail-product', {productData: ['lol1','lol2','s','sss','ff', 'xsd'], title: 'Wvss Testing Crew', isAuthed: req.session.isAuth, user: req.session.userInfo});
});
router.get('/orders', function(req, res, next) {
  res.render('orders', {title: 'Wvss Testing Crew', isAuthed: req.session.isAuth, user: req.session.userInfo});
});
router.get('/admin', function(req, res, next) {
  if (req.session.isAdminAuth) {
    

    var sql='SELECT * FROM primaryproducts';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('admin', { title: 'Admin Panel - wvss', productData: data, isAuthed: req.session.isAuth, user: req.session.userInfo});
    });
  }
  else {
    return res.redirect('../users/login');

  }

});

router.post('/uploadproduct', async (req, res, next) => {
  console.log("hi");

  console.log(req.body.productName);

  var sku = Math.floor(100000 + Math.random() * 900000);
  //insert values
  if(req.body.productName !== null && req.body.price !== null) {
    var insertSql='INSERT INTO primaryproducts (sku, name, price) VALUES ('+db.escape(sku)+', '+db.escape(req.body.productName)+', '+db.escape(req.body.productPrice)+');';
    db.query(insertSql, async (err, data, fields) => {
      if (err) throw err;
    });
  }

  
});


router.get('/account', function(req, res, next) {
  res.render('account', {title: 'Account Info - wvss', isAuthed: req.session.isAuth, user: req.session.userInfo});
});
router.get('/cart', function(req, res, next) {
  res.render('cart', {title: 'Your Cart'});
});


module.exports = router;
