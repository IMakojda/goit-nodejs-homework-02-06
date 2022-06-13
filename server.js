const app = require('./app');
const mongoose = require('mongoose');
const {
  PORT,
  DB_URL,
} = require('./helpers/env')

mongoose.connect(DB_URL)
  .then(() => {
    app.listen(PORT)
  })
  .then(() => {
    console.log("Database connection successful")
  })
  .catch((err) => {
    console.log('ERROR', err);
    process.exit(1)
  })