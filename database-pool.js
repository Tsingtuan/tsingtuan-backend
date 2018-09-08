var mysql = require('promise-mysql');
var pool = mysql.createPool({
  host: '',
  user: '',
  password: '',
  database: ''
});

async function query(sql) {
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(sql);
    connection.release();
    return result;
  } catch (e) {
    console.log(e);
  }
}
exports.query = query;
