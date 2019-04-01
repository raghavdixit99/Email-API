const sql = require('mysql');

var con = sql.createConnection({
    user : 'test-user',
    password : 'ToughPass123!@#',
    host : '54.146.176.87',
    database : 'email_api_test'
});

con.connect( (err) => {
    if (err) throw err;
    console.log("Connected!");
    con.query("select email from teacher_db;", (err, result) => {
      if (err) throw err;
      console.log("Result: " + result.length);
    });
});

module.exports.con;