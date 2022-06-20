const { createError } = require("../errors");
const { authenticateUserServ } = require("../services/authService");

const auth = async (req, res, next) => {
  const { authorization = "" } = req.headers;
  const [bearer, token] = authorization.split(' ');
  if (bearer !== "Bearer" || !token) {
    next(createError(401, 'Not authorized'));
  }
  const user = await authenticateUserServ(token);
  if (!user || !user.token) {
    next(createError(401, 'Not authorized'))
  }
  req.user = user;
  next();
}

module.exports = {
  auth
}