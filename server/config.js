require("dotenv").config();
const pg = require("pg");

const db = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  password: '22@Aug2004',
  database: 'pbl',
  port: 5432,
});

module.exports = db;