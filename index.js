require('@babel/register');
const http = require('http');
const express = require('express');
const routes = require('./src/routes.js').default;

const app = express();

/** DEFINE STATIC FOLDER PATH**/
express.static('static');

app.use('/', routes);

http.createServer(app).listen(3000, "0.0.0.0");
console.log('Listening on port 3000');

