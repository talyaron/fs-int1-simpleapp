import { join } from "path/posix";

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

const secert:string = process.env.SECRET ||'123';
console.log(secert);

app.use(express.static('public'));
app.use(express.static('public/dist'));

//routes
const userRoute = require('./routes/userRoute');
app.use('/user', userRoute)



app.listen(port, ()=>{
    console.log('app listen on port' , port)
});