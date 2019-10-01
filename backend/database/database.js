const mongoose = require('mongoose');
const models = require('./models.js');

class Database {
	getAllProducts(callback) {
		mongoose.connect(process.env.STORAGE_APP_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.Product.find({}, (err, products) => {
					if (err) {
						callback(err, []);
					} else {
						callback(null, products);
					}
					mongoose.connection.close();
				})
			}
		).catch(err => console.log(err));
	}

	getAllCategories(callback) {
		mongoose.connect(process.env.STORAGE_APP_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				await models.Category.find({}, (err, categories) => {
					if (err) {
						callback(err, []);
					} else {
						callback(null, categories);
					}
					mongoose.connection.close();
				})
			}
		).catch(err => console.log(err));
	}

	addProduct(state, callback) {
		mongoose.connect(process.env.STORAGE_APP_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				const product = new models.Product({
					category: state.category,
					name: state.name,
					price: state.price,
					quantity: state.quantity
				});
				await product.save(error => {
					if (!error) console.log('Added!');
					callback(null, true);
					mongoose.connection.close();
				});
			}
		).catch(err => console.log(err));
	}
}

module.exports = Database;