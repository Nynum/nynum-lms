const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const create = async (instructorId, data) => {
  const course = await prisma.course.create({
    data: {
      title: data.title,
      description: data.description,
      price: data.price,
      instructorId
    }
  });
  return { status: 201, data: course };
};

const findAll = async () => {
  const courses = await prisma.course.findMany({
    include: { instructor: { select: { email: true } } }
  });
  return { status: 200, data: courses };
};

const findMine = async (instructorId) => {
  const courses = await prisma.course.findMany({
    where: { instructorId }
  });
  return { status: 200, data: courses };
};

const findById = async (id) => {
  const course = await prisma.course.findUnique({
    where: { id },
    include: { instructor: { select: { email: true } } }
  });
  if (!course) return { status: 404, data: { message: "Course not found" } };
  return { status: 200, data: course };
};

module.exports = { create, findAll, findMine, findById };