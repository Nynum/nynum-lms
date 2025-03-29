const { create, findAll, findMine, findById } = require('../services/course.service');

const createCourse = async (req, res) => {
  const result = await create(req.userId, req.body);
  res.status(result.status).json(result.data);
};

const getAllCourses = async (req, res) => {
  const result = await findAll();
  res.status(result.status).json(result.data);
};

const getMyCourses = async (req, res) => {
  const result = await findMine(req.userId);
  res.status(result.status).json(result.data);
};

const getCourseById = async (req, res) => {
  const result = await findById(req.params.id);
  res.status(result.status).json(result.data);
};

module.exports = { createCourse, getAllCourses, getMyCourses, getCourseById };