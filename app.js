import createError from 'http-errors';
import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import path from 'path';
import lessMiddleware from 'less-middleware';
import loadAllRoute from './routes';

const ueditor_backend = require('./ueditor-backend');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());
app.use(compression()); // Compress all routes

app.use(lessMiddleware(path.join(__dirname, 'public/stylesheets/less')));
app.use(express.static(path.join(__dirname, 'public')));

// app.use(express.static(path.join(__dirname, 'ueidtor')));
ueditor_backend(app);
//loader all page route
loadAllRoute(app);

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

// 目前仅用于news page
app.locals.formatDt = function(dtString) {
  function fillZero(num) {
    return num < 10 ? '0' + num : num;
  }
  const dt = new Date(dtString);
  const year = dt.getFullYear();
  const month = dt.getMonth() + 1;
  const date = dt.getDate();
  return {
    newsDate: {
      year: year,
      md: `${fillZero(month)}/${fillZero(date)}`,
    },
    detailDate: `${year}-${month}-${date}`
  }
}

module.exports = app;
// export default app;
