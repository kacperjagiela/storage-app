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
			connection.release();
		});
	}
	addProduct(body, callback) {
		this.pool.getConnection((err, connection) => {
			connection.query(
				'INSERT INTO storage_app(name, description, quantity, unit) VALUES(?, ? , ?, ?)', 
				[
					body.name,
					body.description,
					body.quantity,
					body.unit
				],(error, result) => {
					if (error) callback(null, false);
					else callback(null, true);
				}
			);
			connection.release();
		})
	}
	removeProduct(id, callback) {
		this.pool.getConnection((err, connection) => {
			connection.query('DELETE FROM storage_app WHERE id=?', [ id ], (error, result) => {
				if (error) callback(null, false);
				else callback(null, true);
			});
			connection.release();
		})
	}
}

module.exports = Database;
