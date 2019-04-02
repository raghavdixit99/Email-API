// var db = require('./db_init.js')
var date = new Date(Date.now()).toLocaleString().slice(0,4);
// console.log(date);
// date="9/1";
var sql = require('mysql')
    //credentials
var config = {
    user : 'test-user',
    password : 'ToughPass123!@#',
    host : '54.146.176.87',
    database : 'email_api_test'
};
    //create connection
var con = sql.createConnection(config);
//var con = db.con;

module.exports.GetEmail = ( async () => {
    sql_command = 'select Email from teacher_db where Birth_Date = ' + date;
    console.log(sql_command);
    con.connect( (err)=> {
        con.query( sql_command , (err, records) => {
            if(err){
                console.log(err);
            } else {
                var receiver = records
                console.log(receiver);
            }  
            return receiver;
        })
    })
});
