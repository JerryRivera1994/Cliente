const { response } = require('express');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

// const {createRoles} = require('./libs/initialSetup')

const {clientRoutes} = require('./routes/client.routes')

const app = express();

app.use(morgan('dev'));

app.use(express.json())


const jsonParser = bodyParser.json()

app.use('/api',jsonParser,clientRoutes);   

module.exports.app = app;