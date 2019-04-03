import express from 'express';

let dashboard = express.Router();

dashboard.route('/')
	.get(async (req, res) => {
		return res.render('dashboard');
    });


module.exports = dashboard;