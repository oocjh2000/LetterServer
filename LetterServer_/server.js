'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var express = require('express');
var app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


var Message = 'null';
var accept = 0;
app.listen(12358, () => {
    console.log('router listening');
});
app.get('/Letter', (req, res) => {
    res.status(200).json(Message);
});
app.get('/accept', (req, res) => {
    if (accept == 0) {
        res.status(200).json(accept);
    }
    if (accept == 1) {
        res.status(201).json(accept);
    } else {
        res.status(202).json(accept);
    }
   
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