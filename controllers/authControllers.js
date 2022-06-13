const { authService } = require('../services/index')

const registerUser = async (req, res, next) => {

  try {
    const user = await authService.registerUser(req.body);
    res.status(201).json({
      "user": {
        email: user.email,
        subscription: user.subscription,
      }
    })
  } catch (err) {
    next(err)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const token = await authService.loginUser(req.body);
    res.json(token);
  } catch (err) {
    next(err)
  }
}

const logoutUser = async (req, res, next) => {
  const id = req.user._id;
  try {
    await authService.logoutUser(id);
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

const currentUser = async (req, res, next) => {
  try {
    const { email, subscription } = await req.user;
    res.json({ email, subscription })
  } catch (err) {
    next(err)
  }
}

const updatUser = async (req, res, next) => {
  const id = req.user;
  try {
    const upadateUser = await authService.updatUserSub(id, req.body);
    if (!upadateUser) {
      res.status(404).json({ message: "Not found" })
    } else {
      return res.json(upadateUser)
    }
  } catch (err) {
    next(err)
  }
}

module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updatUser
}