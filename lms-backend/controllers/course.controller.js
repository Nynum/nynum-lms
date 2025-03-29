const { createCourseService, getAllCoursesService } = require('../services/course.service');

const createCourse = async (req, res) => {
  const result = await createCourseService(req.userId, req.body);
  res.status(result.status).json(result.data);
};

const getAllCourses = async (req, res) => {
  const result = await getAllCoursesService();
  res.status(result.status).json(result.data);
};

module.exports = { createCourse, getAllCourses };