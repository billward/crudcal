//app.js

const express = require('express');
const bodyParser = require('body-parser');

const event = require('./routes/event'); // Imports routes for the events
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb://127.0.0.1:27017/crudcal';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false); // https://github.com/Automattic/mongoose/issues/6880
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/events', event);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
