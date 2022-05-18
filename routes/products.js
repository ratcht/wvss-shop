var express = require('express');
var router = express.Router();
var db=require('../database');
// another routes also appear here
// this script to fetch data from MySQL databse table

router.get('/', function(req, res, next) {
    return res.redirect('/products/categories');
});


router.get('/categories', function(req, res, next) {
    var sql='SELECT * FROM primaryproducts';
    db.query(sql, function (err, data, fields) {
    if (err) throw err;
    res.render('productpage-test', { title: 'Product List', productData: data, isAuthed: req.session.isAuth, user: req.session.userInfo});
});
});

router.get('/item/:tagId', function(req, res, next) {
    // var sql='SELECT * FROM products';
    // db.query(sql, function (err, data, fields) {
    // if (err) throw err;

    var sql='SELECT * FROM primaryproducts';
    db.query(sql, function (err1, data1, fields) {
    if (err1) throw err1;

    var sqlItem='SELECT * FROM primaryproducts WHERE sku = ' + db.escape(req.param("tagId"));
    db.query(sqlItem, function (err2, data2, fields) {
    if (err2) throw err2;
    if (data2.length != 1) {
        return res.redirect('/categories');

    } else {
        res.render('detail-product', { title: 'Product', data: data2[0], productData: data1, isAuthed: req.session.isAuth, user: req.session.userInfo });
    }
    
    
    
    });
    });
});


router.get('/search', function(req, res) {
    // const { term } = req.query;
    const { term } = req.query;
    console.log(term);
  
    var sql='SELECT * FROM primaryproducts WHERE name LIKE '+db.escape('%'+term+'%');
      db.query(sql, function (err, data, fields) {
      if (err) throw err;
      res.render('productpage-test', { title: 'Product List', productData: data, isAuthed: req.session.isAuth, user: req.session.userInfo});
    });
  
  
     //const { term } = req.query.dasfas;
     //console.log( req.query.searchterm === 'red');
   
   
  });

  
module.exports = router;