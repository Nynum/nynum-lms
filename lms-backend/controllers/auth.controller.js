const { registerUser, loginUser } = require('../services/auth.service');

const register = async (req, res) => {
  const result = await registerUser(req.body);
  res.status(result.status).json(result.data);
};

const login = async (req, res) => {
  const result = await loginUser(req.body);
  res.status(result.status).json(result.data);
};

module.exports = { register, login };