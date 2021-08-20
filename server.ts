
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send('<h1>I am alive!!!!!</h1>')
})

app.listen(port, ()=>{
    console.log('app listen on port' , port)
});