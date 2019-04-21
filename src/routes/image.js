import Promise from 'bluebird'
import express from 'express'
import multer from 'multer'
import path from 'path'
import jimp from 'jimp'
import fs from 'fs'
import zip from 'zip-a-folder'

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

let image = express.Router()

image.get('/', (req, res, next) => {
    return res.render('image', { zipName: null })
})

image.post('/upload', async(req, res) => {
    upload(req, res, async(err) => {
        if (err) {
            console.log('ERROR: ', err)
            return res.json(JSON.stringify(err))
        }

        if(!req.files.length) {
            return res.redirect('/image')
        }

        let folderName = (new Date()).getTime()
        let folderPath = path.join(__dirname, '../public/images/zip/' + folderName)
        fs.mkdirSync(folderPath)

        for (let file of req.files) {
            let shirtPath = path.join(__dirname, '../public/images/shirts/tee-generate-2.jpg')
            let shirt = await jimp.read(shirtPath)
            let imagePath = path.join(__dirname, '../public/images/uploads/' + file.filename)
            let image = await jimp.read(imagePath)

            await image.resize(360, jimp.AUTO)
            await shirt.composite(image, 300, 187)
            await shirt.write(folderPath + '/' + file.filename)
        }

        await zip.zip(folderPath, folderPath + '.zip');

        return res.render('image', { zipName: folderName + '.zip' })
    })
})

module.exports = image