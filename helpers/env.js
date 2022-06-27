require('dotenv').config();

const {
  PORT,
  DB_URL,
  SECRET_KEY_JWT,
  BASE_URL,
  SEND_GRID_API_KEY,
} = process.env;

module.exports = {
  PORT,
  DB_URL,
  SECRET_KEY_JWT,
  BASE_URL,
  SEND_GRID_API_KEY,
}
