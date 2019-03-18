const sql = require('mysql');

var con = sql.createConnection({
    user : 'test-user',
    password : 'ToughPass123!@#',
    host : '54.146.176.87',
    database : 'email_api_test'
});

con.connect().then( () => {
    console.log("Connected db_init");
}).catch((err) => {
    console.error(err);
})

module.exports.con;