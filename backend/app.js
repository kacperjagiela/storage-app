const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const Database = require('./database/database.js');
const controller = require('./storage/controller.js');

const db = new Database();
const app = express();

//Enable CORS, body-parser
app.use(bodyParser.urlencoded({ extended: true }), bodyParser.json());
app.use('/public', express.static('public'));
app.use((request, response, next) => {
	response.header('Access-Control-Allow-Origin', 'http://localhost:3000');
	response.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
	response.header('Access-Control-Allow-Credentials', 'true');
	next();
});
app.use(cors({
	origin: '*',
	credentials: true
}))

controller(app, db);

app.listen(8080, '192.168.0.52', () => console.log('Listening on 192.168.0.52:8080'));