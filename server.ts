import { join } from "path/posix";

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;


app.use(express.static('public'));
app.use(express.static('public/dist'));


app.listen(port, ()=>{
    console.log('app listen on port' , port)
});