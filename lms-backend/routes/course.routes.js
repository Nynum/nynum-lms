const express = require('express');
const router = express.Router();
const { createCourse, getAllCourses } = require('../controllers/course.controller');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/', auth, role('instructor'), createCourse);
router.get('/', getAllCourses);

module.exports = router;