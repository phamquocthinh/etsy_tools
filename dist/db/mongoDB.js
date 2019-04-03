'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.close = exports.open = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _defaulValues = require('../config/defaulValues');

var _defaulValues2 = _interopRequireDefault(_defaulValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MONGO_HOST = _defaulValues2.default.MONGO_HOST,
    MONGO_PORT = _defaulValues2.default.MONGO_PORT,
    MONGO_DB = _defaulValues2.default.MONGO_DB;


_mongoose2.default.Promise = _bluebird2.default;

var open = function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var mongoUrl, conn;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        mongoUrl = 'mongodb://' + MONGO_HOST + ':' + MONGO_PORT + '/' + MONGO_DB;
                        _context.prev = 1;
                        _context.next = 4;
                        return _mongoose2.default.connect(mongoUrl, { useNewUrlParser: true });

                    case 4:
                        conn = _context.sent;


                        console.log('Mongoose connected...');

                        process.on('SIGINT', function () {
                            conn.connection.close(function () {
                                console.log('Mongoose default connection is disconnected due to application termination');
                                process.exit(0);
                            });
                        });

                        return _context.abrupt('return', conn);

                    case 10:
                        _context.prev = 10;
                        _context.t0 = _context['catch'](1);

                        console.log(_context.t0);
                        process.exit(1);

                    case 14:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined, [[1, 10]]);
    }));

    return function open() {
        return _ref.apply(this, arguments);
    };
}();

var close = function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _mongoose2.default.connection.close();

                    case 1:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function close() {
        return _ref2.apply(this, arguments);
    };
}();

exports.open = open;
exports.close = close;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYi9tb25nb0RCLmpzIl0sIm5hbWVzIjpbIk1PTkdPX0hPU1QiLCJEZWZhdWxWYWx1ZXMiLCJNT05HT19QT1JUIiwiTU9OR09fREIiLCJtb25nb29zZSIsIlByb21pc2UiLCJvcGVuIiwibW9uZ29VcmwiLCJjb25uZWN0IiwidXNlTmV3VXJsUGFyc2VyIiwiY29ubiIsImNvbnNvbGUiLCJsb2ciLCJwcm9jZXNzIiwib24iLCJjb25uZWN0aW9uIiwiY2xvc2UiLCJleGl0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztJQUVRQSxVLEdBQXFDQyxzQixDQUFyQ0QsVTtJQUFZRSxVLEdBQXlCRCxzQixDQUF6QkMsVTtJQUFZQyxRLEdBQWFGLHNCLENBQWJFLFE7OztBQUVoQ0MsbUJBQVNDLE9BQVQsR0FBbUJBLGtCQUFuQjs7QUFFQSxJQUFNQztBQUFBLHdGQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNSQyxnQ0FEUSxrQkFDZ0JQLFVBRGhCLFNBQzhCRSxVQUQ5QixTQUM0Q0MsUUFENUM7QUFBQTtBQUFBO0FBQUEsK0JBSWNDLG1CQUFTSSxPQUFULENBQWlCRCxRQUFqQixFQUEyQixFQUFFRSxpQkFBaUIsSUFBbkIsRUFBM0IsQ0FKZDs7QUFBQTtBQUlDQyw0QkFKRDs7O0FBTUxDLGdDQUFRQyxHQUFSOztBQUVBQyxnQ0FBUUMsRUFBUixDQUFXLFFBQVgsRUFBcUIsWUFBTTtBQUN2QkosaUNBQUtLLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLFlBQU07QUFDeEJMLHdDQUFRQyxHQUFSLENBQVksNEVBQVo7QUFDQUMsd0NBQVFJLElBQVIsQ0FBYSxDQUFiO0FBQ0gsNkJBSEQ7QUFJSCx5QkFMRDs7QUFSSyx5REFlRVAsSUFmRjs7QUFBQTtBQUFBO0FBQUE7O0FBaUJMQyxnQ0FBUUMsR0FBUjtBQUNBQyxnQ0FBUUksSUFBUixDQUFhLENBQWI7O0FBbEJLO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUFzQkEsSUFBTUQ7QUFBQSx5RkFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2JaLDJDQUFTVyxVQUFULENBQW9CQyxLQUFwQjs7QUFEYTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFSOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O1FBS0NWLEksR0FBQUEsSTtRQUNBVSxLLEdBQUFBLEsiLCJmaWxlIjoibW9uZ29EQi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCc7XG5pbXBvcnQgRGVmYXVsVmFsdWVzIGZyb20gJy4uL2NvbmZpZy9kZWZhdWxWYWx1ZXMnXG5cbmNvbnN0IHsgTU9OR09fSE9TVCwgTU9OR09fUE9SVCwgTU9OR09fREIgfSA9IERlZmF1bFZhbHVlcztcblxubW9uZ29vc2UuUHJvbWlzZSA9IFByb21pc2U7XG5cbmNvbnN0IG9wZW4gPSBhc3luYyAoKSA9PiB7XG5cdGxldCBtb25nb1VybCA9IGBtb25nb2RiOi8vJHtNT05HT19IT1NUfToke01PTkdPX1BPUlR9LyR7TU9OR09fREJ9YFxuICAgIFxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBtb25nb29zZS5jb25uZWN0KG1vbmdvVXJsLCB7IHVzZU5ld1VybFBhcnNlcjogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKGBNb25nb29zZSBjb25uZWN0ZWQuLi5gKVxuICAgIFxuICAgICAgICBwcm9jZXNzLm9uKCdTSUdJTlQnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25uLmNvbm5lY3Rpb24uY2xvc2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdNb25nb29zZSBkZWZhdWx0IGNvbm5lY3Rpb24gaXMgZGlzY29ubmVjdGVkIGR1ZSB0byBhcHBsaWNhdGlvbiB0ZXJtaW5hdGlvbicpXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDApXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIFxuICAgICAgICByZXR1cm4gY29ublxuICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBwcm9jZXNzLmV4aXQoMSlcbiAgICB9XG59O1xuXG5jb25zdCBjbG9zZSA9IGFzeW5jICgpID0+IHtcblx0bW9uZ29vc2UuY29ubmVjdGlvbi5jbG9zZSgpO1xufTtcblxuZXhwb3J0IHtcblx0b3Blbixcblx0Y2xvc2UsXG59OyJdfQ==