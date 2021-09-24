require('dotenv').config({path: __dirname + '/./../.env-example'});

const express = require('express');
const cors = require('cors');
const routes = require('./router/routes');
var bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
app.use(cors());
// app.use(express.json());

const port = process.env["SERVER_PORT"] || 8080;
app.use(routes);

app.listen(port, () =>{
    console.log(`App Start in port ${port}`);
})


