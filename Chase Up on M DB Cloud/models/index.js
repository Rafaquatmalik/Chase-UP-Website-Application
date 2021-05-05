const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://rafaquatmalik:abcd1234@cluster0.pitfk.mongodb.net/sales?retryWrites=true&w=majority', {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
});

module.exports = {
	Product: require('./Product'),
	Order: require('./Order'),
};
