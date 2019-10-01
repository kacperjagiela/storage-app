module.exports = (app, db) => {
	app.get('/categories', (req, res) => {
		db.getAllCategories((err, result) => {
			if (!err) {
				res.status(200);
				res.send(result);
			} else {
				res.status(404);
				res.send('oops');
			}
		});
	});
}