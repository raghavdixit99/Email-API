require('dotenv').config();
var sqldb = require('./db_init.js');
const cron = require('node-cron');
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: 'dixitraghav99@gmail.com',
		pass: process.env.EMAIL_PASS
	}
});
var msg = 'The I&CT department wishes you a very happy birthday !';
cron.schedule("00 59 23 * * *", () => {
	sqldb.GetEmail((res) => {
		// console.log(JSON.stringify(res));
		var email = JSON.stringify(res);
		console.log(JSON.stringify(res));
		for (var key in res) {
			var email = res[key]['Email'];		

			var mailOptions = {
				from: 'dixitraghav99@gmail.com',
				to: email,
				subject: 'Greetings',
				text: msg
			};
	
			transporter.sendMail(mailOptions, function (error, info) {
				if (error) {
					console.log(error);
				} else {
					console.log('Email sent: ' + info.response);
				}
			});
	
		}
	
	});
});




// cron.schedule('* * ')
// module.exports.sendEmail = ( async function(callback){