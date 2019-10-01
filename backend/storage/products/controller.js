module.exports = (app, db) => {
	app.get('/products', (req, res) => {
		db.getAllProducts((err, result) => {
			if (!err) {
				res.status(200);
				res.send(result);
			} else {
				res.status(404);
				res.send('oops');
			}
		});
	});

	// Add product to db
	app.post('/add-product', (req, res) => {
		db.addProduct(req.body, (err, result) => {
			console.log(req.body);
			if (!err && result) {
				res.status(200);
				res.send(result);
			} else {
				res.send(404);
				res.send(result);
			}
		});
	});
}