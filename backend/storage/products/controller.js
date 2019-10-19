module.exports = (app, db) => {
	app.get('/products', (req, res) => {
		db.getAllProducts((err, result) => {
			if (!err) {
				res.status(200);
				res.send(result);
			} else {
				res.status(500);
				res.send('oops');
			}
		});
	});

	// Add product to db
	app.post('/add-product', (req, res) => {
		db.addProduct(req.body, (err, result) => {
			if (!err && result) {
				res.status(200);
				res.send(result);
			} else {
				res.send(500);
				res.send(result);
			}
		});
	});

	// Change product
	app.post('/change-product', (req, res) => {
		db.changeProduct(req.body, (err, result) => {
			if (!err && result) {
				res.status(200);
				res.send(result);
			} else {
				res.send(500);
				res.send(result);
			}
		})
	})
}