require('dotenv').config();
var sqldb = require('./db_init.js');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'dixitraghav99@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });
  var email = sqldb.GetEmail().then(()=>{
    console.log(email);
  })

//   var mailOptions = {
//     from: 'dixitraghav99@gmail.com',
//     to: i,
//     subject: 'Salutations',
//     text: 'Happy birthday stupid lil fuck'
//   };
//   cron.schedule('* * ')
//   module.exports.sendEmail = ( async function(callback){

//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// });
