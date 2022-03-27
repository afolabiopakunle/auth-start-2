const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
const api = require('./routes/api');


app.use('/api', api);

app.get('/', (req, res) => {
    res.send('Welcome to the home page');
})

const PORT = 3000;

app.listen(PORT, () => {
    console.log("App started on port " + PORT);
})
