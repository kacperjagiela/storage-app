const express = require('express');
const bodyParser = require('body-parser');

const Database = require('./database/database.js');
const controller = require('./storage/controller.js');

const db = new Database();
const app = express();

//Enable CORS, body-parser
app.use(bodyParser.urlencoded({extended:true}), bodyParser.json());
app.use('/public', express.static('public'));
app.use((request, response, next) => {
    response.header('Access-Control-Allow-Origin', 'http://192.168.42.253:3000');
    response.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
	);
	response.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    response.header('Access-Control-Allow-Credentials', 'true');
    next();
});

controller(app, db);

app.listen(8080, '192.168.42.253', ()=>console.log('Listening on 192.168.42.253:8080..'));