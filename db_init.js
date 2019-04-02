const sql = require('mysql');
var date = new Date(Date.now()).toLocaleString().slice(0,3);
// var receiver ;
console.log(typeof(date));
var con = sql.createConnection({
    user : 'test-user',
    password : 'ToughPass123!@#',
    host : '54.146.176.87',
    database : 'email_api_test'
});
module.exports.GetEmail = ( async (receiver) => {
  await con.connect( async (err, callback) => {
    if (err) throw err;
    console.log("Connected!");
    sql_command = 'select Email from teacher_db where Birth_Date = ';
    sql_command = sql_command + date + ';';
    // console.log(sql_command);
    con.query(sql_command, (err, result) => {
      if (err) throw err;
      //console.log("Result: " + JSON.stringify(result));
      // console.log(records);
      return callback(result); 
    });
    // console.log(JSON.stringify(receiver));
  }).then(()=>{
    return receiver(result);
  })
  })();


module.exports.con;