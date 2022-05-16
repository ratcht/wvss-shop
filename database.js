var mysql = require('mysql');
const dotenv = require('dotenv').config();
var conn = mysql.createConnection({
  host: '192.168.1.71', // Replace with your host name
  user: 'remote',      // Replace with your database username
  password: 'Krajinasmrdi69_',      // Replace with your database password
  port: 3306,
  database: 'wvss-shop' // // Replace with your database Name
}); 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is connected successfully !');
});
module.exports = conn;