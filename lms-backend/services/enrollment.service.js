
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const enroll = async (userId, courseId) => {
  const exists = await prisma.enrollment.findFirst({
    where: { userId, courseId }
  });

  if (exists) {
    return { status: 400, data: { message: "Already enrolled in this course" } };
  }

  const enrollment = await prisma.enrollment.create({
    data: { userId, courseId }
  });

  return { status: 201, data: enrollment };
};

const getUserEnrollments = async (userId) => {
  const enrollments = await prisma.enrollment.findMany({
    where: { userId },
    include: {
      course: true
    }
  });

  return { status: 200, data: enrollments };
};

module.exports = { enroll, getUserEnrollments };
