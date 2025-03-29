const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const registerUser = async ({ email, password, role }) => {
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) return { status: 400, data: { message: 'Email already exists' } };

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword, role: role || 'student' }
  });

  return { status: 201, data: { message: 'Registered', user: { id: user.id, email: user.email } } };
};

const loginUser = async ({ email, password }) => {
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { status: 401, data: { message: 'Invalid credentials' } };
  }

  const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });

  return { status: 200, data: { message: 'Logged in', token } };
};

module.exports = { registerUser, loginUser };