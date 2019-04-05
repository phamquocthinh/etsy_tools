'use strict';

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _bluebird = require('bluebird');

var _bluebird2 = _interopRequireDefault(_bluebird);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _product = require('../models/product');

var _product2 = _interopRequireDefault(_product);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _jimp = require('jimp');

var _jimp2 = _interopRequireDefault(_jimp);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _sharp = require('sharp');

var _sharp2 = _interopRequireDefault(_sharp);

var _defaulValues = require('../config/defaulValues');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var storage = _multer2.default.diskStorage({
    destination: function destination(req, file, cb) {
        cb(null, _path2.default.join(__dirname, '../public/images/uploads'));
    },
    filename: function filename(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
    fileFilter: function fileFilter(req, file, cb) {
        if (file.originalname.split('.')[file.originalname.split('.').length - 1] != 'png') {
            return cb(new Error('Wrong extension type'));
        }
        cb(null, true);
    }
});

var upload = (0, _multer2.default)({ storage: storage }).array('pic-file', 10);

var product = _express2.default.Router();

product.get('/', function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(req, res, next) {
        var seeAll, condition, items;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        seeAll = req.query.seeAll;
                        condition = {};


                        if (!seeAll) {
                            condition = { pushedToEtsy: 0 };
                        }

                        _context.next = 5;
                        return _product2.default.find(condition);

                    case 5:
                        items = _context.sent;

                        res.render('product', { items: items });

                    case 7:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
    };
}());

product.route('/upload').get(function () {
    var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(req, res) {
        var seeAll, condition, items;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        seeAll = req.query.seeAll;
                        condition = {};


                        if (!seeAll) {
                            condition = { pushedToEtsy: 0 };
                        }

                        _context2.next = 5;
                        return _product2.default.find(condition);

                    case 5:
                        items = _context2.sent;

                        res.render('product', { items: items });

                    case 7:
                    case 'end':
                        return _context2.stop();
                }
            }
        }, _callee2, undefined);
    }));

    return function (_x4, _x5) {
        return _ref2.apply(this, arguments);
    };
}()).post(function () {
    var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4(req, res) {
        return _regenerator2.default.wrap(function _callee4$(_context4) {
            while (1) {
                switch (_context4.prev = _context4.next) {
                    case 0:
                        upload(req, res, function (err) {
                            if (err) {
                                console.log('ERROR: ', err);
                                return res.json((0, _stringify2.default)(err));
                            }

                            if (!req.files.length) {
                                return res.redirect('/product');
                            }

                            return _bluebird2.default.each(req.files, function (file) {
                                return _product2.default.create({
                                    name: file.filename,
                                    dir: '/images/uploads/' + file.filename,
                                    createdAt: new Date()
                                }).then((0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
                                    var imagePath, image, colors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, color, colorPath, colorFile;

                                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                                case 0:
                                                    _context3.prev = 0;

                                                    //let tShirtPath = path.join(__dirname, '../public/images/shirts/tee-front.png')
                                                    imagePath = _path2.default.join(__dirname, '../public/images/uploads/' + file.filename);
                                                    //let tshirt = await jimp.read(tShirtPath)

                                                    _context3.next = 4;
                                                    return _jimp2.default.read(imagePath);

                                                case 4:
                                                    image = _context3.sent;
                                                    _context3.next = 7;
                                                    return image.resize(400, _jimp2.default.AUTO);

                                                case 7:
                                                    //await tshirt.composite(image, 315, 150)

                                                    colors = _fs2.default.readdirSync(_path2.default.join(__dirname, '../public/images/color/'));

                                                    _fs2.default.mkdirSync(_path2.default.join(__dirname, '../public/images/products/' + file.filename));

                                                    _iteratorNormalCompletion = true;
                                                    _didIteratorError = false;
                                                    _iteratorError = undefined;
                                                    _context3.prev = 12;
                                                    _iterator = (0, _getIterator3.default)(colors);

                                                case 14:
                                                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                                        _context3.next = 27;
                                                        break;
                                                    }

                                                    color = _step.value;
                                                    colorPath = _path2.default.join(__dirname, '../public/images/color/' + color);
                                                    _context3.next = 19;
                                                    return _jimp2.default.read(colorPath);

                                                case 19:
                                                    colorFile = _context3.sent;
                                                    _context3.next = 22;
                                                    return colorFile.composite(image, 300, 200);

                                                case 22:
                                                    _context3.next = 24;
                                                    return colorFile.write(_path2.default.join(__dirname, '../public/images/products/' + file.filename + '/' + color));

                                                case 24:
                                                    _iteratorNormalCompletion = true;
                                                    _context3.next = 14;
                                                    break;

                                                case 27:
                                                    _context3.next = 33;
                                                    break;

                                                case 29:
                                                    _context3.prev = 29;
                                                    _context3.t0 = _context3['catch'](12);
                                                    _didIteratorError = true;
                                                    _iteratorError = _context3.t0;

                                                case 33:
                                                    _context3.prev = 33;
                                                    _context3.prev = 34;

                                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                                        _iterator.return();
                                                    }

                                                case 36:
                                                    _context3.prev = 36;

                                                    if (!_didIteratorError) {
                                                        _context3.next = 39;
                                                        break;
                                                    }

                                                    throw _iteratorError;

                                                case 39:
                                                    return _context3.finish(36);

                                                case 40:
                                                    return _context3.finish(33);

                                                case 41:
                                                    _context3.next = 46;
                                                    break;

                                                case 43:
                                                    _context3.prev = 43;
                                                    _context3.t1 = _context3['catch'](0);

                                                    console.log('ERROR:', _context3.t1);

                                                case 46:
                                                case 'end':
                                                    return _context3.stop();
                                            }
                                        }
                                    }, _callee3, undefined, [[0, 43], [12, 29, 33, 41], [34,, 36, 40]]);
                                }))).catch(function (e) {
                                    console.log('ERROR:', e);
                                    res.json({ 'message': 'File uploaded error' });
                                });
                            }).then(function () {
                                return res.redirect('/product');
                            }).catch(function (e) {
                                console.log(e);
                            });
                        });

                    case 1:
                    case 'end':
                        return _context4.stop();
                }
            }
        }, _callee4, undefined);
    }));

    return function (_x6, _x7) {
        return _ref3.apply(this, arguments);
    };
}());

