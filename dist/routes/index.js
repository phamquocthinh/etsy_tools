'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.route('/').get(function (req, res) {
  return res.redirect('/token');
});

module.exports = router;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInJvdXRlIiwiZ2V0IiwicmVxIiwicmVzIiwicmVkaXJlY3QiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7QUFFQSxJQUFJQSxTQUFTQyxrQkFBUUMsTUFBUixFQUFiOztBQUVBRixPQUFPRyxLQUFQLENBQWEsR0FBYixFQUNHQyxHQURILENBQ08sVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsU0FBY0EsSUFBSUMsUUFBSixDQUFhLFFBQWIsQ0FBZDtBQUFBLENBRFA7O0FBR0FDLE9BQU9DLE9BQVAsR0FBaUJULE1BQWpCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmxldCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIucm91dGUoJy8nKVxuICAuZ2V0KChyZXEsIHJlcykgPT4gcmVzLnJlZGlyZWN0KCcvdG9rZW4nKSlcblxubW9kdWxlLmV4cG9ydHMgPSByb3V0ZXI7XG4iXX0=