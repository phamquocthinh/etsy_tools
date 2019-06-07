import express from 'express';
import Templates from '../models/template'
import Keywords from '../models/keyword'
import Mockups from '../models/mockup'

let template = express.Router();

template.route('/')
	.get(async (req, res) => {
        let templates = await Templates.find()
        let keywords = await Keywords.find()
        let mockups = await Mockups.find()
        
		return res.render('template', {
            templates: templates,
            data: {
                keywords,
                mockups
            }
        });
    })
    .post(async(req, res) => {
        let data = req.body

        try {
            await Templates.create(data)
            return res.json({'message': 'Create successful'})
        } catch(e) {
            console.log(e)
            return res.json({'status': 'error', 'message': 'Update error', 'error': JSON.stringify(e)})
        }
    })
    .put(async(req, res) => {
        let {id, template} = req.body

        try {
            await Templates.findByIdAndUpdate(id, template)
            return res.json({'message': 'Update successful'})
        } catch(e) {
            console.log(e)
            return res.json({'status': 'error', 'message': 'Update error', 'error': JSON.stringify(e)})
        }
    })
    .delete(async(req, res) => {
        let {id} = req.body

        try {
            await Templates.findByIdAndRemove(id)
            return res.json({'message': 'Delete successful'})
        } catch(e) {
            console.log(e)
            return res.json({'status': 'error', 'message': 'Delete error', 'error': JSON.stringify(e)})
        }
    })

module.exports = template;