const express = require('express');
const app = express();
const path = require('path');

app.listen(3060);

const publicPath = path.join(__dirname,'/public')
app.use(express.static(publicPath))

app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})

app.get('/login',(req,res) => {
    res.sendFile(path.join(__dirname,'/views/login.html'))
})

app.get('/register',(req,res) => {
    res.sendFile(path.join(__dirname,'/views/register.html'))
})




