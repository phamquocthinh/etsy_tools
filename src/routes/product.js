
import express from 'express'
import Product from '../models/product'
import multer from 'multer'
import path from 'path'

import { createMockup, processItem } from '../controller/product'

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

let upload = multer({ storage: storage }).array('pic-file', 30) 

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
        upload(req, res, async(err) => {
            if (err) {
                console.log('ERROR: ', err)
                return res.json(JSON.stringify(err))
            }

            if(!req.files.length) {
                return res.redirect('/product')
            }

            try {
                await createMockup(req.files)
                return res.redirect('/product')
            } catch (e) {
                console.log(e.stack)
            }
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

        try {
            await processItem(item)
            return res.json({'message': 'success'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'error', 'error': e})
        }
    })

module.exports = product