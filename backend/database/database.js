const mongoose = require('mongoose');
const models = require('./models.js');

class Database {
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

	addCategory(state, callback) {
		mongoose.connect(process.env.STORAGE_APP_URI, { useNewUrlParser: true, reconnectTries: Number.MAX_VALUE, reconnectInterval: 500 }).then(
			async () => {
				const category = new models.Category({
					name: state.name
				});
				// get all categories
				await this.getAllCategories(async (err, categories) => {
					if (err) {
						callback(true, false);
					} else {
						const allCategories = categories;
						// check if users entered category already exists
						// if not save to database
						if (allCategories.includes(state.name)) {
							callback(true, false);
						} else {
							await category.save(error => {
								if (error) {
									callback(true, false);
								} else {
									callback(false, true);
								}
								mongoose.connection.close();
							});
						}
					}
				});

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
					if (!error) {
						callback(null, true);
					} else {
						callback(true, false);
					}
					mongoose.connection.close();
				});
			}
		).catch(err => console.log(err));
	}
}

module.exports = Database;