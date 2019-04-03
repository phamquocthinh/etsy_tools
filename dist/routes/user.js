"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var user = _express2.default.Router();

var sess = void 0;
var account = {
    name: "admin",
    password: "admin@123456"
};

user.route("/").get(function (req, res) {
    res.render("index", { message: "" });
});

user.route("/login").get(function (req, res) {
    res.render("index", { message: "" });
}).post(function (req, res) {
    sess = req.session;
    if (req.body.user_name == null || req.body.password == null) {
        res.render("index", {
            message: "Required Params Are Missing"
        });
    }
    if (req.body.user_name === account.name && req.body.password === account.password) {
        sess.USER = req.body.user_name;
        res.redirect("/product");
    } else {
        res.render("index", {
            message: "No User Found"
        });
    }
});

user.route("/logout").get(function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res) {
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        sess = req.session;
                        sess.USER = null;
                        res.redirect("/");

                    case 3:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2) {
        return _ref.apply(this, arguments);
    };
}());

module.exports = user;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXNlci5qcyJdLCJuYW1lcyI6WyJ1c2VyIiwiZXhwcmVzcyIsIlJvdXRlciIsInNlc3MiLCJhY2NvdW50IiwibmFtZSIsInBhc3N3b3JkIiwicm91dGUiLCJnZXQiLCJyZXEiLCJyZXMiLCJyZW5kZXIiLCJtZXNzYWdlIiwicG9zdCIsInNlc3Npb24iLCJib2R5IiwidXNlcl9uYW1lIiwiVVNFUiIsInJlZGlyZWN0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7Ozs7QUFDQSxJQUFJQSxPQUFPQyxrQkFBUUMsTUFBUixFQUFYOztBQUVBLElBQUlDLGFBQUo7QUFDQSxJQUFNQyxVQUFVO0FBQ1pDLFVBQU0sT0FETTtBQUVaQyxjQUFVO0FBRkUsQ0FBaEI7O0FBS0FOLEtBQUtPLEtBQUwsQ0FBVyxHQUFYLEVBQWdCQyxHQUFoQixDQUFvQixVQUFDQyxHQUFELEVBQU1DLEdBQU4sRUFBYztBQUM5QkEsUUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0IsRUFBRUMsU0FBUyxFQUFYLEVBQXBCO0FBQ0gsQ0FGRDs7QUFJQVosS0FBS08sS0FBTCxDQUFXLFFBQVgsRUFDS0MsR0FETCxDQUNTLFVBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2ZBLFFBQUlDLE1BQUosQ0FBVyxPQUFYLEVBQW9CLEVBQUVDLFNBQVMsRUFBWCxFQUFwQjtBQUNILENBSEwsRUFJS0MsSUFKTCxDQUlVLFVBQUNKLEdBQUQsRUFBTUMsR0FBTixFQUFjO0FBQ2hCUCxXQUFPTSxJQUFJSyxPQUFYO0FBQ0EsUUFBSUwsSUFBSU0sSUFBSixDQUFTQyxTQUFULElBQXNCLElBQXRCLElBQThCUCxJQUFJTSxJQUFKLENBQVNULFFBQVQsSUFBcUIsSUFBdkQsRUFBNkQ7QUFDekRJLFlBQUlDLE1BQUosQ0FBVyxPQUFYLEVBQW9CO0FBQ2hCQyxxQkFBUztBQURPLFNBQXBCO0FBR0g7QUFDRCxRQUFJSCxJQUFJTSxJQUFKLENBQVNDLFNBQVQsS0FBdUJaLFFBQVFDLElBQS9CLElBQXVDSSxJQUFJTSxJQUFKLENBQVNULFFBQVQsS0FBc0JGLFFBQVFFLFFBQXpFLEVBQW1GO0FBQy9FSCxhQUFLYyxJQUFMLEdBQVlSLElBQUlNLElBQUosQ0FBU0MsU0FBckI7QUFDQU4sWUFBSVEsUUFBSixDQUFhLFVBQWI7QUFDSCxLQUhELE1BR087QUFDSFIsWUFBSUMsTUFBSixDQUFXLE9BQVgsRUFBb0I7QUFDaEJDLHFCQUFTO0FBRE8sU0FBcEI7QUFHSDtBQUNKLENBbkJMOztBQXFCQVosS0FBS08sS0FBTCxDQUFXLFNBQVgsRUFBc0JDLEdBQXRCO0FBQUEsd0ZBQTBCLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUN0QlAsK0JBQU9NLElBQUlLLE9BQVg7QUFDQVgsNkJBQUtjLElBQUwsR0FBWSxJQUFaO0FBQ0FQLDRCQUFJUSxRQUFKLENBQWEsR0FBYjs7QUFIc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBTUFDLE9BQU9DLE9BQVAsR0FBaUJwQixJQUFqQiIsImZpbGUiOiJ1c2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIlxyXG5sZXQgdXNlciA9IGV4cHJlc3MuUm91dGVyKClcclxuXHJcbmxldCBzZXNzXHJcbmNvbnN0IGFjY291bnQgPSB7XHJcbiAgICBuYW1lOiBcImFkbWluXCIsXHJcbiAgICBwYXNzd29yZDogXCJhZG1pbkAxMjM0NTZcIlxyXG59XHJcblxyXG51c2VyLnJvdXRlKFwiL1wiKS5nZXQoKHJlcSwgcmVzKSA9PiB7XHJcbiAgICByZXMucmVuZGVyKFwiaW5kZXhcIiwgeyBtZXNzYWdlOiBcIlwiIH0pXHJcbn0pXHJcblxyXG51c2VyLnJvdXRlKFwiL2xvZ2luXCIpXHJcbiAgICAuZ2V0KChyZXEsIHJlcykgPT4ge1xyXG4gICAgICAgIHJlcy5yZW5kZXIoXCJpbmRleFwiLCB7IG1lc3NhZ2U6IFwiXCIgfSlcclxuICAgIH0pXHJcbiAgICAucG9zdCgocmVxLCByZXMpID0+IHtcclxuICAgICAgICBzZXNzID0gcmVxLnNlc3Npb25cclxuICAgICAgICBpZiAocmVxLmJvZHkudXNlcl9uYW1lID09IG51bGwgfHwgcmVxLmJvZHkucGFzc3dvcmQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXMucmVuZGVyKFwiaW5kZXhcIiwge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJSZXF1aXJlZCBQYXJhbXMgQXJlIE1pc3NpbmdcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAocmVxLmJvZHkudXNlcl9uYW1lID09PSBhY2NvdW50Lm5hbWUgJiYgcmVxLmJvZHkucGFzc3dvcmQgPT09IGFjY291bnQucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgc2Vzcy5VU0VSID0gcmVxLmJvZHkudXNlcl9uYW1lXHJcbiAgICAgICAgICAgIHJlcy5yZWRpcmVjdChcIi9wcm9kdWN0XCIpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmVzLnJlbmRlcihcImluZGV4XCIsIHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm8gVXNlciBGb3VuZFwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbnVzZXIucm91dGUoXCIvbG9nb3V0XCIpLmdldChhc3luYyAocmVxLCByZXMpID0+IHtcclxuICAgIHNlc3MgPSByZXEuc2Vzc2lvblxyXG4gICAgc2Vzcy5VU0VSID0gbnVsbFxyXG4gICAgcmVzLnJlZGlyZWN0KFwiL1wiKVxyXG59KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSB1c2VyXHJcbiJdfQ==