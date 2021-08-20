"use strict";
exports.__esModule = true;
var assert_1 = require("assert");
var express = require('express');
var router = express.Router();
//controler
var _a = require('../controlers/userContrl'), login = _a.login, register = _a.register, adminPanel = _a.adminPanel;
router
    .post('/login', login)
    .post('/register', register)
    .get('/adminPanel', isAdmin, adminPanel);
function isAdmin(req, res, next) {
    try {
        //do some check
        assert_1.ok(false, 'this is true');
        //if ok -> next()
        //else respond with an error
    }
    catch (e) {
        console.error(e);
    }
    next();
}
module.exports = router;
