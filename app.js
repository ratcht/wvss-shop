var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products');
var individualProductRouter = require('./routes/individualProductRouter');
var helpRouter = require('./routes/help');
var aboutRouter = require('./routes/about');
var testRouter = require('./routes/test')
var loginRouter = require('./routes/login')
var signupRouter = require('./routes/login')

var app = express();

// view engine setup
app.use('/', indexRouter);
app.use('/products', productsRouter);
//app.use('/categories', productsRouter);
//app.use('/products', individualProductRouter);
app.use('/help', helpRouter);
app.use('/about', aboutRouter);
app.use('/test' , testRouter)
app.use('/login' , loginRouter)
app.use('/signup' , loginRouter)




//hynek added - testing
app.listen(3000)

app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});







module.exports = app;