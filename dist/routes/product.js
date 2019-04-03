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
                                    var tShirtPath, imagePath, tshirt, image, colors, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, color, colorPath, colorFile;

                                    return _regenerator2.default.wrap(function _callee3$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                                case 0:
                                                    _context3.prev = 0;
                                                    tShirtPath = _path2.default.join(__dirname, '../public/images/shirts/tee-front.png');
                                                    imagePath = _path2.default.join(__dirname, '../public/images/uploads/' + file.filename);
                                                    _context3.next = 5;
                                                    return _jimp2.default.read(tShirtPath);

                                                case 5:
                                                    tshirt = _context3.sent;
                                                    _context3.next = 8;
                                                    return _jimp2.default.read(imagePath);

                                                case 8:
                                                    image = _context3.sent;
                                                    _context3.next = 11;
                                                    return image.resize(400, _jimp2.default.AUTO);

                                                case 11:
                                                    _context3.next = 13;
                                                    return tshirt.composite(image, 315, 150);

                                                case 13:
                                                    colors = _fs2.default.readdirSync(_path2.default.join(__dirname, '../public/images/color/'));

                                                    _fs2.default.mkdirSync(_path2.default.join(__dirname, '../public/images/products/' + file.filename));

                                                    _iteratorNormalCompletion = true;
                                                    _didIteratorError = false;
                                                    _iteratorError = undefined;
                                                    _context3.prev = 18;
                                                    _iterator = (0, _getIterator3.default)(colors);

                                                case 20:
                                                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                                                        _context3.next = 34;
                                                        break;
                                                    }

                                                    color = _step.value;
                                                    colorPath = _path2.default.join(__dirname, '../public/images/color/' + color);

                                                    console.log(colorPath);
                                                    _context3.next = 26;
                                                    return _jimp2.default.read(colorPath);

                                                case 26:
                                                    colorFile = _context3.sent;
                                                    _context3.next = 29;
                                                    return colorFile.composite(tshirt, 0, 0);

                                                case 29:
                                                    _context3.next = 31;
                                                    return colorFile.write(_path2.default.join(__dirname, '../public/images/products/' + file.filename + '/' + color));

                                                case 31:
                                                    _iteratorNormalCompletion = true;
                                                    _context3.next = 20;
                                                    break;

                                                case 34:
                                                    _context3.next = 40;
                                                    break;

                                                case 36:
                                                    _context3.prev = 36;
                                                    _context3.t0 = _context3['catch'](18);
                                                    _didIteratorError = true;
                                                    _iteratorError = _context3.t0;

                                                case 40:
                                                    _context3.prev = 40;
                                                    _context3.prev = 41;

                                                    if (!_iteratorNormalCompletion && _iterator.return) {
                                                        _iterator.return();
                                                    }

                                                case 43:
                                                    _context3.prev = 43;

                                                    if (!_didIteratorError) {
                                                        _context3.next = 46;
                                                        break;
                                                    }

                                                    throw _iteratorError;

                                                case 46:
                                                    return _context3.finish(43);

                                                case 47:
                                                    return _context3.finish(40);

                                                case 48:
                                                    _context3.next = 53;
                                                    break;

                                                case 50:
                                                    _context3.prev = 50;
                                                    _context3.t1 = _context3['catch'](0);

                                                    console.log('ERROR:', _context3.t1);

                                                case 53:
                                                case 'end':
                                                    return _context3.stop();
                                            }
                                        }
                                    }, _callee3, undefined, [[0, 50], [18, 36, 40, 48], [41,, 43, 47]]);
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
                        return _context6.abrupt('return', res.json({ 'message': 'PUSHED' }));

                    case 47:
                        _context6.prev = 47;
                        _context6.t1 = _context6['catch'](7);

                        console.log(_context6.t1);
                        return _context6.abrupt('return', res.json({ 'message': 'PUSHED', 'error': _context6.t1 }));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJzdG9yYWdlIiwibXVsdGVyIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsInJlcSIsImZpbGUiLCJjYiIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiZmlsZW5hbWUiLCJEYXRlIiwibm93Iiwib3JpZ2luYWxuYW1lIiwiZmlsZUZpbHRlciIsInNwbGl0IiwibGVuZ3RoIiwiRXJyb3IiLCJ1cGxvYWQiLCJhcnJheSIsInByb2R1Y3QiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwicmVzIiwibmV4dCIsInNlZUFsbCIsInF1ZXJ5IiwiY29uZGl0aW9uIiwicHVzaGVkVG9FdHN5IiwiUHJvZHVjdCIsImZpbmQiLCJpdGVtcyIsInJlbmRlciIsInJvdXRlIiwicG9zdCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJqc29uIiwiZmlsZXMiLCJyZWRpcmVjdCIsIlByb21pc2UiLCJlYWNoIiwiY3JlYXRlIiwibmFtZSIsImRpciIsImNyZWF0ZWRBdCIsInRoZW4iLCJ0U2hpcnRQYXRoIiwiaW1hZ2VQYXRoIiwiamltcCIsInJlYWQiLCJ0c2hpcnQiLCJpbWFnZSIsInJlc2l6ZSIsIkFVVE8iLCJjb21wb3NpdGUiLCJjb2xvcnMiLCJmcyIsInJlYWRkaXJTeW5jIiwibWtkaXJTeW5jIiwiY29sb3IiLCJjb2xvclBhdGgiLCJjb2xvckZpbGUiLCJ3cml0ZSIsImNhdGNoIiwiZSIsImlkIiwicGFyYW1zIiwiZGF0YSIsImJvZHkiLCJmaW5kQnlJZEFuZFVwZGF0ZSIsImZpbmRCeUlkIiwiaXRlbSIsInF1YW50aXR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByaWNlIiwiUFJJQ0UiLCJ3aG9fbWFkZSIsImlzX3N1cHBseSIsIndoZW5fbWFkZSIsInNoaXBwaW5nX3RlbXBsYXRlX2lkIiwiU0hJUFBJTkdfVEVNUExBVEVfSUQiLCJ0YWdzIiwic3RhdGUiLCJ0YXhvbm9teV9pZCIsIlRB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RSxDQTNCckI7QUFBQTtBQUFBLCtCQTRCWSx3QkFBWW9GLEtBQVosRUFBbUJDLFNBQW5CLEVBQThCQyxRQUE5QixDQTVCWjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQSwrQkE4QlEsNkJBQWlCRixLQUFqQixFQUF3QkMsU0FBeEIsRUFBbUNwQixLQUFLUSxLQUF4QyxDQTlCUjs7QUFBQTtBQUFBO0FBQUEsK0JBK0JRaEQsa0JBQVEwQyxpQkFBUixDQUEwQkosRUFBMUIsRUFBOEIsRUFBRXZDLGNBQWMsQ0FBaEIsRUFBOUIsQ0EvQlI7O0FBQUE7QUFBQSwwREFnQ1NMLElBQUllLElBQUosQ0FBUyxFQUFDLFdBQVcsUUFBWixFQUFULENBaENUOztBQUFBO0FBQUE7QUFBQTs7QUFrQ0VGLGdDQUFRQyxHQUFSO0FBbENGLDBEQW1DU2QsSUFBSWUsSUFBSixDQUFTLEVBQUMsV0FBVyxRQUFaLEVBQXNCLHFCQUF0QixFQUFULENBbkNUOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRFY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBd0NBcUQsT0FBT0MsT0FBUCxHQUFpQnpFLE9BQWpCIiwiZmlsZSI6InByb2R1Y3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCdcbmltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnXG5pbXBvcnQgUHJvZHVjdCBmcm9tICcuLi9tb2RlbHMvcHJvZHVjdCdcbmltcG9ydCBtdWx0ZXIgZnJvbSAnbXVsdGVyJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBqaW1wIGZyb20gJ2ppbXAnXG5pbXBvcnQgZnMgZnJvbSAnZnMnXG5pbXBvcnQgc2hhcnAgZnJvbSAnc2hhcnAnXG5cbmltcG9ydCB7IFxuICAgIFNISVBQSU5HX1RFTVBMQVRFX0lELFxuICAgIFRBWE9OT01ZX0lELFxuICAgIFBSSUNFXG59IGZyb20gJy4uL2NvbmZpZy9kZWZhdWxWYWx1ZXMnXG5pbXBvcnQgeyBnZXRPYXV0aCwgcHVzaEl0ZW0sIHVwZGF0ZUltYWdlLCB1cGRhdGVWYXJpYXRpb25zIH0gZnJvbSAnLi91dGlscydcblxubGV0IHN0b3JhZ2UgPSBtdWx0ZXIuZGlza1N0b3JhZ2Uoe1xuICAgIGRlc3RpbmF0aW9uOiAocmVxLCBmaWxlLCBjYikgPT4ge1xuICAgICAgICBjYihudWxsLCBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy91cGxvYWRzJykpXG4gICAgfSxcbiAgICBmaWxlbmFtZTogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICAgICAgY2IobnVsbCwgRGF0ZS5ub3coKSArICctJyArIGZpbGUub3JpZ2luYWxuYW1lKVxuICAgIH0sXG4gICAgZmlsZUZpbHRlciA6IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgICAgIGlmIChmaWxlLm9yaWdpbmFsbmFtZS5zcGxpdCgnLicpW2ZpbGUub3JpZ2luYWxuYW1lLnNwbGl0KCcuJykubGVuZ3RoLTFdICE9ICdwbmcnKSAge1xuICAgICAgICAgICAgcmV0dXJuIGNiKG5ldyBFcnJvcignV3JvbmcgZXh0ZW5zaW9uIHR5cGUnKSlcbiAgICAgICAgfVxuICAgICAgICBjYihudWxsLCB0cnVlKVxuICAgIH1cbn0pXG5cbmxldCB1cGxvYWQgPSBtdWx0ZXIoeyBzdG9yYWdlOiBzdG9yYWdlIH0pLmFycmF5KCdwaWMtZmlsZScsIDEwKVxuXG5sZXQgcHJvZHVjdCA9IGV4cHJlc3MuUm91dGVyKClcblxucHJvZHVjdC5nZXQoJy8nLCBhc3luYyhyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIGxldCBzZWVBbGwgPSByZXEucXVlcnkuc2VlQWxsXG4gICAgbGV0IGNvbmRpdGlvbiA9IHt9XG5cbiAgICBpZiAoIXNlZUFsbCkge1xuICAgICAgICBjb25kaXRpb24gPSB7IHB1c2hlZFRvRXRzeTogMCB9XG4gICAgfVxuXG4gICAgbGV0IGl0ZW1zID0gYXdhaXQgUHJvZHVjdC5maW5kKGNvbmRpdGlvbilcbiAgICByZXMucmVuZGVyKCdwcm9kdWN0JywgeyBpdGVtczogaXRlbXMgfSlcbn0pXG5cbnByb2R1Y3Qucm91dGUoJy91cGxvYWQnKVxuICAgIC5nZXQoYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICAgICAgbGV0IHNlZUFsbCA9IHJlcS5xdWVyeS5zZWVBbGxcbiAgICAgICAgbGV0IGNvbmRpdGlvbiA9IHt9XG5cbiAgICAgICAgaWYgKCFzZWVBbGwpIHtcbiAgICAgICAgICAgIGNvbmRpdGlvbiA9IHsgcHVzaGVkVG9FdHN5OiAwIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpdGVtcyA9IGF3YWl0IFByb2R1Y3QuZmluZChjb25kaXRpb24pXG4gICAgICAgIHJlcy5yZW5kZXIoJ3Byb2R1Y3QnLCB7IGl0ZW1zOiBpdGVtcyB9KVxuICAgIH0pXG4gICAgLnBvc3QoYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICAgICAgdXBsb2FkKHJlcSwgcmVzLCAoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SOiAnLCBlcnIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKEpTT04uc3RyaW5naWZ5KGVycikpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKCFyZXEuZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL3Byb2R1Y3QnKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5lYWNoKHJlcS5maWxlcywgZmlsZSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb2R1Y3QuY3JlYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZmlsZS5maWxlbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZGlyOiAnL2ltYWdlcy91cGxvYWRzLycgKyBmaWxlLmZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKClcbiAgICAgICAgICAgICAgICB9KS50aGVuKGFzeW5jKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRTaGlydFBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9zaGlydHMvdGVlLWZyb250LnBuZycpXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1hZ2VQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy8nICsgZmlsZS5maWxlbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0c2hpcnQgPSBhd2FpdCBqaW1wLnJlYWQodFNoaXJ0UGF0aClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZSA9IGF3YWl0IGppbXAucmVhZChpbWFnZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGltYWdlLnJlc2l6ZSg0MDAsIGppbXAuQVVUTylcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRzaGlydC5jb21wb3NpdGUoaW1hZ2UsIDMxNSwgMTUwKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sb3JzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvY29sb3IvJykpXG4gICAgICAgICAgICAgICAgICAgICAgICBmcy5ta2RpclN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvcHJvZHVjdHMvJyArIGZpbGUuZmlsZW5hbWUpKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbG9yIG9mIGNvbG9ycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvclBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9jb2xvci8nICsgY29sb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coY29sb3JQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvckZpbGUgPSBhd2FpdCBqaW1wLnJlYWQoY29sb3JQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbG9yRmlsZS5jb21wb3NpdGUodHNoaXJ0LCAwLCAwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGNvbG9yRmlsZS53cml0ZShwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9wcm9kdWN0cy8nICsgZmlsZS5maWxlbmFtZSArICcvJyArIGNvbG9yKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6JywgZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6JywgZSlcbiAgICAgICAgICAgICAgICAgICAgcmVzLmpzb24oeyAnbWVzc2FnZSc6ICdGaWxlIHVwbG9hZGVkIGVycm9yJyB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoJy9wcm9kdWN0JylcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfSlcbiAgICB9KVxuXG5wcm9kdWN0LnJvdXRlKCcvOmlkJylcbiAgICAucG9zdChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgICAgICBsZXQgaWQgPSByZXEucGFyYW1zLmlkXG4gICAgICAgIGxldCBkYXRhID0gcmVxLmJvZHlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgUHJvZHVjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgZGF0YSlcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnVXBkYXRlIHN1Y2Nlc3NmdWwnfSlcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6ICdVcGRhdGUgZXJyb3InLCAnZXJyb3InOiBKU09OLnN0cmluZ2lmeShlKX0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5wcm9kdWN0LnJvdXRlKCcvOmlkL3B1c2gnKVxuICAgIC5wb3N0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgbGV0IGl0ZW0gPSBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKGlkKVxuXG4gICAgICAgIGlmICghaXRlbSkgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6IGBOb3QgZm91bmQgcHJvZHVjdCBpZCAke2lkfWB9KVxuXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgcXVhbnRpdHk6IDk5OSxcbiAgICAgICAgICAgIHRpdGxlOiBpdGVtLnRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICBwcmljZTogUFJJQ0UsXG4gICAgICAgICAgICB3aG9fbWFkZTogJ2lfZGlkJyxcbiAgICAgICAgICAgIGlzX3N1cHBseTogZmFsc2UsXG4gICAgICAgICAgICB3aGVuX21hZGU6ICdtYWRlX3RvX29yZGVyJyxcbiAgICAgICAgICAgIHNoaXBwaW5nX3RlbXBsYXRlX2lkOiBTSElQUElOR19URU1QTEFURV9JRCxcbiAgICAgICAgICAgIHRhZ3M6IGl0ZW0udGFncy5qb2luKCcsJyksXG4gICAgICAgICAgICBzdGF0ZTogJ2RyYWZ0JyxcbiAgICAgICAgICAgIHRheG9ub215X2lkOiBUQVhPTk9NWV9JRFxuICAgICAgICB9XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBvYXV0aCA9IGdldE9hdXRoKHJlcSlcbiAgICAgICAgICAgIGxldCBsaXN0aW5nSWQgPSBhd2FpdCBwdXNoSXRlbShvYXV0aCwgZGF0YSlcblxuICAgICAgICAgICAgbGV0IGZpbGVzID0gZnMucmVhZGRpclN5bmMocGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvcHJvZHVjdHMvJyArIGl0ZW0ubmFtZSArICcvJykpXG5cbiAgICAgICAgICAgIGZvciAoY29uc3QgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgICAgIGxldCBmaWxlUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL3Byb2R1Y3RzLycgKyBpdGVtLm5hbWUgKyAnLycgKyBmaWxlKVxuICAgICAgICAgICAgICAgIGF3YWl0IHVwZGF0ZUltYWdlKG9hdXRoLCBsaXN0aW5nSWQsIGZpbGVQYXRoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgdXBkYXRlVmFyaWF0aW9ucyhvYXV0aCwgbGlzdGluZ0lkLCBkYXRhLnByaWNlKVxuICAgICAgICAgICAgYXdhaXQgUHJvZHVjdC5maW5kQnlJZEFuZFVwZGF0ZShpZCwgeyBwdXNoZWRUb0V0c3k6IDEgfSlcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnUFVTSEVEJ30pXG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgICAgIHJldHVybiByZXMuanNvbih7J21lc3NhZ2UnOiAnUFVTSEVEJywgJ2Vycm9yJzogZX0pXG4gICAgICAgIH1cbiAgICB9KVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByb2R1Y3QiXX0=