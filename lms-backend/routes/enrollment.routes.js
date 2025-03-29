const express = require('express');
const router = express.Router();
const { enrollCourse, getMyEnrollments } = require('../controllers/enrollment.controller');
const auth = require('../middleware/auth');
const role = require('../middleware/role');

router.post('/', auth, role('student'), enrollCourse);
router.get('/mine', auth, role('student'), getMyEnrollments);

module.exports = router;