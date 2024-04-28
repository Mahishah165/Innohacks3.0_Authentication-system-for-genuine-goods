require("dotenv").config();
const pg = require("pg");

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  password: 'samu@&2013',
  database: 'PBL',
  port: 5432,
});

module.exports = db;