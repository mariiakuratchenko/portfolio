var express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var cors = require('cors');
var path = require('path');

var db = require('./config/db');

var usersRouter = require('./config/app/routers/users');
var projectsRouter = require('./config/app/routers/projects');
var servicesRouter = require('./config/app/routers/services');
var contactsRouter = require('./config/app/routers/contacts');
var indexRouter = require('./config/app/routers/index');

var app = express();

db();

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(logger('dev'));

app.use('/api/users', usersRouter);
app.use('/api/projects', projectsRouter);
app.use('/api/services', servicesRouter);
app.use('/api/contacts', contactsRouter);
app.use('/api', indexRouter);

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  app.use(express.static(path.join(__dirname, 'dist')));
  
  app.use((req, res, next) => {
    if (req.path.startsWith('/api')) {
      return next(createError(404));
    }
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.json(
    {
      success: false,
      message: err.message
    }
  );
});

if (process.env.NODE_ENV !== 'production' || !process.env.VERCEL) {
  var port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}/`);
}

module.exports = app;