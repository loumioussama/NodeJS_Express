  
const express = require('express');

const connect = require('./dataBase/connect');



const app = express();
const port = 3000;


app.get('/', async(req,res) => {
    res.json({message: 'Welcome to Test.'});
});



app.listen(process.env.port || port, function () {
    console.log(`Backend server start on port ${port}`);
});