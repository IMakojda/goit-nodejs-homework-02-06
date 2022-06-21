const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updatUser,
  updatUserImg } = require('./authControllers');

const {
  getAll,
  getById,
  deleteById,
  createContact,
  updateById,
  updateStatusContact,
} = require('./contactControllers')


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updatUser,
  getAll,
  getById,
  deleteById,
  createContact,
  updateById,
  updateStatusContact,
  updatUserImg
}