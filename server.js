"use strict";
exports.__esModule = true;
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
app.use(express.static('public'));
app.use(express.static('public/dist'));
app.listen(port, function () {
    console.log('app listen on port', port);
});
