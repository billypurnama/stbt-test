require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

class Logs {
  constructor (endpoint, payload) {
    const mysql = require('mysql')

    const connection = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
    })
  
    connection.connect()

    const datetime = (new Date()).toISOString().slice(0, 19).replace('T', ' ')
  
    // Insert API Logs
    connection.query(`
      INSERT INTO api_logs 
      VALUES (
        '${uuidv4()}', 
        '${datetime}', 
        '${endpoint}', 
        '${payload}'
      )
    `)

    connection.end()
  }
}

module.exports = Logs