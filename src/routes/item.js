import express from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

import Accounts from '../models/account'
import Templates from '../models/template'
import Items from '../models/item'

import { saveItems } from '../controller/item'

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

let item = express.Router()

item.get('/', async(req, res, next) => {
    let page = req.params.page || 1
    let limit = 10
    let count = await Items.count()
    let accounts = await Accounts.find({is_disabled: {$ne: true}})
    let templates = await Templates.find()
    let items = await Items.find()
                            .sort({'createdAt': -1})
                            .skip(page * 10 - limit)
                            .limit(limit)
                            .populate('template')
                            .populate('account')
                            .exec()

    return res.render('item', { 
        data: {
            accounts,
            templates,
            items
        },
        current: page,
        pages: Math.ceil(count / 10)
    })
})

item.get('/:page', async(req, res, next) => {
    let page = req.params.page || 1
    let limit = 10
    let count = await Items.count()
    let accounts = await Accounts.find({is_disabled: {$ne: true}})
    let templates = await Templates.find()
    let items = await Items.find()
                            .sort({'createdAt': -1})
                            .skip(page * 10 - limit)
                            .limit(limit)
                            .populate('template')
                            .populate('account')
                            .exec()

    return res.render('item', { 
        data: {
            accounts,
            templates,
            items
        },
        current: page,
        pages: Math.ceil(count / 10)
    })
})

item.route('/upload')
    .post(async(req, res) => {
        upload(req, res, async(err) => {
            if (err) {
                console.log('ERROR: ', err)
                return res.json(JSON.stringify(err))
            }
            
            let files = req.files
            let {
                accountId,
                templateId
            } = req.body

            if (accountId == 'Choose...' || templateId == 'Choose...') {
                return res.json({message: 'missing params'})
            }

            await saveItems(files, {accountId, templateId})
            return res.redirect('/item')
        })
    })

module.exports = item