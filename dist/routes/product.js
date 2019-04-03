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
        var items;
        return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        _context.next = 2;
                        return _product2.default.find({});

                    case 2:
                        items = _context.sent;

                        res.render('product', { items: items });

                    case 4:
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
        var items;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
            while (1) {
                switch (_context2.prev = _context2.next) {
                    case 0:
                        _context2.next = 2;
                        return _product2.default.find({ pushedToEtsy: 0 });

                    case 2:
                        items = _context2.sent;

                        res.render('product', { items: items });

                    case 4:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcHJvZHVjdC5qcyJdLCJuYW1lcyI6WyJzdG9yYWdlIiwibXVsdGVyIiwiZGlza1N0b3JhZ2UiLCJkZXN0aW5hdGlvbiIsInJlcSIsImZpbGUiLCJjYiIsInBhdGgiLCJqb2luIiwiX19kaXJuYW1lIiwiZmlsZW5hbWUiLCJEYXRlIiwibm93Iiwib3JpZ2luYWxuYW1lIiwiZmlsZUZpbHRlciIsInNwbGl0IiwibGVuZ3RoIiwiRXJyb3IiLCJ1cGxvYWQiLCJhcnJheSIsInByb2R1Y3QiLCJleHByZXNzIiwiUm91dGVyIiwiZ2V0IiwicmVzIiwibmV4dCIsIlByb2R1Y3QiLCJmaW5kIiwiaXRlbXMiLCJyZW5kZXIiLCJyb3V0ZSIsInB1c2hlZFRvRXRzeSIsInBvc3QiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwianNvbiIsImZpbGVzIiwicmVkaXJlY3QiLCJQcm9taXNlIiwiZWFjaCIsImNyZWF0ZSIsIm5hbWUiLCJkaXIiLCJjcmVhdGVkQXQiLCJ0aGVuIiwidFNoaXJ0UGF0aCIsImltYWdlUGF0aCIsImppbXAiLCJyZWFkIiwidHNoaXJ0IiwiaW1hZ2UiLCJyZXNpemUiLCJBVVRPIiwiY29tcG9zaXRlIiwiY29sb3JzIiwiZnMiLCJyZWFkZGlyU3luYyIsIm1rZGlyU3luYyIsImNvbG9yIiwiY29sb3JQYXRoIiwiY29sb3JGaWxlIiwid3JpdGUiLCJjYXRjaCIsImUiLCJpZCIsInBhcmFtcyIsImRhdGEiLCJib2R5IiwiZmluZEJ5SWRBbmRVcGRhdGUiLCJmaW5kQnlJZCIsIml0ZW0iLCJxdWFudGl0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsIlBSSUNFIiwid2hvX21hZGUiLCJpc19zdXBwbHkiLCJ3aGVuX21hZGUiLCJzaGlwcGluZ190ZW1wbGF0ZV9pZCIsIlNISVBQSU5HX1RFTVBMQVRFX0lEIiwidGFncyIsInN0YXRlIiwidGF4b25vbXlfaWQiLCJUQVhPTk9NWV9JRCIsIm9hdXRoIiwibGlzdGluZ0lk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S0FBS1EsS0FBeEMsQ0E5QlI7O0FBQUE7QUFBQTtBQUFBLCtCQStCUWpELGtCQUFRMkMsaUJBQVIsQ0FBMEJKLEVBQTFCLEVBQThCLEVBQUVsQyxjQUFjLENBQWhCLEVBQTlCLENBL0JSOztBQUFBO0FBQUEsMERBZ0NTUCxJQUFJWSxJQUFKLENBQVMsRUFBQyxXQUFXLFFBQVosRUFBVCxDQWhDVDs7QUFBQTtBQUFBO0FBQUE7O0FBa0NFRixnQ0FBUUMsR0FBUjtBQWxDRiwwREFtQ1NYLElBQUlZLElBQUosQ0FBUyxFQUFDLFdBQVcsUUFBWixFQUFzQixxQkFBdEIsRUFBVCxDQW5DVDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQURWOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQXdDQXFELE9BQU9DLE9BQVAsR0FBaUJ0RSxPQUFqQiIsImZpbGUiOiJwcm9kdWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb21pc2UgZnJvbSAnYmx1ZWJpcmQnXG5pbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJ1xuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi4vbW9kZWxzL3Byb2R1Y3QnXG5pbXBvcnQgbXVsdGVyIGZyb20gJ211bHRlcidcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXG5pbXBvcnQgamltcCBmcm9tICdqaW1wJ1xuaW1wb3J0IGZzIGZyb20gJ2ZzJ1xuaW1wb3J0IHNoYXJwIGZyb20gJ3NoYXJwJ1xuXG5pbXBvcnQgeyBcbiAgICBTSElQUElOR19URU1QTEFURV9JRCxcbiAgICBUQVhPTk9NWV9JRCxcbiAgICBQUklDRVxufSBmcm9tICcuLi9jb25maWcvZGVmYXVsVmFsdWVzJ1xuaW1wb3J0IHsgZ2V0T2F1dGgsIHB1c2hJdGVtLCB1cGRhdGVJbWFnZSwgdXBkYXRlVmFyaWF0aW9ucyB9IGZyb20gJy4vdXRpbHMnXG5cbmxldCBzdG9yYWdlID0gbXVsdGVyLmRpc2tTdG9yYWdlKHtcbiAgICBkZXN0aW5hdGlvbjogKHJlcSwgZmlsZSwgY2IpID0+IHtcbiAgICAgICAgY2IobnVsbCwgcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvdXBsb2FkcycpKVxuICAgIH0sXG4gICAgZmlsZW5hbWU6IChyZXEsIGZpbGUsIGNiKSA9PiB7XG4gICAgICAgIGNiKG51bGwsIERhdGUubm93KCkgKyAnLScgKyBmaWxlLm9yaWdpbmFsbmFtZSlcbiAgICB9LFxuICAgIGZpbGVGaWx0ZXIgOiAocmVxLCBmaWxlLCBjYikgPT4ge1xuICAgICAgICBpZiAoZmlsZS5vcmlnaW5hbG5hbWUuc3BsaXQoJy4nKVtmaWxlLm9yaWdpbmFsbmFtZS5zcGxpdCgnLicpLmxlbmd0aC0xXSAhPSAncG5nJykgIHtcbiAgICAgICAgICAgIHJldHVybiBjYihuZXcgRXJyb3IoJ1dyb25nIGV4dGVuc2lvbiB0eXBlJykpXG4gICAgICAgIH1cbiAgICAgICAgY2IobnVsbCwgdHJ1ZSlcbiAgICB9XG59KVxuXG5sZXQgdXBsb2FkID0gbXVsdGVyKHsgc3RvcmFnZTogc3RvcmFnZSB9KS5hcnJheSgncGljLWZpbGUnLCAxMClcblxubGV0IHByb2R1Y3QgPSBleHByZXNzLlJvdXRlcigpXG5cbnByb2R1Y3QuZ2V0KCcvJywgYXN5bmMocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBsZXQgaXRlbXMgPSBhd2FpdCBQcm9kdWN0LmZpbmQoe30pXG4gICAgcmVzLnJlbmRlcigncHJvZHVjdCcsIHsgaXRlbXM6IGl0ZW1zIH0pXG59KVxuXG5wcm9kdWN0LnJvdXRlKCcvdXBsb2FkJylcbiAgICAuZ2V0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGxldCBpdGVtcyA9IGF3YWl0IFByb2R1Y3QuZmluZCh7cHVzaGVkVG9FdHN5OiAwfSlcbiAgICAgICAgcmVzLnJlbmRlcigncHJvZHVjdCcsIHsgaXRlbXM6IGl0ZW1zIH0pXG4gICAgfSlcbiAgICAucG9zdChhc3luYyhyZXEsIHJlcykgPT4ge1xuICAgICAgICB1cGxvYWQocmVxLCByZXMsIChlcnIpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRVJST1I6ICcsIGVycilcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oSlNPTi5zdHJpbmdpZnkoZXJyKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoIXJlcS5maWxlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLnJlZGlyZWN0KCcvcHJvZHVjdCcpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmVhY2gocmVxLmZpbGVzLCBmaWxlID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvZHVjdC5jcmVhdGUoe1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBmaWxlLmZpbGVuYW1lLFxuICAgICAgICAgICAgICAgICAgICBkaXI6ICcvaW1hZ2VzL3VwbG9hZHMvJyArIGZpbGUuZmlsZW5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoKVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oYXN5bmMoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdFNoaXJ0UGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL3NoaXJ0cy90ZWUtZnJvbnQucG5nJylcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWFnZVBhdGggPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy91cGxvYWRzLycgKyBmaWxlLmZpbGVuYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRzaGlydCA9IGF3YWl0IGppbXAucmVhZCh0U2hpcnRQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltYWdlID0gYXdhaXQgamltcC5yZWFkKGltYWdlUGF0aClcblxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgaW1hZ2UucmVzaXplKDQwMCwgamltcC5BVVRPKVxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdHNoaXJ0LmNvbXBvc2l0ZShpbWFnZSwgMzE1LCAxNTApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjb2xvcnMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9jb2xvci8nKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZzLm1rZGlyU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9wcm9kdWN0cy8nICsgZmlsZS5maWxlbmFtZSkpXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29sb3Igb2YgY29sb3JzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL2NvbG9yLycgKyBjb2xvcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2xvclBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yRmlsZSA9IGF3YWl0IGppbXAucmVhZChjb2xvclBhdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29sb3JGaWxlLmNvbXBvc2l0ZSh0c2hpcnQsIDAsIDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgY29sb3JGaWxlLndyaXRlKHBhdGguam9pbihfX2Rpcm5hbWUsICcuLi9wdWJsaWMvaW1hZ2VzL3Byb2R1Y3RzLycgKyBmaWxlLmZpbGVuYW1lICsgJy8nICsgY29sb3IpKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjonLCBlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFUlJPUjonLCBlKVxuICAgICAgICAgICAgICAgICAgICByZXMuanNvbih7ICdtZXNzYWdlJzogJ0ZpbGUgdXBsb2FkZWQgZXJyb3InIH0pXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5yZWRpcmVjdCgnL3Byb2R1Y3QnKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0pXG5cbnByb2R1Y3Qucm91dGUoJy86aWQnKVxuICAgIC5wb3N0KGFzeW5jKHJlcSwgcmVzKSA9PiB7XG4gICAgICAgIGxldCBpZCA9IHJlcS5wYXJhbXMuaWRcbiAgICAgICAgbGV0IGRhdGEgPSByZXEuYm9keVxuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkQW5kVXBkYXRlKGlkLCBkYXRhKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6ICdVcGRhdGUgc3VjY2Vzc2Z1bCd9KVxuICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oeydtZXNzYWdlJzogJ1VwZGF0ZSBlcnJvcicsICdlcnJvcic6IEpTT04uc3RyaW5naWZ5KGUpfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbnByb2R1Y3Qucm91dGUoJy86aWQvcHVzaCcpXG4gICAgLnBvc3QoYXN5bmMocmVxLCByZXMpID0+IHtcbiAgICAgICAgbGV0IGlkID0gcmVxLnBhcmFtcy5pZFxuICAgICAgICBsZXQgaXRlbSA9IGF3YWl0IFByb2R1Y3QuZmluZEJ5SWQoaWQpXG5cbiAgICAgICAgaWYgKCFpdGVtKSByZXR1cm4gcmVzLmpzb24oeydtZXNzYWdlJzogYE5vdCBmb3VuZCBwcm9kdWN0IGlkICR7aWR9YH0pXG5cbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBxdWFudGl0eTogOTk5LFxuICAgICAgICAgICAgdGl0bGU6IGl0ZW0udGl0bGUsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogaXRlbS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHByaWNlOiBQUklDRSxcbiAgICAgICAgICAgIHdob19tYWRlOiAnaV9kaWQnLFxuICAgICAgICAgICAgaXNfc3VwcGx5OiBmYWxzZSxcbiAgICAgICAgICAgIHdoZW5fbWFkZTogJ21hZGVfdG9fb3JkZXInLFxuICAgICAgICAgICAgc2hpcHBpbmdfdGVtcGxhdGVfaWQ6IFNISVBQSU5HX1RFTVBMQVRFX0lELFxuICAgICAgICAgICAgdGFnczogaXRlbS50YWdzLmpvaW4oJywnKSxcbiAgICAgICAgICAgIHN0YXRlOiAnZHJhZnQnLFxuICAgICAgICAgICAgdGF4b25vbXlfaWQ6IFRBWE9OT01ZX0lEXG4gICAgICAgIH1cblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGV0IG9hdXRoID0gZ2V0T2F1dGgocmVxKVxuICAgICAgICAgICAgbGV0IGxpc3RpbmdJZCA9IGF3YWl0IHB1c2hJdGVtKG9hdXRoLCBkYXRhKVxuXG4gICAgICAgICAgICBsZXQgZmlsZXMgPSBmcy5yZWFkZGlyU3luYyhwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4vcHVibGljL2ltYWdlcy9wcm9kdWN0cy8nICsgaXRlbS5uYW1lICsgJy8nKSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZpbGVQYXRoID0gcGF0aC5qb2luKF9fZGlybmFtZSwgJy4uL3B1YmxpYy9pbWFnZXMvcHJvZHVjdHMvJyArIGl0ZW0ubmFtZSArICcvJyArIGZpbGUpXG4gICAgICAgICAgICAgICAgYXdhaXQgdXBkYXRlSW1hZ2Uob2F1dGgsIGxpc3RpbmdJZCwgZmlsZVBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhd2FpdCB1cGRhdGVWYXJpYXRpb25zKG9hdXRoLCBsaXN0aW5nSWQsIGRhdGEucHJpY2UpXG4gICAgICAgICAgICBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkQW5kVXBkYXRlKGlkLCB7IHB1c2hlZFRvRXRzeTogMSB9KVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6ICdQVVNIRUQnfSlcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKHsnbWVzc2FnZSc6ICdQVVNIRUQnLCAnZXJyb3InOiBlfSlcbiAgICAgICAgfVxuICAgIH0pXG5cbm1vZHVsZS5leHBvcnRzID0gcHJvZHVjdCJdfQ==