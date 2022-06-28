const {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updatUser,
  updatUserImg,
  confirmRegistration,
  resendMailConfirm } = require('./authControllers');

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
  updatUserImg,
  confirmRegistration,
  resendMailConfirm
}