var express = require('express');
var bcrypt = require('bcryptjs');
var router = express.Router();
var db=require('../database');

const users = []


router.get('/', (req, res) => {
  res.json(users)
})

router.post('/', (req, res) => {
  const user = { name: req.body.name, password: req.body.password }
  users.push(user)
  res.status(201).send()
})

router.get('/login', function(req, res, next) {
  if (req.session.isAuth) {
    return res.redirect('/home');
  }
  res.render('login', {isAuthed: req.session.isAuth, user: req.session.userInfo});
});

router.get('/signup', function(req, res, next) {
  if (req.session.isAuth) {
    return res.redirect('/home');
  }
  res.render('signup', {isAuthed: req.session.isAuth, user: req.session.userInfo});
});

router.post('/loginPOST', async (req, res, next) =>{
  console.log("login");
  console.log("email: "+ req.body.email);

  const {email, password} = req.body;
  var sql='SELECT * FROM users WHERE email = ' + db.escape(req.body.email);
  db.query(sql, async (err, data, fields) => {
    if (err) throw err;
    let user = await data[0];

    if (user == null) {
      console.log("User doesnt exist");
      return res.redirect('/users/signup');
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    


    if (!isMatch) {
      console.log("wrong password");
      return res.redirect("/users/login");
    }
    console.log("logged");
    req.session.isAuth = true;
    req.session.cart = []

    if (user.id == 130){
      req.session.isAdminAuth = true;
    }

    req.session.userInfo = user;
    return res.redirect("/home");
  });

  

});

router.get('/logout', function(req, res, next) {
  req.session.destroy((err) => {
    if (err) throw err;
  });
  return res.redirect('/users/login');
});

router.post('/signupPOST', async (req, res, next) => {
  const {fname, lname, username, email, password} = req.body;
  console.log(req.body.email)

  //check if user exists
  var sql='SELECT * FROM users WHERE email = ' + db.escape(req.body.email);
  db.query(sql, async (err, data, fields) => {
    if (err) throw err;
    console.log(data);

    let user = await data;

    if (user.length != 0) {
      console.log("User Exists");
      return res.redirect('/users/signup');
    }

    console.log({username});

    //encrypt password
    const hashedPaw = await bcrypt.hash(req.body.password, 12);
    

    //insert values
    var insertSql='INSERT INTO users (fname, lname, username, email, password) VALUES ('+db.escape(req.body.fname)+', '+db.escape(req.body.lname)+', '+db.escape(req.body.username)+', '+db.escape(req.body.email)+', '+db.escape(hashedPaw)+');';
    db.query(insertSql, async (err, data, fields) => {
      if (err) throw err;
    });

    res.redirect('/users/login')

  });

  

});

module.exports = router;
