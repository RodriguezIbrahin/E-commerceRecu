const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes/index.js');

const app = express();
app.use(cors());

app.name = 'API';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/', routes);

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
  
module.exports = app;
