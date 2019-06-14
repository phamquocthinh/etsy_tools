import jimp from 'jimp'
import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import request from 'request'
import Promise from 'bluebird'

import {
    DESCRIPTION,
    TAXONOMY_ID
} from '../../config/defaulValues'
import { getVariations } from '../../lib/variations'

const createMockup = async(item) => {
    let {
        name,
        dir,
        template
    } = item
    let {mockup} = template
    let {
        resize,
        position,
        dir: mockupDir 
    } = mockup

    let imagePath = path.join(__dirname, `../../public${dir}`)
    let image = await jimp.read(imagePath)

    await image.resize(resize, jimp.AUTO)
    
    let mockupsPath = `../../public${mockupDir}`
    let mockups = fs.readdirSync(path.join(__dirname, mockupsPath))
    let productsDir = `../../public/images/products/${name}`
    fs.mkdirSync(path.join(__dirname, productsDir))

    for (const img of mockups) {
        if (img.endsWith('.jpg')) {
            let imgPath = path.join(__dirname, `${mockupsPath}/${img}`)
            let mockup = await jimp.read(imgPath)
            await mockup.composite(image, position.x, position.y)
            await mockup.write(path.join(__dirname, `${productsDir}/${img}`))
        }
    }
}

const getOauth = (account) => {
    let oauth = _.pick(account, ['consumer_key', 'consumer_secret', 'token', 'token_secret'])

    return oauth
}

const pushItem = (oauth, data, proxy) => {
    let options = {
        url: "https://openapi.etsy.com/v2/listings",
        oauth: oauth,
        qs: data,
        json: true
    }

    if (proxy) {
        options['proxy'] = proxy
    }

    return new Promise((resolve, reject) => {
        request.post(options, (err, response, body) => {
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
        })
    })
}

const updateImage = (oauth, id, file, proxy) => {
    let options = {
        url: `https://openapi.etsy.com/v2/listings/${id}/images`,
        headers: {
            "Content-Type": "multipart/form-data"
        },
        oauth: oauth
    }

    if (proxy) {
        options['proxy'] = proxy
    }

    return new Promise((resolve, reject) => {
        let req = request.post(options, (err, response, body) => {
            if (err) {
                return reject({
                    error: 'Update image error',
                    message: err
                })
            } 
            resolve(body)
        })

        let form = req.form()
        form.append("image", fs.createReadStream(file))
    })
}

const updateVariations = (oauth, id, price, type, proxy) => {
    let data = getVariations(id, price, type)
    let options = {
        url: `https://openapi.etsy.com/v2/listings/${id}/inventory`,
        oauth: oauth,
        form: data
    }

    if (proxy) {
        options['proxy'] = proxy
    }

    return new Promise((resolve, reject) => {
        r.put(options, (err, response, body) => {
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
        })
    })
}

const processItem = async(item) => {
    let {
        _id,
        name,
        title,
        template,
        account
    } = item
    let { mockup, keywords, description } = template
    let {price, type} = mockup
    let {shipping_template, proxy} = account
    let tags = ''

    type = type || 'tshirt'
    title = title.substring(0, 139)
    keywords = keywords.slice(0, 13)

    _.forEach(keywords, keywordTemplate => {
        tags += keywordTemplate.keywords.join(',')
    })

    try {
        let data = {
            quantity: 999,
            title,
            description: description ? `${title}\n\n${description}` : `${title}\n\n${DESCRIPTION}`,
            price,
            who_made: 'i_did',
            is_supply: false,
            when_made: 'made_to_order',
            shipping_template_id: shipping_template[type] || shipping_template['default'],
            tags,
            state: 'draft',
            taxonomy_id: TAXONOMY_ID[type]
        }

        let oauth = getOauth(account)
        let listingId = await pushItem(oauth, data, proxy)

        let sizes = fs.readdirSync(path.join(__dirname, '../../public/images/size/'))

        for (const size of sizes) {
            let sizePath = path.join(__dirname, '../../public/images/size/' + size)
            await updateImage(oauth, listingId, sizePath, proxy)
        }

        let files = fs.readdirSync(path.join(__dirname, '../../public/images/products/' + name + '/'))

        for (const file of files) {
            let filePath = path.join(__dirname, '../../public/images/products/' + name + '/' + file)
            await updateImage(oauth, listingId, filePath, proxy)
        }
        await updateVariations(oauth, listingId, price, type, proxy)
    } catch(e) {
        throw e
    }
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export {
    sleep,
    createMockup,
    processItem
}