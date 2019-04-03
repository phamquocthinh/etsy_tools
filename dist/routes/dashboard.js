'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dashboard = _express2.default.Router();

dashboard.route('/').get(function () {
	var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
		return _regenerator2.default.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						return _context.abrupt('return', res.render('dashboard'));

					case 1:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, undefined);
	}));

	return function (_x, _x2) {
		return _ref.apply(this, arguments);
	};
}());

module.exports = dashboard;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbImRhc2hib2FyZCIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyb3V0ZSIsImdldCIsInJlcSIsInJlcyIsInJlbmRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsWUFBWUMsa0JBQVFDLE1BQVIsRUFBaEI7O0FBRUFGLFVBQVVHLEtBQVYsQ0FBZ0IsR0FBaEIsRUFDRUMsR0FERjtBQUFBLHFGQUNNLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUNHQSxJQUFJQyxNQUFKLENBQVcsV0FBWCxDQURIOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRE47O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJULFNBQWpCIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuXG5sZXQgZGFzaGJvYXJkID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuZGFzaGJvYXJkLnJvdXRlKCcvJylcblx0LmdldChhc3luYyAocmVxLCByZXMpID0+IHtcblx0XHRyZXR1cm4gcmVzLnJlbmRlcignZGFzaGJvYXJkJyk7XG4gICAgfSk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBkYXNoYm9hcmQ7Il19