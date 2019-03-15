const express = require('express')
var email = require('./check.js')
var app = express();

app.get('/' ,(req,res) => {
    var sql = require('mysql')

    //credentials
    var config = {
        user : 'test-user',
        password : 'ToughPass123!@#',
        host : '54.146.176.87',
        database : 'email_api_test'
    };
    con = sql.createConnection(config);
  
    con.connect( (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Success')
        } 
        // creating request object
        con.query('SELECT Name FROM proj' , (err, records) => {
            if(err){
                console.log(err);
            } else {
                res.send(records);
            }
        });
    });
});

app.get('/email', (req,res)=> {
    email.sendEmail();
});

app.listen(3000);