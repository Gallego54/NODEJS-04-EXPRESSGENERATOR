const mysql = require('mysql')
const DATABASENAME = "nodeJSMYSQL"
// CREATE DATABASE nodeJSMYSQL

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: DATABASENAME
})

connection.connect(function (error) {
  if (error)
    console.log('connection failed')
  else
    console.log('connection was success')
})


module.exports = connection