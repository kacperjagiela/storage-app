const mysql = require('mysql');

class Database {
	constructor() {
		this.pool = mysql.createPool({
			connectionLimit: 10,
			host: 'localhost',
			user: 'test',
			password: 'testtest',
			database: 'projects'
		});
	}
	getAllProducts(callback) {
		this.pool.getConnection((err, connection) => {
			connection.query('SELECT * FROM storage_app', (err, result) => {
				if (result) callback(null, result);
			});
		});
	}
}

module.exports = Database;
