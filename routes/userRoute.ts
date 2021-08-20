import { ok } from "assert";

const express = require('express')
const router = express.Router();

//controler
const { login, register, adminPanel } = require('../controlers/userContrl')

router
    .post('/login', login)
    .post('/register', register)
    .get('/adminPanel', isAdmin, adminPanel)


function isAdmin(req, res, next) {
    try{
    //do some check
 ok(false, 'this is true');

    //if ok -> next()
    //else respond with an error
    }catch(e){
        console.error(e)
    }
    next()
}
module.exports = router;