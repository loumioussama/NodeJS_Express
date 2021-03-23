const express = require('express');
const bodyParser = require('body-parser');
const connect = require('./dataBase/connect');
const userApi = require('./routes/userApi');
const questionApi = require('./routes/questionApi');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', async(req,res) => {
    res.json({message: 'Welcome to Test.'});
});

app.use('/user', userApi);
app.use('/question', questionApi);


app.listen(process.env.port || port, function () {
    console.log(`server start on port ${port}`);
});