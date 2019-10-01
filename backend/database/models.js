const mongoose = require('mongoose');
const schemas = require('./schemas.js');

const Category = mongoose.model('Category', schemas.categorySchema);
const Product = mongoose.model('Product', schemas.productSchema);

module.exports = {
	Category,
	Product,
}