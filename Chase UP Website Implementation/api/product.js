const router = require('express').Router();
const Controller = require('../controllers');

/* GET home page. */
router.get('/all', Controller.Product.getAllProducts);
router.patch('/update', Controller.Product.updateProductQty);
router.get('/search/:product', Controller.Product.getSearchedProducts);

module.exports = router;
