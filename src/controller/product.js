
import Promise from "bluebird"
import request from "request"
import fs from "fs"
import path from 'path'
import jimp from 'jimp'

import {
    CONSUMER_KEY,
    CONSUMER_SECRET,
    TOKEN,
    TOKEN_SECRET
} from '../config/defaulValues'
import { getVariations } from '../config/variations'
import Product from '../models/product'

const createMockup = async(files) => {
    try {
        for (let file of files) {
            let title = ''
            let match = file.filename.match(new RegExp(/^(\d+)-(.*?).png$/, 'i'))
    
            if (match && match.length) {
                title = match[2]
            }
    
            console.log(title)
    
            await Product.create({
                name: file.filename,
                title: title,
                dir: '/images/uploads/' + file.filename,
                createdAt: new Date()
            })
    
            //let tShirtPath = path.join(__dirname, '../public/images/shirts/tee-front.png')
            let imagePath = path.join(__dirname, '../public/images/uploads/' + file.filename)

            //let tshirt = await jimp.read(tShirtPath)
            let image = await jimp.read(imagePath)
            
            await image.resize(360, jimp.AUTO)
            //await tshirt.composite(image, 315, 150)
    
            let colors = fs.readdirSync(path.join(__dirname, '../public/images/color/'))
            fs.mkdirSync(path.join(__dirname, '../public/images/products/' + file.filename))
    
            for (const color of colors) {
                if (color.endsWith('.jpg')) {
                    let colorPath = path.join(__dirname, '../public/images/color/' + color)
                    let colorFile = await jimp.read(colorPath)
                    await colorFile.composite(image, 300, 187)
                    await colorFile.write(path.join(__dirname, '../public/images/products/' + file.filename + '/' + color))
                }
            }
        }
    } catch(e) {
        console.log(e.stack)
        throw e
    }
}

const getOauth = () => {
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
    let variations = getVariations(id, price)
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

const processItem = async(item) => {
    try {
        let data = {
            quantity: 999,
            title: item.title,
            description: `${item.title}\n${DESCRIPTION}`,
            price: PRICE,
            who_made: 'i_did',
            is_supply: false,
            when_made: 'made_to_order',
            shipping_template_id: SHIPPING_TEMPLATE_ID,
            tags: item.tags.join(','),
            state: 'draft',
            taxonomy_id: TAXONOMY_ID
        }

        let oauth = getOauth()
        let listingId = await pushItem(oauth, data)

        let sizes = fs.readdirSync(path.join(__dirname, '../public/images/size/'))

        for (const size of sizes) {
            let sizePath = path.join(__dirname, '../public/images/size/' + size)
            await updateImage(oauth, listingId, sizePath)
        }

        let files = fs.readdirSync(path.join(__dirname, '../public/images/products/' + item.name + '/'))

        for (const file of files) {
            let filePath = path.join(__dirname, '../public/images/products/' + item.name + '/' + file)
            await updateImage(oauth, listingId, filePath)
        }
        await updateVariations(oauth, listingId, data.price)
        await Product.findByIdAndUpdate(id, { pushedToEtsy: 1 })
    } catch(e) {
        throw e
    }
}

export { createMockup, processItem }
