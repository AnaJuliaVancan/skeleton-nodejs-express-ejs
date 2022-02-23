let connect = function() {
  if (global.connection) {
    return global.connection.connect();
  }
  
  const { Pool } = require("pg");
  const pool = new Pool({
    connectionString: "postgres://isryfsum:OvazAPlj7oQ_6JPO8rEAV2jlKtPueyVu@kesavan.db.elephantsql.com/isryfsum"
  });
  global.connection = pool;
  return pool.connect();
}

module.exports = { connect }