import Promise from "bluebird"
import request from "request"
import fs from "fs"
import {
    CONSUMER_KEY,
    CONSUMER_SECRET,
    TOKEN,
    TOKEN_SECRET
} from '../config/defaulValues'

const getOauth = req => {
    // let token = req.session.oauth.access_token
    // let secret = req.session.oauth.access_token_secret

    // let oauth = {
    //     consumer_key: "0knnnx78v7lgld0vs633ktut",
    //     consumer_secret: "t009aeebvl",
    //     token: token,
    //     token_secret: secret
    // }

    let oauth = {
        consumer_key: CONSUMER_KEY,
        consumer_secret: CONSUMER_SECRET,
        token: TOKEN,
        token_secret: TOKEN_SECRET
    }

    return oauth
}

const pushItem = (oauth, data) => {
    return new Promise((resolve, reject) => {
        request.post(
            {
                url: "https://openapi.etsy.com/v2/listings",
                oauth: oauth,
                qs: data,
                json: true
            },
            function(err, response, body) {
                if (err) return reject(err)

                try {
                    let listingId = body.results[0].listing_id
                    return resolve(listingId)
                } catch(e) {
                    console.log('Error pushitem', e)
                    return reject({
                        error: 'Pushing item error',
                        message: body
                    })
                }
            }
        )
    })
}

const updateImage = (oauth, id, file) => {
    return new Promise((resolve, reject) => {
        let r = request.post(
            {
                url: `https://openapi.etsy.com/v2/listings/${id}/images`,
                headers: {
                    "Content-Type": "multipart/form-data"
                },
                oauth: oauth
            },
            function(err, response, body) {
                if (err) {
                    return reject({
                        error: 'Update image error',
                        message: err
                    })
                } 
                resolve(body)
            }
        )

        let form = r.form()
        form.append("image", fs.createReadStream(file))
    })
}

const updateVariations = (oauth, id, price) => {
    let variations = generateVariations(id, price)
    let data = {
        "products": variations,
        "price_on_property":'62809790533,200',
        "quantity_on_property": '',
        "sku_on_property": '62809790533,200'
    }
    
    return new Promise((resolve, reject) => {
        request.put(
            {
                url: `https://openapi.etsy.com/v2/listings/${id}/inventory`,
                oauth: oauth,
                form: data
            },
            function(err, response, body) {
                if (err) {
                    return reject({
                        error: 'Update Variations error',
                        message: error
                    })
                }

                try {
                    body = JSON.parse(body)
                } catch(e) {
                    return reject({
                        error: 'Update variations error',
                        message: body
                    })
                }

                resolve()
            }
        )
    })
}

const generateVariations = (listingId, price) => {
    let variations = [ 
        {
        "sku": listingId + "_s_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "S"            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_s_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "S"            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_s_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "S"            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_s_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "S"            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_s_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "S"            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_m_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "M"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_m_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "M"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_m_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "M"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_m_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "M"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_m_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "M"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_l_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "L"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_l_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "L"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_l_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "L"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_l_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "L"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_l_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "L"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_xl_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_xl_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_xl_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_xl_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_xl_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_2x_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "2XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_2x_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "2XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_2x_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "2XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_2x_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "2XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_2x_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "2XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_3x_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "3XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_3x_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "3XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_3x_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "3XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_3x_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "3XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_3x_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "3XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_4x_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "4XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_4x_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "4XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_4x_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "4XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_4x_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "4XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_4x_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "4XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_5x_black",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "5XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black"
                ],
                "value_ids": [
                    1
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_5x_navy",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "5XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy"
                ],
                "value_ids": [
                    52178634305
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_5x_purple",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "5XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple"
                ],
                "value_ids": [
                    8
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_5x_royal",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "5XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal"
                ],
                "value_ids": [
                    58354515685
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    },
    {
        "sku": listingId + "_5x_dark",
        "property_values": [
            {
                "property_id": 62809790533,
                "property_name": "Size",
                "value": "5XL"
            },
            {
                "property_id": 200,
                "property_name": "Primary color",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather"
                ],
                "value_ids": [
                    77069646428
                ]
            }
        ],
        "offerings": [
            {
                "price": price + 2,
                "quantity": 999,
                "is_enabled": 1,
                "is_deleted": 0
            }
        ],
        "is_deleted": 0
    }
]
    return JSON.stringify(variations)
}

export { getOauth, pushItem, updateImage, updateVariations }
