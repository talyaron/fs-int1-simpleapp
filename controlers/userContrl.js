"use strict";
exports.__esModule = true;
exports.register = exports.adminPanel = exports.login = void 0;
exports.login = function (req, res) {
    //create admin cookie
    var _a = req.body, username = _a.username, password = _a.password;
    console.log(username, password);
    if (username && password) {
        res.cookie('role', { role: 'admin' }, { maxAge: 9939394949, httpOnly: true });
    }
    res.send({ login: true });
};
exports.adminPanel = function (req, res) {
    res.send({ adminPanel: true });
};
exports.register = function (req, res) {
    res.send({ register: true });
};
