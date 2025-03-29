const { enroll, getEnrollmentsByUser } = require('../services/enrollment.service');

const enrollCourse = async (req, res) => {
  const result = await enroll(req.userId, req.body.courseId);
  res.status(result.status).json(result.data);
};

const getMyEnrollments = async (req, res) => {
  const result = await getEnrollmentsByUser(req.userId);
  res.status(result.status).json(result.data);
};

module.exports = { enrollCourse, getMyEnrollments };