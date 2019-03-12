const express = require('express')
var app = express();

app.get('/' ,(req,res) => {
    var sql = require('mssql')

    //credentials
    var config = {
        user : '',
        password : '',
        server : 'localhost',
        database : 'facultyDB'
    };
    sql.connect(config , (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Success')
        }
        //creating request pbject
        var request = new sql.Request();
        request.query('select * from DOB' , (err, records) => {
            if(err){
                console.log(err);
            } else {
                res.send(records);
            }
        });
    });
});


app.listen(3000);