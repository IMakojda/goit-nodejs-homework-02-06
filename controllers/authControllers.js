const { uploadImage } = require('../services/imageService');
const { authService } = require('../services/index');
const { updateUserImage } = require('../services/userServiceImage');

const registerUser = async (req, res, next) => {

  try {
    const user = await authService.registerUserServ(req.body);
    return res.status(201).json({
      code: 201,
      "user": {
        email: user.email,
        subscription: user.subscription,
        avatarUrl: user.avatarUrl,
      }
    })
  } catch (err) {
    next(err)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const token = await authService.loginUserServ(req.body);
    return res.json({
      code: 200,
      data: token
    });
  } catch (err) {
    next(err)
  }
}

const logoutUser = async (req, res, next) => {
  const id = req.user._id;
  try {
    await authService.logoutUserServ(id);
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
    const upadateUser = await authService.updatUserSubServ(id, req.body);
    if (!upadateUser) {
      res.status(404).json({ message: "Not found" })
    } else {
      return res.json(upadateUser)
    }
  } catch (err) {
    next(err)
  }
}

const updatUserImg = async (req, res, next) => {
  const { _id: id } = req.user;
  try {
    const avatarUrl = await uploadImage(id, req.file);
    const user = await updateUserImage(id, { avatarUrl });
    res.json(user);
  } catch (err) {
    next(err)
  }
}


module.exports = {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updatUser,
  updatUserImg,
}