"use strict";

exports.__esModule = true;

var express = require('express');

var app = express();
var port = process.env.PORT || 3000;
app.use(express.json());
var secert = process.env.SECRET || 123;
console.log(secert);
app.use(express["static"]('public'));
app.use(express["static"]('public/dist')); //routes

var userRoute = require('./routes/userRoute');

app.use('/user', userRoute);
app.listen(port, function () {
  console.log('app listen on port', port);
});