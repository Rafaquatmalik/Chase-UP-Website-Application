const router = require('express').Router();
const Controller = require('../controllers');

/* GET home page. */
router.post('/add', Controller.Order.AddOrders);
router.get('/ordernumber', Controller.Order.getOrderNumber);

module.exports = router;
