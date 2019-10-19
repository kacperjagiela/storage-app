module.exports = (app, db) => {
	app.get('/categories', (req, res) => {
		db.getAllCategories((err, result) => {
			if (!err) {
				res.status(200);
				res.send(result);
			} else {
				res.status(500);
				res.send('oops');
			}
		});
	});

	// Add category to db
	app.post('/add-category', (req, res) => {
		db.addCategory(req.body, (err, result) => {
			if (!err) {
				res.status(200);
				res.send(result);
			} else {
				res.status(500);
				res.send(result);
			}
		});
	});
}