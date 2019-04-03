'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _serveFavicon = require('serve-favicon');

var _serveFavicon2 = _interopRequireDefault(_serveFavicon);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _mongoDB = require('./db/mongoDB');

var _index = require('./routes/index');

var _index2 = _interopRequireDefault(_index);

var _user = require('./routes/user');

var _user2 = _interopRequireDefault(_user);

var _token = require('./routes/token');

var _token2 = _interopRequireDefault(_token);

var _dashboard = require('./routes/dashboard');

var _dashboard2 = _interopRequireDefault(_dashboard);

var _product = require('./routes/product');

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
(0, _mongoDB.open)();

// view engine setup
app.set('views', _path2.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use((0, _morgan2.default)('dev'));
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

app.use((0, _expressSession2.default)({
  secret: 'sessionSecret',
  resave: true,
  saveUninitialized: true
}));

app.use('/user', _user2.default);

app.use(function (req, res, next) {
  // do logging
  var sess = req.session;
  if (!sess.USER) {
    return res.redirect('/user/login');
  }
  next(); // make sure we go to the next routes and don't stop here
});

app.use('/', _index2.default);
app.use('/token', _token2.default);
app.use('/dashboard', _dashboard2.default);
app.use('/product', _product2.default);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  return res.render('error', { message: 'error' });
});

