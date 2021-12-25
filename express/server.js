'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/', (req, res) => {
    //if (req.query.url) {res.redirect(req.query.url)} else {res.status(400).send("no url provided")}
    var idAddress = req.connection.remoteAddress;
    res.send(200, "ti lox, " + idAddress)
    res.end()
});

app.use(bodyParser.json());
app.use('/.netlify/functions/server', router);  // path must route to lambda
//app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../redirect/index.html')));

module.exports = app;
module.exports.handler = serverless(app);
