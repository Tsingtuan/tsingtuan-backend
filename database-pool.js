var mysql = require('promise-mysql');
var pool = mysql.createPool({
  host: 'sql9.freemysqlhosting.net',
  user: 'sql9258655',
  password: 'cZnqPShHDQ',
  database: 'sql9258655'
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
