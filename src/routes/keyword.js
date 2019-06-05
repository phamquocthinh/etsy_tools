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
    .put(async(req, res) => {
        let {id, keywords} = req.body

        try {
            await Keyword.findByIdAndUpdate(id, {keywords: keywords})
            return res.json({'message': 'Update successful'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'Update error', 'error': JSON.stringify(e)})
        }
    })
    .delete(async(req, res) => {
        let {id} = req.body

        try {
            await Keyword.findByIdAndRemove(id)
            return res.json({'message': 'Delete successful'})
        } catch(e) {
            console.log(e)
            return res.json({'message': 'Delete error', 'error': JSON.stringify(e)})
        }
    })

module.exports = keyword;