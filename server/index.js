const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(bodyParser.json());
const api = require('./routes/api');

const db = 'mongodb+srv://afolabi:8899fifafa@cluster0.yxzn0.mongodb.net/eventsdb?retryWrites=true&w=majority'

mongoose.connect(db, err => {
    if(err) {
        console.error(err)
    } else {
        console.log("Connected to mongodb")
    }
})

app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App started on port " + PORT);
})
