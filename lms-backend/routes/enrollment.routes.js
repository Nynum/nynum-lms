
const express = require('express');
const router = express.Router();
const { enrollCourse, getMyEnrollments } = require('../controllers/enrollment.controller');
const auth = require('../middleware/auth');

router.post('/:courseId', auth, enrollCourse);
router.get('/', auth, getMyEnrollments);

module.exports = router;
