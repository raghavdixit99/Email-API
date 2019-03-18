const express = require('express');
const db = require('./db.js');
// var email = require('./check.js')

var app = express();
app.listen(3005)

db.GetEmail().catch((err) => {
    console.log(err);
})

// app.get('/email', (req,res)=> {
//     email.sendEmail();
// });