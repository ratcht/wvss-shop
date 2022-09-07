var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var db=require('../database');

router.get('/', function(req, res, next) {
  res.render('cart-page', {  title: 'Cart Page', isAuthed: req.session.isAuth, user: req.session.userInfo, cartInfo: req.session.cart});
});

router.post('/add/:tagId', async (req, res, next) => {

  console.log("price: "+req.body.price);
  const cart = [req.param("tagId"), req.body.color, req.body.size, req.body.quantity, req.body.price, req.body.name, req.body.description]

  req.session.cart.push(cart);
  console.log(req.session.cart);

  return res.redirect('/cart');

});




module.exports = router;