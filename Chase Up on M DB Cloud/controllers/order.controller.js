const mongoose = require('mongoose');
const db = require('../models');

exports.AddOrders = (req, res) => {
	console.log(req.body);
	db.Order.create({
		items: JSON.parse(req.body.product),
	}).then((res) => {
		console.log(res);
	});
};

exports.getOrderNumber = (req, res) => {
	db.Order.find()
		.sort({ orderId: -1 })
		.then((orders) => {
			console.log(orders);
			res.status(200).json(orders[0].orderId);
		});
};

//db.Product.find()
//.then(products => console.log(products))

// db.Order.create({
//     items: [
//         {
//             product: '606c0f945c3760f48d2963e4',
//             qty: 1
//         },
//         {
//             product: '606c0f945c3760f48d2963e5',
//             qty: 2
//         }
//     ]
// })
//     .then(res => {
//         console.log(res)
//         process.exit();
//     })
