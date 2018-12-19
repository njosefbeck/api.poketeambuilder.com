const { Pool } = require('pg');

const pool = new Pool();

module.exports = {
  async query(text, params) {
    try {
      const { rows } = await pool.query(text, params);
      return rows;

    } catch(e) {
      throw e;
    }
  }
};