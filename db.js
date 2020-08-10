const mysql = require('mysql')
const {dbName,dbPassword,dbUser,host} = require('./config')

const dbConn = mysql.createConnection({
	host: host,
	database: dbName,
	password: dbPassword,
	user: dbUser
})

dbConn.connect(function(error){
	if (error) throw error
})

module.exports = dbConn;
