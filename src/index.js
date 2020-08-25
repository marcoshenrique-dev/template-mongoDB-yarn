
const express = require('express');
const mongoose = require('mongoose');

const { mongoURL } = require('./config');


const MyModel = require('../src/models/mymodel');

const routes = require('../src/routes');


const app = express();
const port = 3000;

mongoose.connect( mongoURL, {

    useUnifiedTopology : true,
    useNewUrlParser : true,
    useCreateIndex: true

});


app.use(express.json());
app.use(routes);
app.listen(port, () => console.log(`🔥 Server started at http://localhost:${port}`));