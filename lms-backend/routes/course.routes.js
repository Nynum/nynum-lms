const express = require('express');
const router = express.Router();
const { createCourse, getAllCourses, getMyCourses, getCourseById } = require('../controllers/course.controller');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/', auth, role('instructor'), createCourse);
router.get('/', getAllCourses);
router.get('/mine', auth, role('instructor'), getMyCourses);
router.get('/:id', getCourseById);

module.exports = router;