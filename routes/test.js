var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('productpage-test', { data: ['lol1','lol2','s','sss','ff', 'xsd'], title: 'Wvss Testing Crew'});
});
router.get('/product', function(req, res, next) {
  res.render('detail-product', {data: ['lol1','lol2','s','sss','ff', 'xsd'], title: 'Wvss Testing Crew'});
});
router.get('/orders', function(req, res, next) {
  res.render('orders', {title: 'Your Orders - wvss'});
});
router.get('/account', function(req, res, next) {
  res.render('account', {title: 'Account Information -wvss'});
});
router.get('/admin', function(req, res, next) {
  res.render('admin', {title: 'Admin Panel - wvss'});
});

module.exports = router;