product.route('/:id').post(function () {
    var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5(req, res) {
        var id, data;
        return _regenerator2.default.wrap(function _callee5$(_context5) {
            while (1) {
                switch (_context5.prev = _context5.next) {
                    case 0:
                        id = req.params.id;
                        data = req.body;
                        _context5.prev = 2;
                        _context5.next = 5;
                        return _product2.default.findByIdAndUpdate(id, data);

                    case 5:
                        return _context5.abrupt('return', res.json({ 'message': 'Update successful' }));

                    case 8:
                        _context5.prev = 8;
                        _context5.t0 = _context5['catch'](2);

                        console.log(_context5.t0);
                        return _context5.abrupt('return', res.json({ 'message': 'Update error', 'error': (0, _stringify2.default)(_context5.t0) }));

                    case 12:
                    case 'end':
                        return _context5.stop();
                }
            }
        }, _callee5, undefined, [[2, 8]]);
    }));

    return function (_x8, _x9) {
        return _ref5.apply(this, arguments);
    };
}());

product.route('/:id/push').post(function () {
    var _ref6 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee6(req, res) {
        var id, item, data, oauth, listingId, files, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, file, filePath;

        return _regenerator2.default.wrap(function _callee6$(_context6) {
            while (1) {
                switch (_context6.prev = _context6.next) {
                    case 0:
                        id = req.params.id;
                        _context6.next = 3;
                        return _product2.default.findById(id);

                    case 3:
                        item = _context6.sent;

                        if (item) {
                            _context6.next = 6;
                            break;
                        }

                        return _context6.abrupt('return', res.json({ 'message': 'Not found product id ' + id }));

                    case 6:
                        data = {
                            quantity: 999,
                            title: item.title,
                            description: item.description,
                            price: _defaulValues.PRICE,
                            who_made: 'i_did',
                            is_supply: false,
                            when_made: 'made_to_order',
                            shipping_template_id: _defaulValues.SHIPPING_TEMPLATE_ID,
                            tags: item.tags.join(','),
                            state: 'draft',
                            taxonomy_id: _defaulValues.TAXONOMY_ID
                        };
                        _context6.prev = 7;
                        oauth = (0, _utils.getOauth)(req);
                        _context6.next = 11;
                        return (0, _utils.pushItem)(oauth, data);

                    case 11:
                        listingId = _context6.sent;
                        files = _fs2.default.readdirSync(_path2.default.join(__dirname, '../public/images/products/' + item.name + '/'));
                        _iteratorNormalCompletion2 = true;
                        _didIteratorError2 = false;
                        _iteratorError2 = undefined;
                        _context6.prev = 16;
                        _iterator2 = (0, _getIterator3.default)(files);

                    case 18:
                        if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                            _context6.next = 26;
                            break;
                        }

                        file = _step2.value;
                        filePath = _path2.default.join(__dirname, '../public/images/products/' + item.name + '/' + file);
                        _context6.next = 23;
                        return (0, _utils.updateImage)(oauth, listingId, filePath);

                    case 23:
                        _iteratorNormalCompletion2 = true;
                        _context6.next = 18;
                        break;

                    case 26:
                        _context6.next = 32;
                        break;

                    case 28:
                        _context6.prev = 28;
                        _context6.t0 = _context6['catch'](16);
                        _didIteratorError2 = true;
                        _iteratorError2 = _context6.t0;

                    case 32:
                        _context6.prev = 32;
                        _context6.prev = 33;

                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }

                    case 35:
                        _context6.prev = 35;

                        if (!_didIteratorError2) {
                            _context6.next = 38;
                            break;
                        }

                        throw _iteratorError2;

                    case 38:
                        return _context6.finish(35);

                    case 39:
                        return _context6.finish(32);

                    case 40:
                        _context6.next = 42;
                        return (0, _utils.updateVariations)(oauth, listingId, data.price);

                    case 42:
                        _context6.next = 44;
                        return _product2.default.findByIdAndUpdate(id, { pushedToEtsy: 1 });

                    case 44:
                        return _context6.abrupt('return', res.json({ 'message': 'success' }));

                    case 47:
                        _context6.prev = 47;
                        _context6.t1 = _context6['catch'](7);

                        console.log(_context6.t1);
                        return _context6.abrupt('return', res.json({ 'message': 'error', 'error': _context6.t1 }));

                    case 51:
                    case 'end':
                        return _context6.stop();
                }
            }
        }, _callee6, undefined, [[7, 47], [16, 28, 32, 40], [33,, 35, 39]]);
    }));

    return function (_x10, _x11) {
        return _ref6.apply(this, arguments);
    };
}());

