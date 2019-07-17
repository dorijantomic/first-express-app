
const express = require("express");

const adminRoutes = require('./routes/admin')
const shop = require('./routes/shop')

const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false})) // parses the body and runs next so it reaches other middleware

app.use(adminRoutes);

app.use(shop)

app.use("/", (req, res, next) => {
  res.send(`<h1> Hello From Express </h1>`);
});

app.listen(3000); // creates a server and listens for requests
