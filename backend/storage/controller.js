module.exports = (app, db) => {
	app.get('/', (req, res) => {
		db.getAllProducts((err, result) => {
			if (err) throw err;
			res.send(result);
		});
	});
	app.post('/addProduct', (req, res) => {
		db.addProduct(req.body, (err, result) => {
			res.send(result);
		})
	})
	app.delete('/removeProduct', (req, res) => {
		db.removeProduct(req.body.productID, (err, result) => {
			res.send(result);
		});
	})
	// TODO: update
}