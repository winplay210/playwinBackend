const express = require("express");
const http = require("http");
const port = process.env.PORT || 4001;
const index = require("./routes/routes");
var cors = require('cors')
var bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
    
// parse application/json
app.use(bodyParser.json())
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 

app.use(index);
var {connectDB} = require('./config/connection')
const server = http.createServer(app);

connectDB();
server.listen(port, () => console.log(`Listening on port ${port}`));