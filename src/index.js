const express = require("express");
const body_parser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true, limit:'50mb'}))
app.use(cors());
require("./app/controllers/controller")(app);
require("./app/controllers/controller_sobre")(app);

app.listen(process.env.PORT || 3000);