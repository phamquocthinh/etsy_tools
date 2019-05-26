import express from 'express'
import Items from '../models/item'
import multer from 'multer'
import path from 'path'
import fs from 'fs'

import Accounts from '../models/account'
import Mockups from '../models/mockup'
import Keywords from '../models/keyword'

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
    let accounts = await Accounts.find()
    let keywords = await Keywords.find()
    let mockups = await Mockups.find()

    res.render('item', { data: {
        accounts,
        keywords,
        mockups
    }})
})

item.route('/upload')
    .post(async(req, res) => {
        upload(req, res, async(err) => {
            if (err) {
                console.log('ERROR: ', err)
                return res.json(JSON.stringify(err))
            }
            
            let files = req.files
            let data = req.body
            console.log(data)
            await saveItems(files, data)
            return res.redirect('/item')
        })
    })


module.exports = item