'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var Message = 'null';
var accept = false;
app.listen(12358, () => {
    console.log('router listening');
});
app.get('/Letter', (req, res) => {
    res.status(200).json(Message);
});
app.get('/accept', (req, res) => {
    res.status(200).json(accept);
});
app.put('/', (req, res) => {
    Message = req.body.Message;
    res.status(200).json(Message);
});
app.put('/:acc', (req, res) => {
    var mind = req.params.acc;
    accept = mind;
    res.status(200).json(accept);
});