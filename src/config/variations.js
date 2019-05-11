const getVariations = (listingId, price) => {
    let variations = [
        {
            sku: listingId + "_s_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_s_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_s_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_s_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_s_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "S"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_m_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_m_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_m_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_m_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_m_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "M"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_l_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_l_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_l_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_l_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_l_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "L"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_xl_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_xl_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_xl_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_xl_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_xl_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_2x_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_2x_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_2x_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_2x_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_2x_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "2XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_3x_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_3x_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_3x_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_3x_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_3x_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "3XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_4x_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_4x_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_4x_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_4x_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_4x_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "4XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_5x_black",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Black"],
                    value_ids: [1]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_5x_navy",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Navy"],
                    value_ids: [52178634305]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_5x_purple",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Purple"],
                    value_ids: [8]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_5x_royal",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Royal"],
                    value_ids: [58354515685]
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
            is_deleted: 0
        },
        {
            sku: listingId + "_5x_dark",
            property_values: [
                {
                    property_id: 62809790533,
                    property_name: "Size",
                    value: "5XL"
                },
                {
                    property_id: 200,
                    property_name: "Primary color",
                    scale_id: null,
                    scale_name: null,
                    values: ["Dark Heather"],
                    value_ids: [77069646428]
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
            is_deleted: 0
        }
    ]

    return JSON.stringify(variations)
};

export { getVariations }