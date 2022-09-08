var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var db=require('../database');


//Cart order
// 0 - SKU
// 1 - color
// 2 - size
// 3 - quantity
// 4 - price
// 5 - name
// 6 - description


router.get('/', function(req, res, next) {
  res.render('cart-page', {  title: 'Cart Page', isAuthed: req.session.isAuth, user: req.session.userInfo, cartInfo: req.session.cart});
});

router.post('/add/', async (req, res, next) => {

  console.log("price: "+req.body.price);
  const cart = [req.body.sku, req.body.color, req.body.size, req.body.quantity, req.body.price, req.body.name, req.body.description]

  req.session.cart.push(cart);
  console.log(req.session.cart);

  return res.redirect('/cart');

});


router.post('/change/', async (req, res, next) => {
  console.log("change");

  if (parseFloat(req.body.quantity) == 0) return res.redirect('/cart/delete/'+req.body.index);
  
  let item = req.session.cart[req.body.index];
  item[3] = req.body.quantity;

  console.log(item[3]);

  return res.redirect('/cart');
});


router.get('/delete/:index', async (req, res, next) => {

  req.session.cart.splice(req.param("index"), 1);
  return res.redirect('/cart');

});







module.exports = router;