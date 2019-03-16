var sql = require('mysql')
    //credentials
    var config = {
        user : 'test-user',
        password : 'ToughPass123!@#',
        host : '54.146.176.87',
        database : 'email_api_test'
    };
var con = sql.createConnection(config);
module.exports.con;
con.connect( async (err) => {
    if(err) {
        console.log(err)
    } else {
        console.log('Success')
    }
}); 
    