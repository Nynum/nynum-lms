const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const createCourseService = async (instructorId, data) => {
  const course = await prisma.course.create({
    data: {
      ...data,
      instructorId
    }
  });
  return { status: 201, data: course };
};

const getAllCoursesService = async () => {
  const courses = await prisma.course.findMany({
    include: {
      instructor: {
        select: { id: true, email: true }
      }
    }
  });
  return { status: 200, data: courses };
};

module.exports = { createCourseService, getAllCoursesService };