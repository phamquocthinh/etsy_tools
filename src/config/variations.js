const getVariations = (listingId, price) => {
    let variations = [
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black T-Shirt"],
                    value_ids: [114286038018]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_black_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy T-Shirt"],
                    value_ids: [119302830021]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_navy_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal T-Shirt"],
                    value_ids: [118714691254]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_royal_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather T-Shirt"],
                    value_ids: [529198170324]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_dark_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple T-Shirt"],
                    value_ids: [150355367144]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_purple_t-shirt"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black Hoodie"],
                    value_ids: [111573517926]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_black_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy Hoodie"],
                    value_ids: [111573517972]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_navy_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal Hoodie"],
                    value_ids: [176723608644]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_royal_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather Hoodie"],
                    value_ids: [147159173865]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_dark_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_s_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_m_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                }
            ],
            offerings: [
                {
                    price: price,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_l_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_xl_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                }
            ],
            offerings: [
                {
                    price: price + 2,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_2xl_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_3xl_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                }
            ],
            offerings: [
                {
                    price: price + 3,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_4xl_purple_hoodie"
        },
        {
            property_values: [
                {
                    property_id: 513,
                    property_name: "Color and Style",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple Hoodie"],
                    value_ids: [113437819834]
                },
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                }
            ],
            offerings: [
                {
                    price: price + 4,
                    quantity: 999,
                    is_enabled: 1,
                    is_deleted: 0
                }
            ],
            is_deleted: 0,
            sku: listingId + "_5xl_purple_hoodie"
        }
    ];

    return JSON.stringify(variations)
};

export { getVariations }
