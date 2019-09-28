module.exports = (app, db) => {
	app.get('/', (req, res) => {
		res.status(200);
		res.send('git');
	});
}