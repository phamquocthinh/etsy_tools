import express from 'express';
import Keyword from '../models/keyword'

let keyword = express.Router();

keyword.route('/')
	.get(async (req, res) => {
        let keywords = await Keyword.find()
        
		return res.render('keyword', {
            keywords: keywords
        });
    })
    .post(async(req, res) => {
        let data = req.body

        try {
            await Keyword.insertMany([data])
            return res.json({'message': 'Update successful'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'Update error', 'error': JSON.stringify(e)})
        }
    })

module.exports = keyword;