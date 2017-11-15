var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'paytm@123',
  database : 'mimiciiiv13'
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log(err);    
}
});

connection.query('SELECT * from ADMISSIONS limit 10;', function(err, rows, fields) {
  if (!err)
    //dd
  console.log(rows[0].SUBJECT_ID);
  else
    console.log("hamza");
});

connection.end();