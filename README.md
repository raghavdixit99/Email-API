# Email-API

Objective - Sending E-mail/SMS via backend to faculty on required days

# architecture
db_init.js - initialize connection between server and SQL db.

db_functions.js - querying data from DB (getData,putData,Delete,Append)

check.js - contains a process which is always running and checks for DOB at 12:00 AM

app.js - contains all routes ( '/' , '/email' ,'/sms' )
