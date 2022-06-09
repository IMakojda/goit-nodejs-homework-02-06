const { authService } = require('../services/index')

const registerUser = async (req, res, next) => {

  try {
    const user = await authService.registerUser(req.body);
    res.json({
      email: user.email,
      subscription: user.subscription,
      id: user.id,
    })
  } catch (err) {
    next(err)
  }
}

module.exports = {
  registerUser
}