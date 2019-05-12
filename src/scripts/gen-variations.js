const fs = require('fs')

let a = {
    "product_id": 3204545269,
    "property_values": [
        {
            "property_id": 513,
            "property_name": "Color and Style",
            "scale_id": null,
            "scale_name": null,
            "values": [
                "Purple Hoodie"
            ],
            "value_ids": [
                113437819834
            ]
        },
        {
            "property_id": 514,
            "property_name": "Size",
            "scale_id": null,
            "scale_name": null,
            "values": [
                "5XL"
            ],
            "value_ids": [
                109159613889
            ]
        }
    ],
    "offerings": [
        {
            "offering_id": 3424371220,
            "price": {
                "amount": 2195,
                "divisor": 100,
                "currency_code": "USD",
                "currency_formatted_short": "$21.95",
                "currency_formatted_long": "$21.95 USD",
                "currency_formatted_raw": "21.95"
            },
            "quantity": 999
        }
    ]
}

let b = [
    {
        "product_id": 3204545175,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371156,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545177,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371158,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492472,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854927,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545179,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371160,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545181,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854929,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492474,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854931,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492476,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854933,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545183,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black T-Shirt"
                ],
                "value_ids": [
                    114286038018
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371162,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492478,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854935,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545185,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371164,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545187,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371166,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545189,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371168,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545191,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854937,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492480,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854939,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492482,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854941,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492484,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy T-Shirt"
                ],
                "value_ids": [
                    119302830021
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854943,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492486,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371170,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492488,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371172,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492490,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854945,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492492,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854947,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545193,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854949,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545195,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854951,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545197,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371174,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545199,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal T-Shirt"
                ],
                "value_ids": [
                    118714691254
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371176,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545201,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371178,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492494,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371180,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492496,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854953,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492498,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854955,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492500,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854957,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545203,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854959,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545205,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371182,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545207,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather T-Shirt"
                ],
                "value_ids": [
                    529198170324
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371184,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545209,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854961,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492502,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854963,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492504,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854965,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545211,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371186,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545213,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371188,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545215,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371190,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545217,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371192,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545219,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple T-Shirt"
                ],
                "value_ids": [
                    150355367144
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371194,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545221,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854967,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545223,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371196,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492506,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854969,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492508,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854971,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492510,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854973,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545225,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371198,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545227,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371200,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545229,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Black Hoodie"
                ],
                "value_ids": [
                    111573517926
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371202,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545231,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371204,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492512,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854975,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492514,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854977,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492516,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854979,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492518,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854981,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545233,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854983,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545235,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854985,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545237,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Navy Hoodie"
                ],
                "value_ids": [
                    111573517972
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854987,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545239,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371206,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492520,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854989,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492522,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854991,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545241,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854993,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545243,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854995,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545245,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854997,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545247,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309854999,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545249,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Royal Hoodie"
                ],
                "value_ids": [
                    176723608644
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855001,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545251,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855003,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492524,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855005,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492526,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855007,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545253,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371208,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545255,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371210,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492528,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371212,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545257,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855009,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492530,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Dark Heather Hoodie"
                ],
                "value_ids": [
                    147159173865
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855011,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492532,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "S"
                ],
                "value_ids": [
                    54657375794
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371214,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3450492534,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "M"
                ],
                "value_ids": [
                    56802856687
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855013,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545259,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "L"
                ],
                "value_ids": [
                    54657375590
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855015,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545261,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "XL"
                ],
                "value_ids": [
                    71931465715
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855017,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545263,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "2XL"
                ],
                "value_ids": [
                    91416890176
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3309855019,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545265,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "3XL"
                ],
                "value_ids": [
                    94172869301
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371216,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545267,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "4XL"
                ],
                "value_ids": [
                    100379131681
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371218,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    },
    {
        "product_id": 3204545269,
        "property_values": [
            {
                "property_id": 513,
                "property_name": "Color and Style",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "Purple Hoodie"
                ],
                "value_ids": [
                    113437819834
                ]
            },
            {
                "property_id": 514,
                "property_name": "Size",
                "scale_id": null,
                "scale_name": null,
                "values": [
                    "5XL"
                ],
                "value_ids": [
                    109159613889
                ]
            }
        ],
        "offerings": [
            {
                "offering_id": 3424371220,
                "price": {
                    "amount": 2195,
                    "divisor": 100,
                    "currency_code": "USD",
                    "currency_formatted_short": "$21.95",
                    "currency_formatted_long": "$21.95 USD",
                    "currency_formatted_raw": "21.95"
                },
                "quantity": 999
            }
        ]
    }
]

const gen = (b) => {
    b.forEach(a => {
        delete a.product_id
        delete a.offerings[0]

        switch(a.property_values[1].values[0]) {
            case 'S':
            case 'M':
            case 'L':
                a.offerings[0] = {
                    price: `price0`,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
                break
            case 'XL':
            case '2XL':
                a.offerings[0] = {
                    price: `price2`,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
                break
            case '3XL':
            case '4XL':
                a.offerings[0] = {
                    price: `price3`,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
                break
            case '5XL':
                a.offerings[0] = {
                    price: `price4`,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
                break
            default:
                break
        }

        a.is_deleted = 0
        a.sku = '{{listingId}}' + `_${a.property_values[1].values[0].toLowerCase()}_${a.property_values[0].values[0].replace(' ', '_').toLowerCase()}`
        
    })
    

    fs.writeFileSync('./variations.txt', JSON.stringify(b), 'utf8')
}

gen(b)