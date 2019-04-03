#!/usr/bin/env node
'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _debug2.default)('services:server');

/**
 * Get port from environment and store in Express.
 */

/**
 * Module dependencies.
 */

var port = normalizePort(process.env.PORT || '7070');
_app2.default.set('port', port);

/**
 * Create HTTP server.
 */

var server = _http2.default.createServer(_app2.default);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
console.log('Magic happens on port ' + port);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  (0, _debug2.default)('Listening on ' + bind);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9zZXJ2ZXIuanMiXSwibmFtZXMiOlsicG9ydCIsIm5vcm1hbGl6ZVBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsImFwcCIsInNldCIsInNlcnZlciIsImh0dHAiLCJjcmVhdGVTZXJ2ZXIiLCJsaXN0ZW4iLCJvbiIsIm9uRXJyb3IiLCJvbkxpc3RlbmluZyIsImNvbnNvbGUiLCJsb2ciLCJ2YWwiLCJwYXJzZUludCIsImlzTmFOIiwiZXJyb3IiLCJzeXNjYWxsIiwiYmluZCIsImNvZGUiLCJleGl0IiwiYWRkciIsImFkZHJlc3MiXSwibWFwcGluZ3MiOiI7O0FBTUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxxQkFBTSxpQkFBTjs7QUFFQTs7OztBQVZBOzs7O0FBY0EsSUFBTUEsT0FBT0MsY0FBY0MsUUFBUUMsR0FBUixDQUFZQyxJQUFaLElBQW9CLE1BQWxDLENBQWI7QUFDQUMsY0FBSUMsR0FBSixDQUFRLE1BQVIsRUFBZ0JOLElBQWhCOztBQUVBOzs7O0FBSUEsSUFBTU8sU0FBU0MsZUFBS0MsWUFBTCxDQUFrQkosYUFBbEIsQ0FBZjs7QUFFQTs7OztBQUlBRSxPQUFPRyxNQUFQLENBQWNWLElBQWQ7QUFDQU8sT0FBT0ksRUFBUCxDQUFVLE9BQVYsRUFBbUJDLE9BQW5CO0FBQ0FMLE9BQU9JLEVBQVAsQ0FBVSxXQUFWLEVBQXVCRSxXQUF2QjtBQUNBQyxRQUFRQyxHQUFSLENBQVksMkJBQTJCZixJQUF2Qzs7QUFFQTs7OztBQUlBLFNBQVNDLGFBQVQsQ0FBdUJlLEdBQXZCLEVBQTRCO0FBQzFCLE1BQU1oQixPQUFPaUIsU0FBU0QsR0FBVCxFQUFjLEVBQWQsQ0FBYjs7QUFFQSxNQUFJRSxNQUFNbEIsSUFBTixDQUFKLEVBQWlCO0FBQ2Y7QUFDQSxXQUFPZ0IsR0FBUDtBQUNEOztBQUVELE1BQUloQixRQUFRLENBQVosRUFBZTtBQUNiO0FBQ0EsV0FBT0EsSUFBUDtBQUNEOztBQUVELFNBQU8sS0FBUDtBQUNEOztBQUVEOzs7O0FBSUEsU0FBU1ksT0FBVCxDQUFpQk8sS0FBakIsRUFBd0I7QUFDdEIsTUFBSUEsTUFBTUMsT0FBTixLQUFrQixRQUF0QixFQUFnQztBQUM5QixVQUFNRCxLQUFOO0FBQ0Q7O0FBRUQsTUFBTUUsT0FBTyxPQUFPckIsSUFBUCxLQUFnQixRQUFoQixHQUNULFVBQVVBLElBREQsR0FFVCxVQUFVQSxJQUZkOztBQUlBO0FBQ0EsVUFBUW1CLE1BQU1HLElBQWQ7QUFDRSxTQUFLLFFBQUw7QUFDRVIsY0FBUUssS0FBUixDQUFjRSxPQUFPLCtCQUFyQjtBQUNBbkIsY0FBUXFCLElBQVIsQ0FBYSxDQUFiO0FBQ0E7QUFDRixTQUFLLFlBQUw7QUFDRVQsY0FBUUssS0FBUixDQUFjRSxPQUFPLG9CQUFyQjtBQUNBbkIsY0FBUXFCLElBQVIsQ0FBYSxDQUFiO0FBQ0E7QUFDRjtBQUNFLFlBQU1KLEtBQU47QUFWSjtBQVlEOztBQUVEOzs7O0FBSUEsU0FBU04sV0FBVCxHQUF1QjtBQUNyQixNQUFNVyxPQUFPakIsT0FBT2tCLE9BQVAsRUFBYjtBQUNBLE1BQU1KLE9BQU8sT0FBT0csSUFBUCxLQUFnQixRQUFoQixHQUNULFVBQVVBLElBREQsR0FFVCxVQUFVQSxLQUFLeEIsSUFGbkI7QUFHQSx1QkFBTSxrQkFBa0JxQixJQUF4QjtBQUNEIiwiZmlsZSI6InNlcnZlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4vKipcbiAqIE1vZHVsZSBkZXBlbmRlbmNpZXMuXG4gKi9cblxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCc7XG5pbXBvcnQgZGVidWcgZnJvbSAnZGVidWcnO1xuaW1wb3J0IGh0dHAgZnJvbSAnaHR0cCc7XG5cbmRlYnVnKCdzZXJ2aWNlczpzZXJ2ZXInKTtcblxuLyoqXG4gKiBHZXQgcG9ydCBmcm9tIGVudmlyb25tZW50IGFuZCBzdG9yZSBpbiBFeHByZXNzLlxuICovXG5cbmNvbnN0IHBvcnQgPSBub3JtYWxpemVQb3J0KHByb2Nlc3MuZW52LlBPUlQgfHwgJzcwNzAnKTtcbmFwcC5zZXQoJ3BvcnQnLCBwb3J0KTtcblxuLyoqXG4gKiBDcmVhdGUgSFRUUCBzZXJ2ZXIuXG4gKi9cblxuY29uc3Qgc2VydmVyID0gaHR0cC5jcmVhdGVTZXJ2ZXIoYXBwKTtcblxuLyoqXG4gKiBMaXN0ZW4gb24gcHJvdmlkZWQgcG9ydCwgb24gYWxsIG5ldHdvcmsgaW50ZXJmYWNlcy5cbiAqL1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQpO1xuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XG5jb25zb2xlLmxvZygnTWFnaWMgaGFwcGVucyBvbiBwb3J0ICcgKyBwb3J0KTtcblxuLyoqXG4gKiBOb3JtYWxpemUgYSBwb3J0IGludG8gYSBudW1iZXIsIHN0cmluZywgb3IgZmFsc2UuXG4gKi9cblxuZnVuY3Rpb24gbm9ybWFsaXplUG9ydCh2YWwpIHtcbiAgY29uc3QgcG9ydCA9IHBhcnNlSW50KHZhbCwgMTApO1xuXG4gIGlmIChpc05hTihwb3J0KSkge1xuICAgIC8vIG5hbWVkIHBpcGVcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgaWYgKHBvcnQgPj0gMCkge1xuICAgIC8vIHBvcnQgbnVtYmVyXG4gICAgcmV0dXJuIHBvcnQ7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogRXZlbnQgbGlzdGVuZXIgZm9yIEhUVFAgc2VydmVyIFwiZXJyb3JcIiBldmVudC5cbiAqL1xuXG5mdW5jdGlvbiBvbkVycm9yKGVycm9yKSB7XG4gIGlmIChlcnJvci5zeXNjYWxsICE9PSAnbGlzdGVuJykge1xuICAgIHRocm93IGVycm9yO1xuICB9XG5cbiAgY29uc3QgYmluZCA9IHR5cGVvZiBwb3J0ID09PSAnc3RyaW5nJ1xuICAgID8gJ1BpcGUgJyArIHBvcnRcbiAgICA6ICdQb3J0ICcgKyBwb3J0O1xuXG4gIC8vIGhhbmRsZSBzcGVjaWZpYyBsaXN0ZW4gZXJyb3JzIHdpdGggZnJpZW5kbHkgbWVzc2FnZXNcbiAgc3dpdGNoIChlcnJvci5jb2RlKSB7XG4gICAgY2FzZSAnRUFDQ0VTJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYmluZCArICcgcmVxdWlyZXMgZWxldmF0ZWQgcHJpdmlsZWdlcycpO1xuICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRUFERFJJTlVTRSc6XG4gICAgICBjb25zb2xlLmVycm9yKGJpbmQgKyAnIGlzIGFscmVhZHkgaW4gdXNlJyk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJsaXN0ZW5pbmdcIiBldmVudC5cbiAqL1xuXG5mdW5jdGlvbiBvbkxpc3RlbmluZygpIHtcbiAgY29uc3QgYWRkciA9IHNlcnZlci5hZGRyZXNzKCk7XG4gIGNvbnN0IGJpbmQgPSB0eXBlb2YgYWRkciA9PT0gJ3N0cmluZydcbiAgICA/ICdwaXBlICcgKyBhZGRyXG4gICAgOiAncG9ydCAnICsgYWRkci5wb3J0O1xuICBkZWJ1ZygnTGlzdGVuaW5nIG9uICcgKyBiaW5kKTtcbn1cbiJdfQ==