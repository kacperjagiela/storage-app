const products = require('./products/controller.js');
const categories = require('./categories/controller.js');

module.exports = (app, db) => {
	products(app, db);
	categories(app, db);
};

