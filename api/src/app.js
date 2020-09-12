const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());

app.name = 'API';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));


app.get("/", (req, res) =>{
    res.send("Aca Estoy");
});

// Error catching endware.
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send(message);
});
  
module.exports = app;
  