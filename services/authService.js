const { User } = require('../models/user')
const { createError } = require('../errors');
const bcrypt = require('bcrypt');

const registerUser = async (userData) => {
  const result = await User.findOne({ email: userData.email });

  if (result) {
    throw createError(409, 'User already exist')
  }

  const userPassword = userData.password;
  const hashedPassword = bcrypt.hashSync(userPassword, 10)

  const user =
    await User.create({
      ...userData,
      password: hashedPassword,
    });

  return user;

}

module.exports = {
  registerUser
}