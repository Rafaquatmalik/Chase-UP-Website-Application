const mongoose = require('mongoose');
const db = require('./models');

// db.Product.find().then((products) => console.log(products));

// db.Order.create({
// 	items: [
// 		{
// 			product: '606c0f945c3760f48d2963e4',
// 			qty: 1,
// 		},
// 		{
// 			product: '606c0f945c3760f48d2963e5',
// 			qty: 2,
// 		},
// 	],
// }).then((res) => {
// 	console.log(res);
// 	process.exit();
// });

// db.Order.find({ orderId: 8 })
// 	.populate('items.product')
// 	.then((order) => {
// 		console.log(JSON.stringify(order, null, '  '));
// 		process.exit();
// 	});

// db.Product.find({ name: { $regex: 'rio', $options: 'i' } }).then((products) => {
// 	console.log(JSON.stringify(products, null, '\t'));
// });

db.Order.find()
	.sort({ orderId: -1 })
	.then((orders) => {
		console.log(orders[0].orderId);
	});
