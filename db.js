const mysql = require('mysql')
const {host,dbUser,dbName,dbPassword} = require('./config')

const dbConn = mysql.createConnection({
	host:host,
	user:dbUser,
	password:dbPassword,
	database:dbName
})

dbConn.connect(function(error){
	if (error) throw error
})

module.exports = dbConn;
