const { User } = require("../models/user")

const updateUserImage = async (id, data) => {
  return User.findByIdAndUpdate(id, data, { new: true });
}

module.exports = {
  updateUserImage
}