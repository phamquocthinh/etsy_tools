const getVariations = (listingId, price) => {
    let sizes = [
        'Unisex Tee - XS',
        'Unisex Tee - S',
        'Unisex Tee - M',
        'Unisex Tee - L',
        'Unisex Tee - XL',
        'Unisex Tee - 2XL',
        'Unisex Tee - 3XL',
        'Unisex Tee - 4XL',
        'Unisex Tee - 5XL',
        'Ladies Tee - S',
        'Ladies Tee - M',
        'Ladies Tee - L',
        'Ladies Tee - XL',
        'Ladies Tee - 2XL',
        'Ladies Tee - 3XL',
        'Hoodie - S',
        'Hoodie - M',
        'Hoodie - L',
        'Hoodie - XL',
        'Hoodie - 2XL',
        'Hoodie - 3XL',
        'Hoodie - 4XL',
        'Hoodie - 5XL'
    ]
    
    let colors = [
        'Black',
        'Navy',
        'Royal',
        'Purple',
        'Dark Heather'
    ]
    
    let items = []
    
    for(let s of sizes) {
        for(let c of colors) {
            let sku = (listingId + '-' + s.replace(/\s/g, '')).toLowerCase().replace(/\s/g, '-')

            let priceVal = price

            if(s.indexOf('5XL') > -1) priceVal += 5
            if(s.indexOf('4XL') > -1) priceVal += 4
            if(s.indexOf('3XL') > -1) priceVal += 3
            if(s.indexOf('2XL') > -1) priceVal += 2
            if(s.indexOf('XS') > -1) priceVal = 19.95
            
            if(s.indexOf('Ladies') > -1) priceVal += 2
            if(s.indexOf('Hoodie') > -1) priceVal += 15

            let item = {"property_values":[{"property_id": 513,"property_name": "Size and Style","value": s},{ "property_id": 514, "property_name": "Color", "value": c }],"offerings": [{ "price": priceVal, "quantity": 999, "is_enabled": 1, "is_deleted": 0 }],"is_deleted": 0,"sku": sku}
            items.push(item)
        }
    }

    return JSON.stringify(items)
};

export { getVariations }
