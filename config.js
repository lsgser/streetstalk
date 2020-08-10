const dotenv = require('dotenv')
dotenv.config()

module.exports = {
	port: process.env.PORT,
	host: process.env.HOST,
	dbName: process.env.DB_NAME,
	dbPassword: process.env.DB_PASSWORD,
	dbDriver: process.env.DB_DRIVER,
	dbUser: process.env.DB_USER	
}
