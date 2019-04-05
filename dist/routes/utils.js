"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateVariations = exports.updateImage = exports.pushItem = exports.getOauth = undefined;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _bluebird = require("bluebird");

var _bluebird2 = _interopRequireDefault(_bluebird);

var _request = require("request");

var _request2 = _interopRequireDefault(_request);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _defaulValues = require("../config/defaulValues");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getOauth = function getOauth(req) {
    // let token = req.session.oauth.access_token
    // let secret = req.session.oauth.access_token_secret

    // let oauth = {
    //     consumer_key: "0knnnx78v7lgld0vs633ktut",
    //     consumer_secret: "t009aeebvl",
    //     token: token,
    //     token_secret: secret
    // }

    var oauth = {
        consumer_key: _defaulValues.CONSUMER_KEY,
        consumer_secret: _defaulValues.CONSUMER_SECRET,
        token: _defaulValues.TOKEN,
        token_secret: _defaulValues.TOKEN_SECRET
    };

    return oauth;
};

var pushItem = function pushItem(oauth, data) {
    return new _bluebird2.default(function (resolve, reject) {
        _request2.default.post({
            url: "https://openapi.etsy.com/v2/listings",
            oauth: oauth,
            qs: data,
            json: true
        }, function (err, response, body) {
            if (err) return reject(err);

            try {
                var listingId = body.results[0].listing_id;
                return resolve(listingId);
            } catch (e) {
                console.log('Error pushitem', e);
                return reject({
                    error: 'Pushing item error',
                    message: body
                });
            }
        });
    });
};

var updateImage = function updateImage(oauth, id, file) {
    return new _bluebird2.default(function (resolve, reject) {
        var r = _request2.default.post({
            url: "https://openapi.etsy.com/v2/listings/" + id + "/images",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            oauth: oauth
        }, function (err, response, body) {
            if (err) {
                return reject({
                    error: 'Update image error',
                    message: err
                });
            }
            resolve(body);
        });

        var form = r.form();
        form.append("image", _fs2.default.createReadStream(file));
    });
};

var updateVariations = function updateVariations(oauth, id, price) {
    var variations = generateVariations(id, price);
    var data = {
        "products": variations,
        "price_on_property": '62809790533,200',
        "quantity_on_property": '',
        "sku_on_property": '62809790533,200'
    };

    return new _bluebird2.default(function (resolve, reject) {
        _request2.default.put({
            url: "https://openapi.etsy.com/v2/listings/" + id + "/inventory",
            oauth: oauth,
            form: data
        }, function (err, response, body) {
            if (err) {
                return reject({
                    error: 'Update Variations error',
                    message: error
                });
            }

            try {
                body = JSON.parse(body);
            } catch (e) {
                return reject({
                    error: 'Update variations error',
                    message: body
                });
            }

            resolve();
        });
    });
};

var generateVariations = function generateVariations(listingId, price) {
    var variations = [{
        "sku": listingId + "_s_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["S"],
            "value_ids": [2137]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_s_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["S"],
            "value_ids": [2137]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_s_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["S"],
            "value_ids": [2137]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_s_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["S"],
            "value_ids": [2137]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_s_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["S"],
            "value_ids": [2137]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_m_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["M"],
            "value_ids": [2139]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_m_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["M"],
            "value_ids": [2139]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_m_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["M"],
            "value_ids": [2139]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_m_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["M"],
            "value_ids": [2139]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_m_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["M"],
            "value_ids": [2139]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_l_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["L"],
            "value_ids": [2141]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_l_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["L"],
            "value_ids": [2141]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_l_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["L"],
            "value_ids": [2141]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_l_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["L"],
            "value_ids": [2141]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_l_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["L"],
            "value_ids": [2141]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_xl_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["XL"],
            "value_ids": [2144]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_xl_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["XL"],
            "value_ids": [2144]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_xl_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["XL"],
            "value_ids": [2144]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_xl_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["XL"],
            "value_ids": [2144]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_xl_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["XL"],
            "value_ids": [2144]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_2x_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["2X"],
            "value_ids": [2147]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_2x_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["2X"],
            "value_ids": [2147]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_2x_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["2X"],
            "value_ids": [2147]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_2x_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["2X"],
            "value_ids": [2147]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_2x_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["2X"],
            "value_ids": [2147]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_3x_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["3X"],
            "value_ids": [2149]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_3x_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["3X"],
            "value_ids": [2149]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_3x_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["3X"],
            "value_ids": [2149]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_3x_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["3X"],
            "value_ids": [2149]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_3x_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["3X"],
            "value_ids": [2149]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_4x_black",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["4X"],
            "value_ids": [2151]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Black"],
            "value_ids": [1]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_4x_navy",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["4X"],
            "value_ids": [2151]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Navy"],
            "value_ids": [52178634305]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_4x_purple",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["4X"],
            "value_ids": [2151]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Purple"],
            "value_ids": [8]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_4x_royal",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["4X"],
            "value_ids": [2151]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Royal"],
            "value_ids": [58354515685]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }, {
        "sku": listingId + "_4x_dark",
        "property_values": [{
            "property_id": 62809790533,
            "property_name": "Size",
            "scale_id": 51,
            "scale_name": "Letter size (Men's)",
            "values": ["4X"],
            "value_ids": [2151]
        }, {
            "property_id": 200,
            "property_name": "Primary color",
            "scale_id": null,
            "scale_name": null,
            "values": ["Dark Heather"],
            "value_ids": [77069646428]
        }],
        "offerings": [{
            "price": price + 2,
            "quantity": 999,
            "is_enabled": 1,
            "is_deleted": 0
        }],
        "is_deleted": 0
    }];
    return (0, _stringify2.default)(variations);
};

