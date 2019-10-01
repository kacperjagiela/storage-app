const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
	name: String
}, { collection: 'storage_categories' });

const productSchema = new mongoose.Schema({
	name: String,
	category_id: String,
	quantity: Number,
	price: Number
}, { collection: 'storage_products' });

module.exports = {
	categorySchema,
	productSchema
};
