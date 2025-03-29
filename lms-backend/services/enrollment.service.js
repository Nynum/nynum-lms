const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enroll = async (userId, courseId) => {
  const existing = await prisma.enrollment.findFirst({
    where: { userId, courseId }
  });
  if (existing) return { status: 400, data: { message: "Already enrolled" } };

  const record = await prisma.enrollment.create({
    data: { userId, courseId }
  });
  return { status: 201, data: record };
};

const getEnrollmentsByUser = async (userId) => {
  const list = await prisma.enrollment.findMany({
    where: { userId },
    include: { course: true }
  });
  return { status: 200, data: list };
};

module.exports = { enroll, getEnrollmentsByUser };