module.exports = app;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hcHAuanMiXSwibmFtZXMiOlsiYXBwIiwic2V0IiwicGF0aCIsImpvaW4iLCJfX2Rpcm5hbWUiLCJ1c2UiLCJib2R5UGFyc2VyIiwianNvbiIsInVybGVuY29kZWQiLCJleHRlbmRlZCIsImV4cHJlc3MiLCJzdGF0aWMiLCJzZWNyZXQiLCJyZXNhdmUiLCJzYXZlVW5pbml0aWFsaXplZCIsInVzZXIiLCJyZXEiLCJyZXMiLCJuZXh0Iiwic2VzcyIsInNlc3Npb24iLCJVU0VSIiwicmVkaXJlY3QiLCJpbmRleCIsInRva2VuIiwiZGFzaGJvYXJkIiwicHJvZHVjdCIsImVyciIsIkVycm9yIiwic3RhdHVzIiwibG9jYWxzIiwibWVzc2FnZSIsImVycm9yIiwiZ2V0IiwicmVuZGVyIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUNBLElBQUlBLE1BQU0sd0JBQVY7QUFDQTs7QUFFQTtBQUNBQSxJQUFJQyxHQUFKLENBQVEsT0FBUixFQUFpQkMsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLE9BQXJCLENBQWpCO0FBQ0FKLElBQUlDLEdBQUosQ0FBUSxhQUFSLEVBQXVCLEtBQXZCOztBQUVBO0FBQ0E7QUFDQUQsSUFBSUssR0FBSixDQUFRLHNCQUFPLEtBQVAsQ0FBUjtBQUNBTCxJQUFJSyxHQUFKLENBQVFDLHFCQUFXQyxJQUFYLEVBQVI7QUFDQVAsSUFBSUssR0FBSixDQUFRQyxxQkFBV0UsVUFBWCxDQUFzQixFQUFFQyxVQUFVLEtBQVosRUFBdEIsQ0FBUjtBQUNBVCxJQUFJSyxHQUFKLENBQVEsNkJBQVI7QUFDQUwsSUFBSUssR0FBSixDQUFRSyxrQkFBUUMsTUFBUixDQUFlVCxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsUUFBckIsQ0FBZixDQUFSOztBQUVBSixJQUFJSyxHQUFKLENBQVEsOEJBQVE7QUFDZE8sVUFBUSxlQURNO0FBRWRDLFVBQVEsSUFGTTtBQUdkQyxxQkFBbUI7QUFITCxDQUFSLENBQVI7O0FBTUFkLElBQUlLLEdBQUosQ0FBUSxPQUFSLEVBQWlCVSxjQUFqQjs7QUFFQWYsSUFBSUssR0FBSixDQUFRLFVBQUNXLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQzNCO0FBQ0csTUFBTUMsT0FBT0gsSUFBSUksT0FBakI7QUFDSCxNQUFJLENBQUNELEtBQUtFLElBQVYsRUFBZ0I7QUFDZixXQUFPSixJQUFJSyxRQUFKLENBQWEsYUFBYixDQUFQO0FBQ0E7QUFDREosU0FOMkIsQ0FNcEI7QUFDUCxDQVBEOztBQVNBbEIsSUFBSUssR0FBSixDQUFRLEdBQVIsRUFBYWtCLGVBQWI7QUFDQXZCLElBQUlLLEdBQUosQ0FBUSxRQUFSLEVBQWtCbUIsZUFBbEI7QUFDQXhCLElBQUlLLEdBQUosQ0FBUSxZQUFSLEVBQXNCb0IsbUJBQXRCO0FBQ0F6QixJQUFJSyxHQUFKLENBQVEsVUFBUixFQUFvQnFCLGlCQUFwQjs7QUFFQTtBQUNBMUIsSUFBSUssR0FBSixDQUFRLFVBQUNXLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxJQUFYLEVBQW9CO0FBQzFCLE1BQU1TLE1BQU0sSUFBSUMsS0FBSixDQUFVLFdBQVYsQ0FBWjtBQUNBRCxNQUFJRSxNQUFKLEdBQWEsR0FBYjtBQUNBWCxPQUFLUyxHQUFMO0FBQ0QsQ0FKRDs7QUFNQTtBQUNBM0IsSUFBSUssR0FBSixDQUFRLFVBQUNzQixHQUFELEVBQU1YLEdBQU4sRUFBV0MsR0FBWCxFQUFnQkMsSUFBaEIsRUFBeUI7QUFDL0I7QUFDQUQsTUFBSWEsTUFBSixDQUFXQyxPQUFYLEdBQXFCSixJQUFJSSxPQUF6QjtBQUNBZCxNQUFJYSxNQUFKLENBQVdFLEtBQVgsR0FBbUJoQixJQUFJaEIsR0FBSixDQUFRaUMsR0FBUixDQUFZLEtBQVosTUFBdUIsYUFBdkIsR0FBdUNOLEdBQXZDLEdBQTZDLEVBQWhFOztBQUVBO0FBQ0FWLE1BQUlZLE1BQUosQ0FBV0YsSUFBSUUsTUFBSixJQUFjLEdBQXpCO0FBQ0EsU0FBT1osSUFBSWlCLE1BQUosQ0FBVyxPQUFYLEVBQW9CLEVBQUVILFNBQVMsT0FBWCxFQUFwQixDQUFQO0FBQ0QsQ0FSRDs7QUFVQUksT0FBT0MsT0FBUCxHQUFpQnBDLEdBQWpCIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJ1xuaW1wb3J0IGZhdmljb24gZnJvbSAnc2VydmUtZmF2aWNvbidcbmltcG9ydCBsb2dnZXIgZnJvbSAnbW9yZ2FuJ1xuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJ1xuaW1wb3J0IGJvZHlQYXJzZXIgZnJvbSAnYm9keS1wYXJzZXInXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdleHByZXNzLXNlc3Npb24nXG5cbmltcG9ydCB7IG9wZW4gfSBmcm9tICcuL2RiL21vbmdvREInXG5pbXBvcnQgaW5kZXggZnJvbSAnLi9yb3V0ZXMvaW5kZXgnXG5pbXBvcnQgdXNlciBmcm9tICcuL3JvdXRlcy91c2VyJ1xuaW1wb3J0IHRva2VuIGZyb20gJy4vcm91dGVzL3Rva2VuJ1xuaW1wb3J0IGRhc2hib2FyZCBmcm9tICcuL3JvdXRlcy9kYXNoYm9hcmQnXG5pbXBvcnQgcHJvZHVjdCBmcm9tICcuL3JvdXRlcy9wcm9kdWN0J1xubGV0IGFwcCA9IGV4cHJlc3MoKVxub3BlbigpXG5cbi8vIHZpZXcgZW5naW5lIHNldHVwXG5hcHAuc2V0KCd2aWV3cycsIHBhdGguam9pbihfX2Rpcm5hbWUsICd2aWV3cycpKVxuYXBwLnNldCgndmlldyBlbmdpbmUnLCAnZWpzJylcblxuLy8gdW5jb21tZW50IGFmdGVyIHBsYWNpbmcgeW91ciBmYXZpY29uIGluIC9wdWJsaWNcbi8vYXBwLnVzZShmYXZpY29uKHBhdGguam9pbihfX2Rpcm5hbWUsICdwdWJsaWMnLCAnZmF2aWNvbi5pY28nKSkpXG5hcHAudXNlKGxvZ2dlcignZGV2JykpXG5hcHAudXNlKGJvZHlQYXJzZXIuanNvbigpKVxuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpXG5hcHAudXNlKGNvb2tpZVBhcnNlcigpKVxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAncHVibGljJykpKVxuXG5hcHAudXNlKHNlc3Npb24oe1xuICBzZWNyZXQ6ICdzZXNzaW9uU2VjcmV0JyxcbiAgcmVzYXZlOiB0cnVlLFxuICBzYXZlVW5pbml0aWFsaXplZDogdHJ1ZVxufSkpXG5cbmFwcC51c2UoJy91c2VyJywgdXNlcilcblxuYXBwLnVzZSgocmVxLCByZXMsIG5leHQpID0+IHtcblx0Ly8gZG8gbG9nZ2luZ1xuICAgIGNvbnN0IHNlc3MgPSByZXEuc2Vzc2lvblxuXHRpZiAoIXNlc3MuVVNFUikge1xuXHRcdHJldHVybiByZXMucmVkaXJlY3QoJy91c2VyL2xvZ2luJylcblx0fVxuXHRuZXh0KCkgLy8gbWFrZSBzdXJlIHdlIGdvIHRvIHRoZSBuZXh0IHJvdXRlcyBhbmQgZG9uJ3Qgc3RvcCBoZXJlXG59KVxuXG5hcHAudXNlKCcvJywgaW5kZXgpXG5hcHAudXNlKCcvdG9rZW4nLCB0b2tlbilcbmFwcC51c2UoJy9kYXNoYm9hcmQnLCBkYXNoYm9hcmQpXG5hcHAudXNlKCcvcHJvZHVjdCcsIHByb2R1Y3QpXG5cbi8vIGNhdGNoIDQwNCBhbmQgZm9yd2FyZCB0byBlcnJvciBoYW5kbGVyXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ05vdCBGb3VuZCcpXG4gIGVyci5zdGF0dXMgPSA0MDRcbiAgbmV4dChlcnIpXG59KVxuXG4vLyBlcnJvciBoYW5kbGVyXG5hcHAudXNlKChlcnIsIHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIC8vIHNldCBsb2NhbHMsIG9ubHkgcHJvdmlkaW5nIGVycm9yIGluIGRldmVsb3BtZW50XG4gIHJlcy5sb2NhbHMubWVzc2FnZSA9IGVyci5tZXNzYWdlXG4gIHJlcy5sb2NhbHMuZXJyb3IgPSByZXEuYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcgPyBlcnIgOiB7fVxuXG4gIC8vIHJlbmRlciB0aGUgZXJyb3IgcGFnZVxuICByZXMuc3RhdHVzKGVyci5zdGF0dXMgfHwgNTAwKVxuICByZXR1cm4gcmVzLnJlbmRlcignZXJyb3InLCB7IG1lc3NhZ2U6ICdlcnJvcicgfSlcbn0pXG5cbm1vZHVsZS5leHBvcnRzID0gYXBwXG4iXX0=