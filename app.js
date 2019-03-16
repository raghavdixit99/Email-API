const express = require('express')
const db = require('./db.js')
// var email = require('./check.js')
var app = express();
db.GetEmail().catch((err) => {
    console.log(err);
})
// app.get('/email', (req,res)=> {
//     email.sendEmail();
// });
app.listen(3005)