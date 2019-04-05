import Promise from 'bluebird'
import express from 'express'
import Product from '../models/product'
import multer from 'multer'
import path from 'path'
import jimp from 'jimp'
import fs from 'fs'
import sharp from 'sharp'

import { 
    SHIPPING_TEMPLATE_ID,
    TAXONOMY_ID,
    PRICE
} from '../config/defaulValues'
import { getOauth, pushItem, updateImage, updateVariations } from './utils'

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../public/images/uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    },
    fileFilter : (req, file, cb) => {
        if (file.originalname.split('.')[file.originalname.split('.').length-1] != 'png')  {
            return cb(new Error('Wrong extension type'))
        }
        cb(null, true)
    }
})

let upload = multer({ storage: storage }).array('pic-file', 10)

let product = express.Router()

product.get('/', async(req, res, next) => {
    let seeAll = req.query.seeAll
    let condition = {}

    if (!seeAll) {
        condition = { pushedToEtsy: 0 }
    }

    let items = await Product.find(condition)
    res.render('product', { items: items })
})

product.route('/upload')
    .get(async(req, res) => {
        let seeAll = req.query.seeAll
        let condition = {}

        if (!seeAll) {
            condition = { pushedToEtsy: 0 }
        }

        let items = await Product.find(condition)
        res.render('product', { items: items })
    })
    .post(async(req, res) => {
        upload(req, res, (err) => {
            if (err) {
                console.log('ERROR: ', err)
                return res.json(JSON.stringify(err))
            }

            if(!req.files.length) {
                return res.redirect('/product')
            }

            return Promise.each(req.files, file => {
                return Product.create({
                    name: file.filename,
                    dir: '/images/uploads/' + file.filename,
                    createdAt: new Date()
                }).then(async() => {
                    try {
                        //let tShirtPath = path.join(__dirname, '../public/images/shirts/tee-front.png')
                        let imagePath = path.join(__dirname, '../public/images/uploads/' + file.filename)
                        //let tshirt = await jimp.read(tShirtPath)
                        let image = await jimp.read(imagePath)

                        await image.resize(375, jimp.AUTO)
                        //await tshirt.composite(image, 315, 150)

                        let colors = fs.readdirSync(path.join(__dirname, '../public/images/color/'))
                        fs.mkdirSync(path.join(__dirname, '../public/images/products/' + file.filename))

                        for (const color of colors) {
                            let colorPath = path.join(__dirname, '../public/images/color/' + color)
                            let colorFile = await jimp.read(colorPath)
                            await colorFile.composite(image, 490, 380)
                            await colorFile.write(path.join(__dirname, '../public/images/products/' + file.filename + '/' + color))
                        }
                    } catch(e) {
                        console.log('ERROR:', e)
                    }
                    
                }).catch((e) => {
                    console.log('ERROR:', e)
                    res.json({ 'message': 'File uploaded error' })
                })
            })
            .then(() => {
                return res.redirect('/product')
            })
            .catch(e => {
                console.log(e)
            })
            
        })
    })

product.route('/:id')
    .post(async(req, res) => {
        let id = req.params.id
        let data = req.body

        try {
            await Product.findByIdAndUpdate(id, data)
            return res.json({'message': 'Update successful'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'Update error', 'error': JSON.stringify(e)})
        }
    })

product.route('/:id/push')
    .post(async(req, res) => {
        let id = req.params.id
        let item = await Product.findById(id)

        if (!item) return res.json({'message': `Not found product id ${id}`})

        let data = {
            quantity: 999,
            title: item.title,
            description: item.description,
            price: PRICE,
            who_made: 'i_did',
            is_supply: false,
            when_made: 'made_to_order',
            shipping_template_id: SHIPPING_TEMPLATE_ID,
            tags: item.tags.join(','),
            state: 'draft',
            taxonomy_id: TAXONOMY_ID
        }

        try {
            let oauth = getOauth(req)
            let listingId = await pushItem(oauth, data)

            let files = fs.readdirSync(path.join(__dirname, '../public/images/products/' + item.name + '/'))

            for (const file of files) {
                let filePath = path.join(__dirname, '../public/images/products/' + item.name + '/' + file)
                await updateImage(oauth, listingId, filePath)
            }
            await updateVariations(oauth, listingId, data.price)
            await Product.findByIdAndUpdate(id, { pushedToEtsy: 1 })
            return res.json({'message': 'success'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'error', 'error': e})
        }
    })

module.exports = product