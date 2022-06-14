const { User } = require('../models/user')
const { createError } = require('../errors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../helpers/env');

const registerUser = async (userData) => {
  const result = await User.findOne({ email: userData.email });

  if (result) {
    throw createError(409, "Email in use")
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

const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email })

  if (!user) {
    throw createError(401, "Login or password is wrong");
  }

  const isValid = await bcrypt.compareSync(password, user.password)
  if (!isValid) {
    throw createError(401, "Login or password is wrong");
  }
  const payload = {
    id: user.id,
    subscription: user.subscription,
  }

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await User.findByIdAndUpdate(user.id, { token })
  return {
    token,
    "user": {
      email: user.email,
      subscription: user.subscription,
    }
  };
}

const authenticateUser = async (token) => {
  try {
    const payload = jwt.verify(token, SECRET_KEY);
    const { id } = payload;
    return await User.findById(id);

  } catch (err) {
    return null
  }
}

const logoutUser = async (id) => {
  await User.findByIdAndUpdate(id, { token: null })
}

const updatUserSub = async (id, body) => {
  return User.findByIdAndUpdate(id, body, { new: true })
}
module.exports = {
  registerUser,
  loginUser,
  authenticateUser,
  logoutUser,
  updatUserSub
}