module.exports = product;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJzdG9yYWdlIiwibXVsdGVyIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsInJlcSIsImZpbGUiLCJjYiIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiZmlsZW5hbWUiLCJEYXRlIiwibm93Iiwib3JpZ2luYWxuYW1lIiwiZmlsZUZpbHRlciIsInNwbGl0IiwibGVuZ3RoIiwiRXJyb3IiLCJ1cGxvYWQiLCJhcnJheSIsInByb2R1Y3QiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwicmVzIiwibmV4dCIsInNlZUFsbCIsInF1ZXJ5IiwiY29uZGl0aW9uIiwicHVzaGVkVG9FdHN5IiwiUHJvZHVjdCIsImZpbmQiLCJpdGVtcyIsInJlbmRlciIsInJvdXRlIiwicG9zdCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZmlsZXMiLCJyZWRpcmVjdCIsIlByb21pc2UiLCJlYWNoIiwiY3JlYXRlIiwibmFtZSIsImRpciIsImNyZWF0ZWRBdCIsInRoZW4iLCJpbWFnZVBhdGgiLCJqaW1wIiwicmVhZCIsImltYWdlIiwicmVzaXplIiwiQVVUTyIsImNvbG9ycyIsImZzIiwicmVhZGRpclN5bmMiLCJta2RpclN5bmMiLCJjb2xvciIsImNvbG9yUGF0aCIsImNvbG9yRmlsZSIsImNvbXBvc2l0ZSIsIndyaXRlIiwiY2F0Y2giLCJlIiwiaWQiLCJwYXJhbXMiLCJkYXRhIiwiYm9keSIsImZpbmRCeUlkQW5kVXBkYXRlIiwiZmluZEJ5SWQiLCJpdGVtIiwicXVhbnRpdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwicHJpY2UiLCJQUklDRSIsIndob19tYWRlIiwiaXNfc3VwcGx5Iiwid2hlbl9tYWRlIiwic2hpcHBpbmdfdGVtcGxhdGVfaWQiLCJTSElQUElOR19URU1QTEFURV9JRCIsInRhZ3MiLCJzdGF0ZSIsInRheG9ub215X2lkIiwiVEFYT05PTVlfSUQiLCJvYXV0aCIsImxpc3RpbmdJZCIsImZpbGVQYXRoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOztBQUtBOzs7O0FBRUEsSUFBSUEsVUFBVUMsaUJBQU9DLFdBQVAsQ0FBbUI7QUFDN0JDLGlCQUFhLHFCQUFDQyxHQUFELEVBQU1DLElBQU4sRUFBWUMsRUFBWixFQUFtQjtBQUM1QkEsV0FBRyxJQUFILEVBQVNDLGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQiwwQkFBckIsQ0FBVDtBQUNILEtBSDRCO0FBSTdCQyxjQUFVLGtCQUFDTixHQUFELEVBQU1DLElBQU4sRUFBWUMsRUFBWixFQUFtQjtBQUN6QkEsV0FBRyxJQUFILEVBQVNLLEtBQUtDLEdBQUwsS0FBYSxHQUFiLEdBQW1CUCxLQUFLUSxZQUFqQztBQUNILEtBTjRCO0FBTzdCQyxnQkFBYSxvQkFBQ1YsR0FBRCxFQUFNQyxJQUFOLEVBQVlDLEVBQVosRUFBbUI7QUFDNUIsWUFBSUQsS0FBS1EsWUFBTCxDQUFrQkUsS0FBbEIsQ0FBd0IsR0FBeEIsRUFBNkJWLEtBQUtRLFlBQUwsQ0FBa0JFLEtBQWxCLENBQXdCLEdBQXhCLEVBQTZCQyxNQUE3QixHQUFvQyxDQUFqRSxLQUF1RSxLQUEzRSxFQUFtRjtBQUMvRSxtQkFBT1YsR0FBRyxJQUFJVyxLQUFKLENBQVUsc0JBQVYsQ0FBSCxDQUFQO0FBQ0g7QUFDRFgsV0FBRyxJQUFILEVBQVMsSUFBVDtBQUNIO0FBWjRCLENBQW5CLENBQWQ7O0FBZUEsSUFBSVksU0FBUyxzQkFBTyxFQUFFbEIsU0FBU0EsT0FBWCxFQUFQLEVBQTZCbUIsS0FBN0IsQ0FBbUMsVUFBbkMsRUFBK0MsRUFBL0MsQ0FBYjs7QUFFQSxJQUFJQyxVQUFVQyxrQkFBUUMsTUFBUixFQUFkOztBQUVBRixRQUFRRyxHQUFSLENBQVksR0FBWjtBQUFBLHdGQUFpQixpQkFBTW5CLEdBQU4sRUFBV29CLEdBQVgsRUFBZ0JDLElBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNUQyw4QkFEUyxHQUNBdEIsSUFBSXVCLEtBQUosQ0FBVUQsTUFEVjtBQUVURSxpQ0FGUyxHQUVHLEVBRkg7OztBQUliLDRCQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNURSx3Q0FBWSxFQUFFQyxjQUFjLENBQWhCLEVBQVo7QUFDSDs7QUFOWTtBQUFBLCtCQVFLQyxrQkFBUUMsSUFBUixDQUFhSCxTQUFiLENBUkw7O0FBQUE7QUFRVEksNkJBUlM7O0FBU2JSLDRCQUFJUyxNQUFKLENBQVcsU0FBWCxFQUFzQixFQUFFRCxPQUFPQSxLQUFULEVBQXRCOztBQVRhO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQWpCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQVlBWixRQUFRYyxLQUFSLENBQWMsU0FBZCxFQUNLWCxHQURMO0FBQUEseUZBQ1Msa0JBQU1uQixHQUFOLEVBQVdvQixHQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNHRSw4QkFESCxHQUNZdEIsSUFBSXVCLEtBQUosQ0FBVUQsTUFEdEI7QUFFR0UsaUNBRkgsR0FFZSxFQUZmOzs7QUFJRCw0QkFBSSxDQUFDRixNQUFMLEVBQWE7QUFDVEUsd0NBQVksRUFBRUMsY0FBYyxDQUFoQixFQUFaO0FBQ0g7O0FBTkE7QUFBQSwrQkFRaUJDLGtCQUFRQyxJQUFSLENBQWFILFNBQWIsQ0FSakI7O0FBQUE7QUFRR0ksNkJBUkg7O0FBU0RSLDRCQUFJUyxNQUFKLENBQVcsU0FBWCxFQUFzQixFQUFFRCxPQUFPQSxLQUFULEVBQXRCOztBQVRDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRFQ7O0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FZS0csSUFaTDtBQUFBLHlGQVlVLGtCQUFNL0IsR0FBTixFQUFXb0IsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ZOLCtCQUFPZCxHQUFQLEVBQVlvQixHQUFaLEVBQWlCLFVBQUNZLEdBQUQsRUFBUztBQUN0QixnQ0FBSUEsR0FBSixFQUFTO0FBQ0xDLHdDQUFRQyxHQUFSLENBQVksU0FBWixFQUF1QkYsR0FBdkI7QUFDQSx1Q0FBT1osSUFBSWUsSUFBSixDQUFTLHlCQUFlSCxHQUFmLENBQVQsQ0FBUDtBQUNIOztBQUVELGdDQUFHLENBQUNoQyxJQUFJb0MsS0FBSixDQUFVeEIsTUFBZCxFQUFzQjtBQUNsQix1Q0FBT1EsSUFBSWlCLFFBQUosQ0FBYSxVQUFiLENBQVA7QUFDSDs7QUFFRCxtQ0FBT0MsbUJBQVFDLElBQVIsQ0FBYXZDLElBQUlvQyxLQUFqQixFQUF3QixnQkFBUTtBQUNuQyx1Q0FBT1Ysa0JBQVFjLE1BQVIsQ0FBZTtBQUNsQkMsMENBQU14QyxLQUFLSyxRQURPO0FBRWxCb0MseUNBQUsscUJBQXFCekMsS0FBS0ssUUFGYjtBQUdsQnFDLCtDQUFXLElBQUlwQyxJQUFKO0FBSE8saUNBQWYsRUFJSnFDLElBSkksMEVBSUM7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0lDLDZEQUhKLEdBR2dCMUMsZUFBS0MsSUFBTCxDQUFVQyxTQUFWLEVBQXFCLDhCQUE4QkosS0FBS0ssUUFBeEQsQ0FIaEI7QUFJQTs7QUFKQTtBQUFBLDJEQUtrQndDLGVBQUtDLElBQUwsQ0FBVUYsU0FBVixDQUxsQjs7QUFBQTtBQUtJRyx5REFMSjtBQUFBO0FBQUEsMkRBT01BLE1BQU1DLE1BQU4sQ0FBYSxHQUFiLEVBQWtCSCxlQUFLSSxJQUF2QixDQVBOOztBQUFBO0FBUUE7O0FBRUlDLDBEQVZKLEdBVWFDLGFBQUdDLFdBQUgsQ0FBZWxELGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQix5QkFBckIsQ0FBZixDQVZiOztBQVdBK0MsaUVBQUdFLFNBQUgsQ0FBYW5ELGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQiwrQkFBK0JKLEtBQUtLLFFBQXpELENBQWI7O0FBWEE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyRkFhb0I2QyxNQWJwQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQWFXSSx5REFiWDtBQWNRQyw2REFkUixHQWNvQnJELGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQiw0QkFBNEJrRCxLQUFqRCxDQWRwQjtBQUFBO0FBQUEsMkRBZTBCVCxlQUFLQyxJQUFMLENBQVVTLFNBQVYsQ0FmMUI7O0FBQUE7QUFlUUMsNkRBZlI7QUFBQTtBQUFBLDJEQWdCVUEsVUFBVUMsU0FBVixDQUFvQlYsS0FBcEIsRUFBMkIsR0FBM0IsRUFBZ0MsR0FBaEMsQ0FoQlY7O0FBQUE7QUFBQTtBQUFBLDJEQWlCVVMsVUFBVUUsS0FBVixDQUFnQnhELGVBQUtDLElBQUwsQ0FBVUMsU0FBVixFQUFxQiwrQkFBK0JKLEtBQUtLLFFBQXBDLEdBQStDLEdBQS9DLEdBQXFEaUQsS0FBMUUsQ0FBaEIsQ0FqQlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQW9CQXRCLDREQUFRQyxHQUFSLENBQVksUUFBWjs7QUFwQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSkQsSUEyQkowQixLQTNCSSxDQTJCRSxVQUFDQyxDQUFELEVBQU87QUFDWjVCLDRDQUFRQyxHQUFSLENBQVksUUFBWixFQUFzQjJCLENBQXRCO0FBQ0F6Qyx3Q0FBSWUsSUFBSixDQUFTLEVBQUUsV0FBVyxxQkFBYixFQUFUO0FBQ0gsaUNBOUJNLENBQVA7QUErQkgsNkJBaENNLEVBaUNOUyxJQWpDTSxDQWlDRCxZQUFNO0FBQ1IsdUNBQU94QixJQUFJaUIsUUFBSixDQUFhLFVBQWIsQ0FBUDtBQUNILDZCQW5DTSxFQW9DTnVCLEtBcENNLENBb0NBLGFBQUs7QUFDUjNCLHdDQUFRQyxHQUFSLENBQVkyQixDQUFaO0FBQ0gsNkJBdENNLENBQVA7QUF3Q0gseUJBbEREOztBQURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBWlY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBa0VBN0MsUUFBUWMsS0FBUixDQUFjLE1BQWQsRUFDS0MsSUFETDtBQUFBLHlGQUNVLGtCQUFNL0IsR0FBTixFQUFXb0IsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTBDLDBCQURGLEdBQ085RCxJQUFJK0QsTUFBSixDQUFXRCxFQURsQjtBQUVFRSw0QkFGRixHQUVTaEUsSUFBSWlFLElBRmI7QUFBQTtBQUFBO0FBQUEsK0JBS1F2QyxrQkFBUXdDLGlCQUFSLENBQTBCSixFQUExQixFQUE4QkUsSUFBOUIsQ0FMUjs7QUFBQTtBQUFBLDBEQU1TNUMsSUFBSWUsSUFBSixDQUFTLEVBQUMsV0FBVyxtQkFBWixFQUFULENBTlQ7O0FBQUE7QUFBQTtBQUFBOztBQVFFRixnQ0FBUUMsR0FBUjtBQVJGLDBEQVNTZCxJQUFJZSxJQUFKLENBQVMsRUFBQyxXQUFXLGNBQVosRUFBNEIsU0FBUyxzQ0FBckMsRUFBVCxDQVRUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBY0FuQixRQUFRYyxLQUFSLENBQWMsV0FBZCxFQUNLQyxJQURMO0FBQUEseUZBQ1Usa0JBQU0vQixHQUFOLEVBQVdvQixHQUFYO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRTBDLDBCQURGLEdBQ085RCxJQUFJK0QsTUFBSixDQUFXRCxFQURsQjtBQUFBO0FBQUEsK0JBRWVwQyxrQkFBUXlDLFFBQVIsQ0FBaUJMLEVBQWpCLENBRmY7O0FBQUE7QUFFRU0sNEJBRkY7O0FBQUEsNEJBSUdBLElBSkg7QUFBQTtBQUFBO0FBQUE7O0FBQUEsMERBSWdCaEQsSUFBSWUsSUFBSixDQUFTLEVBQUMscUNBQW1DMkIsRUFBcEMsRUFBVCxDQUpoQjs7QUFBQTtBQU1FRSw0QkFORixHQU1TO0FBQ1BLLHNDQUFVLEdBREg7QUFFUEMsbUNBQU9GLEtBQUtFLEtBRkw7QUFHUEMseUNBQWFILEtBQUtHLFdBSFg7QUFJUEMsbUNBQU9DLG1CQUpBO0FBS1BDLHNDQUFVLE9BTEg7QUFNUEMsdUNBQVcsS0FOSjtBQU9QQyx1Q0FBVyxlQVBKO0FBUVBDLGtEQUFzQkMsa0NBUmY7QUFTUEMsa0NBQU1YLEtBQUtXLElBQUwsQ0FBVTNFLElBQVYsQ0FBZSxHQUFmLENBVEM7QUFVUDRFLG1DQUFPLE9BVkE7QUFXUEMseUNBQWFDO0FBWE4seUJBTlQ7QUFBQTtBQXFCTUMsNkJBckJOLEdBcUJjLHFCQUFTbkYsR0FBVCxDQXJCZDtBQUFBO0FBQUEsK0JBc0J3QixxQkFBU21GLEtBQVQsRUFBZ0JuQixJQUFoQixDQXRCeEI7O0FBQUE7QUFzQk1vQixpQ0F0Qk47QUF3Qk1oRCw2QkF4Qk4sR0F3QmNnQixhQUFHQyxXQUFILENBQWVsRCxlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsK0JBQStCK0QsS0FBSzNCLElBQXBDLEdBQTJDLEdBQWhFLENBQWYsQ0F4QmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdFQTBCcUJMLEtBMUJyQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQTBCYW5DLDRCQTFCYjtBQTJCVW9GLGdDQTNCVixHQTJCcUJsRixlQUFLQyxJQUFMLENBQVVDLFNBQVYsRUFBcUIsK0JBQStCK0QsS0FBSzNCLElBQXBDLEdBQTJDLEdBQTNDLEdBQWlEeEMsSUFBdEUsQ0EzQnJCO0FBQUE7QUFBQSwrQkE0Qlksd0JBQVlrRixLQUFaLEVBQW1CQyxTQUFuQixFQUE4QkMsUUFBOUIsQ0E1Qlo7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsK0JBOEJRLDZCQUFpQkYsS0FBakIsRUFBd0JDLFNBQXhCLEVBQW1DcEIsS0FBS1EsS0FBeEMsQ0E5QlI7O0FBQUE7QUFBQTtBQUFBLCtCQStCUTlDLGtCQUFRd0MsaUJBQVIsQ0FBMEJKLEVBQTFCLEVBQThCLEVBQUVyQyxjQUFjLENBQWhCLEVBQTlCLENBL0JSOztBQUFBO0FBQUEsMERBZ0NTTCxJQUFJZSxJQUFKLENBQVMsRUFBQyxXQUFXLFNBQVosRUFBVCxDQWhDVDs7QUFBQTtBQUFBO0FBQUE7O0FBa0NFRixnQ0FBUUMsR0FBUjtBQWxDRiwwREFtQ1NkLElBQUllLElBQUosQ0FBUyxFQUFDLFdBQVcsT0FBWixFQUFxQixxQkFBckIsRUFBVCxDQW5DVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURWOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdDQW1ELE9BQU9DLE9BQVAsR0FBaUJ2RSxPQUFqQiIsImZpbGUiOiJwcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnXG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgamltcCBmcm9tICdqaW1wJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHNoYXJwIGZyb20gJ3NoYXJwJ1xuXG5pbXBvcnQgeyBcbiAgICBTSElQUElOR19URU1QTEFURV9JRCxcbiAgICBUQVhPTk9NWV9JRCxcbiAgICBQUklDRVxufSBmcm9tICcuLi9jb25maWcvZGVmYXVsVmFsdWVzJ1xuaW1wb3J0IHsgZ2V0T2F1dGgsIHB1c2hJdGVtLCB1cGRhdGVJbWFnZSwgdXBkYXRlVmFyaWF0aW9ucyB9IGZyb20gJy4vdXRpbHMnXG5cbmxldCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICBkZXN0aW5hdGlvbjogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICAgICAgY2IobnVsbCwgcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvdXBsb2FkcycpKVxuICAgIH0sXG4gICAgZmlsZW5hbWU6IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgICAgIGNiKG51bGwsIERhdGUubm93KCkgKyAnLScgKyBmaWxlLm9yaWdpbmFsbmFtZSlcbiAgICB9LFxuICAgIGZpbGVGaWx0ZXIgOiAocmVxLCBmaWxlLCBjYikgPT4ge1xuICAgICAgICBpZiAoZmlsZS5vcmlnaW5hbG5hbWUuc3BsaXQoJy4nKVtmaWxlLm9yaWdpbmFsbmFtZS5zcGxpdCgnLicpLmxlbmd0aC0xXSAhPSAncG5nJykgIHtcbiAgICAgICAgICAgIHJldHVybiBjYihuZXcgRXJyb3IoJ1dyb25nIGV4dGVuc2lvbiB0eXBlJykpXG4gICAgICAgIH1cbiAgICAgICAgY2IobnVsbCwgdHJ1ZSlcbiAgICB9XG59KVxuXG5sZXQgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZTogc3RvcmFnZSB9KS5hcnJheSgncGljLWZpbGUnLCAxMClcblxubGV0IHByb2R1Y3QgPSBleHByZXNzLlJvdXRlcigpXG5cbnByb2R1Y3QuZ2V0KCcvJywgYXN5bmMocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBsZXQgc2VlQWxsID0gcmVxLnF1ZXJ5LnNlZUFsbFxuICAgIGxldCBjb25kaXRpb24gPSB7fVxuXG4gICAgaWYgKCFzZWVBbGwpIHtcbiAgICAgICAgY29uZGl0aW9uID0geyBwdXNoZWRUb0V0c3k6IDAgfVxuICAgIH1cblxuICAgIGxldCBpdGVtcyA9IGF3YWl0IFByb2R1Y3QuZmluZChjb25kaXRpb24pXG4gICAgcmVzLnJlbmRlcigncHJvZHVjdCcsIHsgaXRlbXM6IGl0ZW1zIH0pXG59KVxuXG5wcm9kdWN0LnJvdXRlKCcvdXBsb2FkJylcbiAgICAuZ2V0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGxldCBzZWVBbGwgPSByZXEucXVlcnkuc2VlQWxsXG4gICAgICAgIGxldCBjb25kaXRpb24gPSB7fVxuXG4gICAgICAgIGlmICghc2VlQWxsKSB7XG4gICAgICAgICAgICBjb25kaXRpb24gPSB7IHB1c2hlZFRvRXRzeTogMCB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgaXRlbXMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoY29uZGl0aW9uKVxuICAgICAgICByZXMucmVuZGVyKCdwcm9kdWN0JywgeyBpdGVtczogaXRlbXMgfSlcbiAgICB9KVxuICAgIC5wb3N0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIHVwbG9hZChyZXEsIHJlcywgKGVycikgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjogJywgZXJyKVxuICAgICAgICAgICAgICAgIHJldHVybiByZXMuanNvbihKU09OLnN0cmluZ2lmeShlcnIpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZighcmVxLmZpbGVzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9wcm9kdWN0JylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UuZWFjaChyZXEuZmlsZXMsIGZpbGUgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9kdWN0LmNyZWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZpbGUuZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRpcjogJy9pbWFnZXMvdXBsb2Fkcy8nICsgZmlsZS5maWxlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpXG4gICAgICAgICAgICAgICAgfSkudGhlbihhc3luYygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IHRTaGlydFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9zaGlydHMvdGVlLWZyb250LnBuZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy8nICsgZmlsZS5maWxlbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vbGV0IHRzaGlydCA9IGF3YWl0IGppbXAucmVhZCh0U2hpcnRQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gYXdhaXQgamltcC5yZWFkKGltYWdlUGF0aClcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW1hZ2UucmVzaXplKDQwMCwgamltcC5BVVRPKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9hd2FpdCB0c2hpcnQuY29tcG9zaXRlKGltYWdlLCAzMTUsIDE1MClcblxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9ycyA9IGZzLnJlYWRkaXJTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL2NvbG9yLycpKVxuICAgICAgICAgICAgICAgICAgICAgICAgZnMubWtkaXJTeW5jKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL3Byb2R1Y3RzLycgKyBmaWxlLmZpbGVuYW1lKSlcblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb2xvciBvZiBjb2xvcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3JQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvY29sb3IvJyArIGNvbG9yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvckZpbGUgPSBhd2FpdCBqaW1wLnJlYWQoY29sb3JQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbG9yRmlsZS5jb21wb3NpdGUoaW1hZ2UsIDMwMCwgMjAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbG9yRmlsZS53cml0ZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9wcm9kdWN0cy8nICsgZmlsZS5maWxlbmFtZSArICcvJyArIGNvbG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6JywgZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6JywgZSlcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oeyAnbWVzc2FnZSc6ICdGaWxlIHVwbG9hZGVkIGVycm9yJyB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9wcm9kdWN0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxuXG5wcm9kdWN0LnJvdXRlKCcvOmlkJylcbiAgICAucG9zdChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgICAgICBsZXQgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIGxldCBkYXRhID0gcmVxLmJvZHlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvZHVjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSlcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnVXBkYXRlIHN1Y2Nlc3NmdWwnfSlcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6ICdVcGRhdGUgZXJyb3InLCAnZXJyb3InOiBKU09OLnN0cmluZ2lmeShlKX0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5wcm9kdWN0LnJvdXRlKCcvOmlkL3B1c2gnKVxuICAgIC5wb3N0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgbGV0IGl0ZW0gPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKGlkKVxuXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6IGBOb3QgZm91bmQgcHJvZHVjdCBpZCAke2lkfWB9KVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgcXVhbnRpdHk6IDk5OSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmljZTogUFJJQ0UsXG4gICAgICAgICAgICB3aG9fbWFkZTogJ2lfZGlkJyxcbiAgICAgICAgICAgIGlzX3N1cHBseTogZmFsc2UsXG4gICAgICAgICAgICB3aGVuX21hZGU6ICdtYWRlX3RvX29yZGVyJyxcbiAgICAgICAgICAgIHNoaXBwaW5nX3RlbXBsYXRlX2lkOiBTSElQUElOR19URU1QTEFURV9JRCxcbiAgICAgICAgICAgIHRhZ3M6IGl0ZW0udGFncy5qb2luKCcsJyksXG4gICAgICAgICAgICBzdGF0ZTogJ2RyYWZ0JyxcbiAgICAgICAgICAgIHRheG9ub215X2lkOiBUQVhPTk9NWV9JRFxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBvYXV0aCA9IGdldE9hdXRoKHJlcSlcbiAgICAgICAgICAgIGxldCBsaXN0aW5nSWQgPSBhd2FpdCBwdXNoSXRlbShvYXV0aCwgZGF0YSlcblxuICAgICAgICAgICAgbGV0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvcHJvZHVjdHMvJyArIGl0ZW0ubmFtZSArICcvJykpXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL3Byb2R1Y3RzLycgKyBpdGVtLm5hbWUgKyAnLycgKyBmaWxlKVxuICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUltYWdlKG9hdXRoLCBsaXN0aW5nSWQsIGZpbGVQYXRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdXBkYXRlVmFyaWF0aW9ucyhvYXV0aCwgbGlzdGluZ0lkLCBkYXRhLnByaWNlKVxuICAgICAgICAgICAgYXdhaXQgUHJvZHVjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgeyBwdXNoZWRUb0V0c3k6IDEgfSlcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnc3VjY2Vzcyd9KVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeydtZXNzYWdlJzogJ2Vycm9yJywgJ2Vycm9yJzogZX0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2R1Y3QiXX0=