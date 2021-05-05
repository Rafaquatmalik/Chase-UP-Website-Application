const mongoose = require('mongoose');
const db = require('../models');

exports.getAllProducts = (req, res) => {
	db.Product.find().then((products) => {
		res.status(200).json(products);
	});
};

exports.getSearchedProducts = (req, res) => {
	db.Product.find({ name: { $regex: req.params.product, $options: 'i' } }).then((products) => {
		console.log(JSON.stringify(products, null, '\t'));
		res.status(200).json(products);
	});
};
exports.updateProductQty = async (req, res) => {
	console.log('Params :>> ', req.body);
	let totals = JSON.parse(req.body.update_qty);
	console.log(totals);
	let result = await db.Product.updateOne(
		{ _id: totals.product_id },
		{
			$set: { qty: totals.qty },
		}
	);
	res.status(200).json(totals);
};
