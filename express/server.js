'use strict';
const express = require('express');
const path = require('path');
const serverless = require('serverless-http');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();
router.get('/getgood/', (req, res) => {
    res.redirect('/coolme.html')
});

app.use(bodyParser.json());
app.use('/functions/server', router);  // path must route to lambda

module.exports = app;
module.exports.handler = serverless(app);