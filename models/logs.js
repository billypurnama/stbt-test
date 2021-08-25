require('dotenv').config()
const { v4: uuidv4 } = require('uuid')

class Logs {
  constructor (endpoint, payload) {
    const mysql = require('mysql')

    const connection = mysql.createConnection({
      host: process.env.DB_HOST || 'localhost',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'db_test',
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
    `, function (err, rows, fields) {
      if (err) throw err
    })

    connection.end()
  }
}

module.exports = Logs