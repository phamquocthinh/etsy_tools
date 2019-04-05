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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
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
            "scale_name": "Letter size ",
            "values": ["2XL"],
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
            "scale_name": "Letter size ",
            "values": ["2XL"],
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
            "scale_name": "Letter size ",
            "values": ["2XL"],
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
            "scale_name": "Letter size ",
            "values": ["2XL"],
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
            "scale_name": "Letter size ",
            "values": ["2XL"],
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
            "scale_name": "Letter size ",
            "values": ["3XL"],
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
            "scale_name": "Letter size ",
            "values": ["3XL"],
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
            "scale_name": "Letter size ",
            "values": ["3XL"],
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
            "scale_name": "Letter size ",
            "values": ["3XL"],
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
            "scale_name": "Letter size ",
            "values": ["3XL"],
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
            "scale_name": "Letter size ",
            "values": ["4XL"],
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
            "scale_name": "Letter size ",
            "values": ["4XL"],
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
            "scale_name": "Letter size ",
            "values": ["4XL"],
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
            "scale_name": "Letter size ",
            "values": ["4XL"],
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
            "scale_name": "Letter size ",
            "values": ["4XL"],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvdXRpbHMuanMiXSwibmFtZXMiOlsiZ2V0T2F1dGgiLCJvYXV0aCIsImNvbnN1bWVyX2tleSIsIkNPTlNVTUVSX0tFWSIsImNvbnN1bWVyX3NlY3JldCIsIkNPTlNVTUVSX1NFQ1JFVCIsInRva2VuIiwiVE9LRU4iLCJ0b2tlbl9zZWNyZXQiLCJUT0tFTl9TRUNSRVQiLCJwdXNoSXRlbSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3QiLCJwb3N0IiwidXJsIiwicXMiLCJqc29uIiwiZXJyIiwicmVzcG9uc2UiLCJib2R5IiwibGlzdGluZ0lkIiwicmVzdWx0cyIsImxpc3RpbmdfaWQiLCJlIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwibWVzc2FnZSIsInVwZGF0ZUltYWdlIiwiaWQiLCJmaWxlIiwiciIsImhlYWRlcnMiLCJmb3JtIiwiYXBwZW5kIiwiZnMiLCJjcmVhdGVSZWFkU3RyZWFtIiwidXBkYXRlVmFyaWF0aW9ucyIsInByaWNlIiwidmFyaWF0aW9ucyIsImdlbmVyYXRlVmFyaWF0aW9ucyIsInB1dCIsIkpTT04iLCJwYXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQU9BLElBQU1BLFdBQVcsU0FBWEEsUUFBVyxNQUFPO0FBQ3BCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFFBQUlDLFFBQVE7QUFDUkMsc0JBQWNDLDBCQUROO0FBRVJDLHlCQUFpQkMsNkJBRlQ7QUFHUkMsZUFBT0MsbUJBSEM7QUFJUkMsc0JBQWNDO0FBSk4sS0FBWjs7QUFPQSxXQUFPUixLQUFQO0FBQ0gsQ0FuQkQ7O0FBcUJBLElBQU1TLFdBQVcsU0FBWEEsUUFBVyxDQUFDVCxLQUFELEVBQVFVLElBQVIsRUFBaUI7QUFDOUIsV0FBTyxJQUFJQyxrQkFBSixDQUFZLFVBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFx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QURyQjtBQUVJLHdCQUFZLEdBRmhCO0FBR0ksMEJBQWMsQ0FIbEI7QUFJSSwwQkFBYztBQUpsQixTQURTLENBNUJqQjtBQW9DSSxzQkFBYztBQXBDbEIsS0E3d0NpQixDQUFqQjtBQW96Q0EsV0FBTyx5QkFBZUMsVUFBZixDQUFQO0FBQ0gsQ0F0ekNEOztRQXd6Q1MxQyxRLEdBQUFBLFE7UUFBVVUsUSxHQUFBQSxRO1FBQVVxQixXLEdBQUFBLFc7UUFBYVMsZ0IsR0FBQUEsZ0IiLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvbWlzZSBmcm9tIFwiYmx1ZWJpcmRcIlxuaW1wb3J0IHJlcXVlc3QgZnJvbSBcInJlcXVlc3RcIlxuaW1wb3J0IGZzIGZyb20gXCJmc1wiXG5pbXBvcnQge1xuICAgIENPTlNVTUVSX0tFWSxcbiAgICBDT05TVU1FUl9TRUNSRVQsXG4gICAgVE9LRU4sXG4gICAgVE9LRU5fU0VDUkVUXG59IGZyb20gJy4uL2NvbmZpZy9kZWZhdWxWYWx1ZXMnXG5cbmNvbnN0IGdldE9hdXRoID0gcmVxID0+IHtcbiAgICAvLyBsZXQgdG9rZW4gPSByZXEuc2Vzc2lvbi5vYXV0aC5hY2Nlc3NfdG9rZW5cbiAgICAvLyBsZXQgc2VjcmV0ID0gcmVxLnNlc3Npb24ub2F1dGguYWNjZXNzX3Rva2VuX3NlY3JldFxuXG4gICAgLy8gbGV0IG9hdXRoID0ge1xuICAgIC8vICAgICBjb25zdW1lcl9rZXk6IFwiMGtubm54Nzh2N2xnbGQwdnM2MzNrdHV0XCIsXG4gICAgLy8gICAgIGNvbnN1bWVyX3NlY3JldDogXCJ0MDA5YWVlYnZsXCIsXG4gICAgLy8gICAgIHRva2VuOiB0b2tlbixcbiAgICAvLyAgICAgdG9rZW5fc2VjcmV0OiBzZWNyZXRcbiAgICAvLyB9XG5cbiAgICBsZXQgb2F1dGggPSB7XG4gICAgICAgIGNvbnN1bWVyX2tleTogQ09OU1VNRVJfS0VZLFxuICAgICAgICBjb25zdW1lcl9zZWNyZXQ6IENPTlNVTUVSX1NFQ1JFVCxcbiAgICAgICAgdG9rZW46IFRPS0VOLFxuICAgICAgICB0b2tlbl9zZWNyZXQ6IFRPS0VOX1NFQ1JFVFxuICAgIH1cblxuICAgIHJldHVybiBvYXV0aFxufVxuXG5jb25zdCBwdXNoSXRlbSA9IChvYXV0aCwgZGF0YSkgPT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJlcXVlc3QucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9vcGVuYXBpLmV0c3kuY29tL3YyL2xpc3RpbmdzXCIsXG4gICAgICAgICAgICAgICAgb2F1dGg6IG9hdXRoLFxuICAgICAgICAgICAgICAgIHFzOiBkYXRhLFxuICAgICAgICAgICAgICAgIGpzb246IHRydWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGlzdGluZ0lkID0gYm9keS5yZXN1bHRzWzBdLmxpc3RpbmdfaWRcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUobGlzdGluZ0lkKVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRXJyb3IgcHVzaGl0ZW0nLCBlKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnUHVzaGluZyBpdGVtIGVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGJvZHlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9KVxufVxuXG5jb25zdCB1cGRhdGVJbWFnZSA9IChvYXV0aCwgaWQsIGZpbGUpID0+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBsZXQgciA9IHJlcXVlc3QucG9zdChcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB1cmw6IGBodHRwczovL29wZW5hcGkuZXRzeS5jb20vdjIvbGlzdGluZ3MvJHtpZH0vaW1hZ2VzYCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvYXV0aDogb2F1dGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnVXBkYXRlIGltYWdlIGVycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVyclxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShib2R5KVxuICAgICAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgbGV0IGZvcm0gPSByLmZvcm0oKVxuICAgICAgICBmb3JtLmFwcGVuZChcImltYWdlXCIsIGZzLmNyZWF0ZVJlYWRTdHJlYW0oZmlsZSkpXG4gICAgfSlcbn1cblxuY29uc3QgdXBkYXRlVmFyaWF0aW9ucyA9IChvYXV0aCwgaWQsIHByaWNlKSA9PiB7XG4gICAgbGV0IHZhcmlhdGlvbnMgPSBnZW5lcmF0ZVZhcmlhdGlvbnMoaWQsIHByaWNlKVxuICAgIGxldCBkYXRhID0ge1xuICAgICAgICBcInByb2R1Y3RzXCI6IHZhcmlhdGlvbnMsXG4gICAgICAgIFwicHJpY2Vfb25fcHJvcGVydHlcIjonNjI4MDk3OTA1MzMsMjAwJyxcbiAgICAgICAgXCJxdWFudGl0eV9vbl9wcm9wZXJ0eVwiOiAnJyxcbiAgICAgICAgXCJza3Vfb25fcHJvcGVydHlcIjogJzYyODA5NzkwNTMzLDIwMCdcbiAgICB9XG4gICAgXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgcmVxdWVzdC5wdXQoXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9vcGVuYXBpLmV0c3kuY29tL3YyL2xpc3RpbmdzLyR7aWR9L2ludmVudG9yeWAsXG4gICAgICAgICAgICAgICAgb2F1dGg6IG9hdXRoLFxuICAgICAgICAgICAgICAgIGZvcm06IGRhdGFcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnIsIHJlc3BvbnNlLCBib2R5KSB7XG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnVXBkYXRlIFZhcmlhdGlvbnMgZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBib2R5ID0gSlNPTi5wYXJzZShib2R5KVxuICAgICAgICAgICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiAnVXBkYXRlIHZhcmlhdGlvbnMgZXJyb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYm9keVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfSlcbn1cblxuY29uc3QgZ2VuZXJhdGVWYXJpYXRpb25zID0gKGxpc3RpbmdJZCwgcHJpY2UpID0+IHtcbiAgICBsZXQgdmFyaWF0aW9ucyA9IFsgXG4gICAgICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfc19ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkJsYWNrXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfc19uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJTXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjEzN1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTmF2eVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUyMTc4NjM0MzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9zX3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiU1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX3Nfcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDU4MzU0NTE1Njg1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9zX2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlNcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEYXJrIEhlYXRoZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA3NzA2OTY0NjQyOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfbV9ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkJsYWNrXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfbV9uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJNXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjEzOVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTmF2eVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUyMTc4NjM0MzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9tX3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxMzlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX21fcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk1cIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDU4MzU0NTE1Njg1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9tX2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk1cIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTM5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEYXJrIEhlYXRoZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA3NzA2OTY0NjQyOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfbF9ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkJsYWNrXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfbF9uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0MVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTmF2eVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUyMTc4NjM0MzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9sX3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX2xfcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDU4MzU0NTE1Njg1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl9sX2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEYXJrIEhlYXRoZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA3NzA2OTY0NjQyOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfeGxfYmxhY2tcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0NFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQmxhY2tcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSxcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl94bF9uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk5hdnlcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1MjE3ODYzNDMwNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfeGxfcHVycGxlXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX3hsX3JveWFsXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDRcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlJveWFsXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTgzNTQ1MTU2ODVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiX3hsX2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0NFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiRGFyayBIZWF0aGVyXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNzcwNjk2NDY0MjhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzJ4X2JsYWNrXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIyWExcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJCbGFja1wiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8yeF9uYXZ5XCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIyWExcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJOYXZ5XCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTIxNzg2MzQzMDVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8yeF9wdXJwbGVcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlB1cnBsZVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl8yeF9yb3lhbFwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiMlhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0N1xuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUm95YWxcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1ODM1NDUxNTY4NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzJ4X2RhcmtcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjJYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkRhcmsgSGVhdGhlclwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDc3MDY5NjQ2NDI4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfM3hfYmxhY2tcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjNYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIkJsYWNrXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzN4X25hdnlcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjNYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNDlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIk5hdnlcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA1MjE3ODYzNDMwNVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzN4X3B1cnBsZVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiM1hMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0OVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiUHVycGxlXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfSxcbiAgICB7XG4gICAgICAgIFwic2t1XCI6IGxpc3RpbmdJZCArIFwiXzN4X3JveWFsXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIzWExcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTQ5XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJSb3lhbFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDU4MzU0NTE1Njg1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfM3hfZGFya1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiM1hMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE0OVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiRGFyayBIZWF0aGVyXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNzcwNjk2NDY0MjhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl80eF9ibGFja1wiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiNFhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE1MVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiQmxhY2tcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfNHhfbmF2eVwiLFxuICAgICAgICBcInByb3BlcnR5X3ZhbHVlc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiA2MjgwOTc5MDUzMyxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJTaXplXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiA1MSxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogXCJMZXR0ZXIgc2l6ZSBcIixcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiNFhMXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMjE1MVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9pZFwiOiAyMDAsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiUHJpbWFyeSBjb2xvclwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInNjYWxlX25hbWVcIjogbnVsbCxcbiAgICAgICAgICAgICAgICBcInZhbHVlc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiTmF2eVwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUyMTc4NjM0MzA1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfNHhfcHVycGxlXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCI0WExcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTUxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJQdXJwbGVcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcIm9mZmVyaW5nc1wiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgXCJwcmljZVwiOiBwcmljZSArIDIsXG4gICAgICAgICAgICAgICAgXCJxdWFudGl0eVwiOiA5OTksXG4gICAgICAgICAgICAgICAgXCJpc19lbmFibGVkXCI6IDEsXG4gICAgICAgICAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJpc19kZWxldGVkXCI6IDBcbiAgICB9LFxuICAgIHtcbiAgICAgICAgXCJza3VcIjogbGlzdGluZ0lkICsgXCJfNHhfcm95YWxcIixcbiAgICAgICAgXCJwcm9wZXJ0eV92YWx1ZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogNjI4MDk3OTA1MzMsXG4gICAgICAgICAgICAgICAgXCJwcm9wZXJ0eV9uYW1lXCI6IFwiU2l6ZVwiLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfaWRcIjogNTEsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IFwiTGV0dGVyIHNpemUgXCIsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIjRYTFwiXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBcInZhbHVlX2lkc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDIxNTFcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfaWRcIjogMjAwLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlByaW1hcnkgY29sb3JcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9uYW1lXCI6IG51bGwsXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZXNcIjogW1xuICAgICAgICAgICAgICAgICAgICBcIlJveWFsXCJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFwidmFsdWVfaWRzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgNTgzNTQ1MTU2ODVcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwib2ZmZXJpbmdzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByaWNlXCI6IHByaWNlICsgMixcbiAgICAgICAgICAgICAgICBcInF1YW50aXR5XCI6IDk5OSxcbiAgICAgICAgICAgICAgICBcImlzX2VuYWJsZWRcIjogMSxcbiAgICAgICAgICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImlzX2RlbGV0ZWRcIjogMFxuICAgIH0sXG4gICAge1xuICAgICAgICBcInNrdVwiOiBsaXN0aW5nSWQgKyBcIl80eF9kYXJrXCIsXG4gICAgICAgIFwicHJvcGVydHlfdmFsdWVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDYyODA5NzkwNTMzLFxuICAgICAgICAgICAgICAgIFwicHJvcGVydHlfbmFtZVwiOiBcIlNpemVcIixcbiAgICAgICAgICAgICAgICBcInNjYWxlX2lkXCI6IDUxLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBcIkxldHRlciBzaXplIFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCI0WExcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICAyMTUxXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X2lkXCI6IDIwMCxcbiAgICAgICAgICAgICAgICBcInByb3BlcnR5X25hbWVcIjogXCJQcmltYXJ5IGNvbG9yXCIsXG4gICAgICAgICAgICAgICAgXCJzY2FsZV9pZFwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwic2NhbGVfbmFtZVwiOiBudWxsLFxuICAgICAgICAgICAgICAgIFwidmFsdWVzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJEYXJrIEhlYXRoZXJcIlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgXCJ2YWx1ZV9pZHNcIjogW1xuICAgICAgICAgICAgICAgICAgICA3NzA2OTY0NjQyOFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJvZmZlcmluZ3NcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwicHJpY2VcIjogcHJpY2UgKyAyLFxuICAgICAgICAgICAgICAgIFwicXVhbnRpdHlcIjogOTk5LFxuICAgICAgICAgICAgICAgIFwiaXNfZW5hYmxlZFwiOiAxLFxuICAgICAgICAgICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwiaXNfZGVsZXRlZFwiOiAwXG4gICAgfVxuXVxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh2YXJpYXRpb25zKVxufVxuXG5leHBvcnQgeyBnZXRPYXV0aCwgcHVzaEl0ZW0sIHVwZGF0ZUltYWdlLCB1cGRhdGVWYXJpYXRpb25zIH1cbiJdfQ==