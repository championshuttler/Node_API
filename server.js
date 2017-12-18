const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
require

const app = express();

const port = 8000;
app.listen(port, () => {
    console.log("this side :P");
})