exports.getOauth = getOauth;
exports.pushItem = pushItem;
exports.updateImage = updateImage;
exports.updateVariations = updateVariations;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXRpbHMuanMiXSwibmFtZXMiOlsiZ2V0T2F1dGgiLCJvYXV0aCIsImNvbnN1bWVyX2tleSIsIkNPTlNVTUVSX0tFWSIsImNvbnN1bWVyX3NlY3JldCIsIkNPTlNVTUVSX1NFQ1JFVCIsInRva2VuIiwiVE9LRU4iLCJ0b2tlbl9zZWNyZXQiLCJUT0tFTl9TRUNSRVQiLCJwdXNoSXRlbSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJwb3N0IiwidXJsIiwicXMiLCJqc29uIiwiZXJyIiwicmVzcG9uc2UiLCJib2R5IiwibGlzdGluZ0lkIiwicmVzdWx0cyIsImxpc3RpbmdfaWQiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInVwZGF0ZUltYWdlIiwiaWQiLCJmaWxlIiwiciIsImhlYWRlcnMiLCJmb3JtIiwiYXBwZW5kIiwiZnMiLCJjcmVhdGVSZWFkU3RyZWFtIiwidXBkYXRlVmFyaWF0aW9ucyIsInByaWNlIiwidmFyaWF0aW9ucyIsImdlbmVyYXRlVmFyaWF0aW9ucyIsInB1dCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQU9BLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxNQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUlDLFFBQVE7QUFDUkMsc0JBQWNDLDBCQUROO0FBRVJDLHlCQUFpQkMsNkJBRlQ7QUFHUkMsZUFBT0MsbUJBSEM7QUFJUkMsc0JBQWNDO0FBSk4sS0FBWjs7QUFPQSxXQUFPUixLQUFQO0FBQ0gsQ0FuQkQ7O0FBcUJBLElBQU1TLFdBQVcsU0FBWEEsUUFBVyxDQUFDVCxLQUFELEVBQVFVLElBQVIsRUFBaUI7QUFDOUIsV0FBTyxJQUFJQyxrQkFBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFx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QTRCSSxxQkFBYSxDQUNUO0FBQ0kscUJBQVNrQixRQUFRLENBRHJCO0FBRUksd0JBQVksR0FGaEI7QUFHSSwwQkFBYyxDQUhsQjtBQUlJLDBCQUFjO0FBSmxCLFNBRFMsQ0E1QmpCO0FBb0NJLHNCQUFjO0FBcENsQixLQTd3Q2lCLENBQWpCO0FBb3pDQSxXQUFPLHlCQUFlQyxVQUFmLENBQVA7QUFDSCxDQXR6Q0Q7O1FBd3pDUzFDLFEsR0FBQUEsUTtRQUFVVSxRLEdBQUFBLFE7UUFBVXFCLFcsR0FBQUEsVztRQUFhUyxnQixHQUFBQSxnQiIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9taXNlIGZyb20gXCJibHVlYmlyZFwiXG5pbXBvcnQgcmVxdWVzdCBmcm9tIFwicmVxdWVzdFwiXG5pbXBvcnQgZnMgZnJvbSBcImZzXCJcbmltcG9ydCB7XG4gICAgQ09OU1VNRVJfS0VZLFxuICAgIENPTlNVTUVSX1NFQ1JFVCxcbiAgICBUT0tFTixcbiAgICBUT0tFTl9TRUNSRVRcbn0gZnJvbSAnLi4vY29uZmlnL2RlZmF1bFZhbHVlcydcblxuY29uc3QgZ2V0T2F1dGggPSByZXEgPT4ge1xuICAgIC8vIGxldCB0b2tlbiA9IHJlcS5zZXNzaW9uLm9hdXRoLmFjY2Vzc190b2tlblxuICAgIC8vIGxldCBzZWNyZXQgPSByZXEuc2Vzc2lvbi5vYXV0aC5hY2Nlc3NfdG9rZW5fc2VjcmV0XG5cbiAgICAvLyBsZXQgb2F1dGggPSB7XG4gICAgLy8gICAgIGNvbnN1bWVyX2tleTogXCIwa25ubng3OHY3bGdsZDB2czYzM2t0dXRcIixcbiAgICAvLyAgICAgY29uc3VtZXJfc2VjcmV0OiBcInQwMDlhZWVidmxcIixcbiAgICAvLyAgICAgdG9rZW46IHRva2VuLFxuICAgIC8vICAgICB0b2tlbl9zZWNyZXQ6IHNlY3JldFxuICAgIC8vIH1cblxuICAgIGxldCBvYXV0aCA9IHtcbiAgICAgICAgY29uc3VtZXJfa2V5OiBDT05TVU1FUl9LRVksXG4gICAgICAgIGNvbnN1bWVyX3NlY3JldDogQ09OU1VNRVJfU0VDUkVULFxuICAgICAgICB0b2tlbjogVE9LRU4sXG4gICAgICAgIHRva2VuX3NlY3JldDogVE9LRU5fU0VDUkVUXG4gICAgfVxuXG4gICAgcmV0dXJuIG9hdXRoXG59XG5cbmNvbnN0IHB1c2hJdGVtID0gKG9hdXRoLCBkYXRhKSA9PiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVxdWVzdC5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL29wZW5hcGkuZXRzeS5jb20vdjIvbGlzdGluZ3NcIixcbiAgICAgICAgICAgICAgICBvYXV0aDogb2F1dGgsXG4gICAgICAgICAgICAgICAgcXM6IGRhdGEsXG4gICAgICAgICAgICAgICAganNvbjogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gcmVqZWN0KGVycilcblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBsaXN0aW5nSWQgPSBib2R5LnJlc3VsdHNbMF0ubGlzdGluZ19pZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShsaXN0aW5nSWQpXG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdFcnJvciBwdXNoaXRlbScsIGUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdQdXNoaW5nIGl0ZW0gZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH0pXG59XG5cbmNvbnN0IHVwZGF0ZUltYWdlID0gKG9hdXRoLCBpZCwgZmlsZSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGxldCByID0gcmVxdWVzdC5wb3N0KFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHVybDogYGh0dHBzOi8vb3BlbmFwaS5ldHN5LmNvbS92Mi9saXN0aW5ncy8ke2lkfS9pbWFnZXNgLFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9hdXRoOiBvYXV0aFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdVcGRhdGUgaW1hZ2UgZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICByZXNvbHZlKGJvZHkpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcblxuICAgICAgICBsZXQgZm9ybSA9IHIuZm9ybSgpXG4gICAgICAgIGZvcm0uYXBwZW5kKFwiaW1hZ2VcIiwgZnMuY3JlYXRlUmVhZFN0cmVhbShmaWxlKSlcbiAgICB9KVxufVxuXG5jb25zdCB1cGRhdGVWYXJpYXRpb25zID0gKG9hdXRoLCBpZCwgcHJpY2UpID0+IHtcbiAgICBsZXQgdmFyaWF0aW9ucyA9IGdlbmVyYXRlVmFyaWF0aW9ucyhpZCwgcHJpY2UpXG4gICAgbGV0IGRhdGEgPSB7XG4gICAgICAgIFwicHJvZHVjdHNcIjogdmFyaWF0aW9ucyxcbiAgICAgICAgXCJwcmljZV9vbl9wcm9wZXJ0eVwiOic2MjgwOTc5MDUzMywyMDAnLFxuICAgICAgICBcInF1YW50aXR5X29uX3Byb3BlcnR5XCI6ICcnLFxuICAgICAgICBcInNrdV9vbl9wcm9wZXJ0eVwiOiAnNjI4MDk3OTA1MzMsMjAwJ1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICByZXF1ZXN0LnB1dChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL29wZW5hcGkuZXRzeS5jb20vdjIvbGlzdGluZ3MvJHtpZH0vaW52ZW50b3J5YCxcbiAgICAgICAgICAgICAgICBvYXV0aDogb2F1dGgsXG4gICAgICAgICAgICAgICAgZm9ybTogZGF0YVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGVyciwgcmVzcG9uc2UsIGJvZHkpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdVcGRhdGUgVmFyaWF0aW9ucyBlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBKU09OLnBhcnNlKGJvZHkpXG4gICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6ICdVcGRhdGUgdmFyaWF0aW9ucyBlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBib2R5XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9KVxufVxuXG5jb25zdCBnZW5lcmF0ZVZhcmlhdGlvbnMgPSAobGlzdGluZ0lkLCBwcmljZSkgPT4ge1xuICAgIGxldCB2YXJpYXRpb25zID0gWyBcbiAgICAgICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9zX2JsYWNrXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkJsYWNrXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfc19uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk5hdnlcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1MjE3ODYzNDMwNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfc19wdXJwbGVcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJTXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjEzN1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUHVycGxlXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfc19yb3lhbFwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDU4MzU0NTE1Njg1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9zX2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJTXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjEzN1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiRGFyayBIZWF0aGVyXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNzcwNjk2NDY0MjhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX21fYmxhY2tcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJNXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjEzOVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQmxhY2tcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9tX25hdnlcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJNXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjEzOVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTmF2eVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUyMTc4NjM0MzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9tX3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk1cIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJQdXJwbGVcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9tX3JveWFsXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlJveWFsXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTgzNTQ1MTU2ODVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX21fZGFya1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk1cIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEYXJrIEhlYXRoZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA3NzA2OTY0NjQyOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfbF9ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJCbGFja1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX2xfbmF2eVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJOYXZ5XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTIxNzg2MzQzMDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX2xfcHVycGxlXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX2xfcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0MVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUm95YWxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1ODM1NDUxNTY4NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfbF9kYXJrXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkRhcmsgSGVhdGhlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDc3MDY5NjQ2NDI4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl94bF9ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0NFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQmxhY2tcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl94bF9uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiWExcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ0XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJOYXZ5XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTIxNzg2MzQzMDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX3hsX3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0NFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUHVycGxlXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfeGxfcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlJveWFsXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTgzNTQ1MTU2ODVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX3hsX2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkRhcmsgSGVhdGhlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDc3MDY5NjQ2NDI4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8yeF9ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjJYXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0N1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQmxhY2tcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfMnhfbmF2eVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjJYXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0N1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTmF2eVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUyMTc4NjM0MzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfMnhfcHVycGxlXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiMlhcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJQdXJwbGVcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfMnhfcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIyWFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlJveWFsXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTgzNTQ1MTU2ODVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8yeF9kYXJrXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiMlhcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEYXJrIEhlYXRoZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA3NzA2OTY0NjQyOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzN4X2JsYWNrXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiM1hcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJCbGFja1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8zeF9uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiM1hcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJOYXZ5XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTIxNzg2MzQzMDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8zeF9wdXJwbGVcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIzWFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8zeF9yb3lhbFwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjNYXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0OVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUm95YWxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1ODM1NDUxNTY4NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzN4X2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIzWFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkRhcmsgSGVhdGhlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDc3MDY5NjQ2NDI4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfNHhfYmxhY2tcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCI0WFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNTFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkJsYWNrXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzR4X25hdnlcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgKE1lbidzKVwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCI0WFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNTFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk5hdnlcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1MjE3ODYzNDMwNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzR4X3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjRYXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE1MVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUHVycGxlXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzR4X3JveWFsXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIChNZW4ncylcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiNFhcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTUxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDU4MzU0NTE1Njg1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfNHhfZGFya1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSAoTWVuJ3MpXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjRYXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE1MVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiRGFyayBIZWF0aGVyXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNzcwNjk2NDY0MjhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH1cbl1cbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodmFyaWF0aW9ucylcbn1cblxuZXhwb3J0IHsgZ2V0T2F1dGgsIHB1c2hJdGVtLCB1cGRhdGVJbWFnZSwgdXBkYXRlVmFyaWF0aW9ucyB9XG4iXX0=