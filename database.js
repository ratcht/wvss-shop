var mysql = require('mysql');
var conn = mysql.createConnection({
  host: 'sql3.freemysqlhosting.net', // Replace with your host name
  user: 'sql3477589',      // Replace with your database username
  password: '1YiaTdfLpz',      // Replace with your database password
  database: 'sql3477589' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;