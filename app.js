const express = require("express");
const moment = require("moment")
const morgan = require("morgan")
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser')
require('./routes/index')(app)


//verification()
//setInterval(verification, 86400000)


app.listen(port, () => {
    console.log(`App initiated | PORT: ${port} | ${moment().format('LLLL')}`)
})