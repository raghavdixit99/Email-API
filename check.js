require('dotenv').config();
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'dixitraghav99@gmail.com',
      pass: process.env.EMAIL_PASS
    }
  });
  

  var mailOptions = {
    from: 'dixitraghav99@gmail.com',
    to: 'madhavshroff99@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'Testing123...'
  };
  
  module.exports.sendEmail = ( async function(callback){
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
});
