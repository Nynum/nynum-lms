
const { enroll, getUserEnrollments } = require('../services/enrollment.service');

const enrollCourse = async (req, res) => {
  const courseId = req.params.courseId;
  const result = await enroll(req.userId, courseId);
  res.status(result.status).json(result.data);
};

const getMyEnrollments = async (req, res) => {
  const result = await getUserEnrollments(req.userId);
  res.status(result.status).json(result.data);
};

module.exports = { enrollCourse, getMyEnrollments };
