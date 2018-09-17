var pool = require("../datebase-pool.js");

var universityCollection = {
  getAll: async function(req, res) {
    let query = "SELECT * FROM university_table";
    let result = await pool.query(query);
    return result;
  }
};

module.exports = universityCollection;
