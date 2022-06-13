require('dotenv').config();

const { PORT, DB_URL, SECRET_KEY } = process.env;

module.exports = {
  PORT,
  DB_URL,
  SECRET_KEY
}