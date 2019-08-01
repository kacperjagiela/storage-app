module.exports = (app, db) => {
	app.get('/', (req, res) => {
		db.getAllProducts((err, result) => {
			if (err) throw err;
			res.send(result);
		});
	});
}