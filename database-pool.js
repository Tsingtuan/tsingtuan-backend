var mysql = require('promise-mysql');
var pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'qwe',
  database: 'tsingtuan'
});
async function query(sql,params) {
  try {
    const connection = await pool.getConnection();
    const result = await connection.query(sql,params);
    connection.release();
    return result;
  } catch (e) {
    console.log(e);
  }
}
exports.query = query;
