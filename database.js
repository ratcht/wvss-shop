var mysql = require('mysql');
const dotenv = require('dotenv').config();
var conn = mysql.createConnection({
  host: 'localhost', // Replace with your host name
  user: 'root',      // Replace with your database username
  password: 'BlueSmurf72@2021',      // Replace with your database password
  port: 3306,
  database: 'wvss-shop' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;