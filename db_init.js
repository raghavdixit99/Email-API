const sql = require('mysql');

var con = sql.createConnection({
  user : 'test-user',
  password : 'ToughPass123!@#',
  host : '54.146.176.87',
  database : 'email_api_test'
});

module.exports.GetEmail = ( async (callback) => {
  // var date = new Date(Date.now()).toLocaleString().slice(0,3);
  date = '04/1'
  var sql_command = 'select Email from teacher_db where Birth_Date = ';
  sql_command = sql_command + date + ';';
  // console.log(sql_command);
  await con.connect(function(err) {
    if (err) {
      callback(err);
    }
    console.log("Connected!");
    con.query(sql_command, function(err, result) {
      if (err) throw err;
      callback(result);
      con.end();
    });
  });
});

// module.exports.GetEmail = ( async function(callback) {
//   var date = new Date(Date.now()).toLocaleString().slice(0,3);
//   await con.connect( async (err) => {
//     if (err) {
//       callback(err)
//     } else {
//       console.log("Connected!");
//       var sql_command = 'select Email from teacher_db where Birth_Date = ';
//       sql_command = sql_command + date + ';';
//       // console.log(sql_command);
//       con.query(sql_command, (err, result) => {
//         if (err) {
//           callback(err);
//         } else {
//           //console.log("Result: " + JSON.stringify(result));
//           // console.log(records);
//           callback(result); 
//         }
//       });
//     }
//   })
//   callback(null);
//   // console.log(JSON.stringify(receiver));
// })();

module.exports.con = con;