
import express from 'express'
import Mockup from '../models/mockup'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import jimp from 'jimp'
import _ from 'lodash'

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

let mockup = express.Router()

mockup.route('/')
    .get(async(req, res, next) => {
        let mockups = await Mockup.find()

        mockups = _.map(mockups, mockup => {
            try {
                let imageDir = fs.readdirSync(path.join(__dirname, `../public/${mockup.dir}/`))
                let imageName = imageDir[0]
                let image = `${mockup.dir}/${imageName}`
                mockup.image = image
            } catch(e) {

            }
            
            return mockup
        })

        return res.render('mockup', {data: mockups})
    })
    .post(async(req, res) => {
        upload(req, res, async(err) => {
            if (err) {
                console.log('ERROR: ', err)
                return res.json(JSON.stringify(err))
            }

            let {
                name, resize, x, y, price, type
            } = req.body

            if (!name || !resize || !x || !y || !price ) {
                return res.json({message: 'Missing field', status: 'error'})
            }

            let folder = path.join(__dirname, '../public/images/mockups/' + name)

            try{
                let folderPath = path.join(folder)
                fs.mkdirSync(folderPath)
            } catch(e) {
                return res.json({message: 'Mockup Name exists', error: e})
            }
            
            for (let file of req.files) {
                let image = await jimp.read(file.path)
                await image.write(folder + '/' + file.filename)
            }

            await Mockup.create({
                name,
                dir: '/images/mockups/' + name,
                position: {
                    x,
                    y
                },
                resize,
                price,
                type
            })

            return res.json({message: 'Mockup created', status: 'success'})
        })
    })
    .put(async(req, res) => {
        let {id, data} = req.body

        try {
            await Mockup.findByIdAndUpdate(id, data)
            return res.json({'message': 'Update successful'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'Update error', 'error': JSON.stringify(e)})
        }
    })
    .delete(async(req, res) => {
        let {id} = req.body

        try {
            await Mockup.findByIdAndRemove(id)
            return res.json({'message': 'Delete successful'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'Delete error', 'error': JSON.stringify(e)})
        }
    })

module.exports = mockup