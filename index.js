require('@babel/register');
const http = require('http');
const express = require('express');
const server = require('./src/server').default;

const app = express();

/** DEFINE STATIC FOLDER PATH **/
app.use(express.static('static'));
app.use(express.static('dist'));

/** HANDLE ALL ROUTES **/
app.use('/', server);

http.createServer(app).listen(3000, "0.0.0.0");
console.log('Listening on port 3000');

