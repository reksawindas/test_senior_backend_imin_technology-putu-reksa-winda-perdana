const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// ==> connect db
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log('DB Connected ...');
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};