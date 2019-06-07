import express from 'express'
import Accounts from '../models/account'

let account = express.Router()

account.route('/')
	.get(async (req, res) => {
        let accounts = await Accounts.find()

		return res.render('account', {
            accounts: accounts
        })
    })
    .put(async(req, res) => {
        let {id, shipping_template_id, name} = req.body

        try {
            await Accounts.findByIdAndUpdate(id, {shipping_template_id, name, is_disabled: false})
            return res.json({'message': 'Update successful'})
        } catch(e) {
            console.log(e)
            return res.json({'status': 'error', 'error': JSON.stringify(e)})
        }
    })
    .delete(async(req, res) => {
        let {id} = req.body

        try {
            await Accounts.findByIdAndRemove(id)
            return res.json({'message': 'Delete successful'})
        } catch(e) {
            console.log(e)
            return res.json({'status': 'error', 'error': JSON.stringify(e)})
        }
    })

module.exports = account