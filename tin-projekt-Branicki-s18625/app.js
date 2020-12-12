var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const indexRouter = require('./routes/index');
const drinkRouter = require('./routes/drinkRoute');
const ingreadientRouter = require('./routes/ingreadientRoute');
const proportionRouter = require('./routes/proporionRoute');
const galleryRouter = require('./routes/galleryRoute');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => {
    console.log(err);
  });
const drinkApiRouter = require('./routes/api/DrinkApiRoute');
const ingreadientApiRouter = require('./routes/api/IngreadientApiRoute');
const proportionApiRouter = require('./routes/api/ProportionApiRoute');




var app = express();
console.log('Server is listening at http://localhost:3000/')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/drinks', drinkRouter);
app.use('/ingreadient', ingreadientRouter);
app.use('/proportion', proportionRouter);
app.use('/gallery', galleryRouter);
app.use('/api/drinks', drinkApiRouter);
app.use('/api/ingreadients', ingreadientApiRouter);
app.use('/api/proportions', proportionApiRouter);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;