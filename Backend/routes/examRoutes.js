const express = require('express');
const { getAllExams, createExam } = require('../controllers/examController');
const router = express.Router();

router.get('/', getAllExams);
router.post('/', createExam);

module.exports = router;
