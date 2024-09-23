const express = require('express');
const { getQuestions, submitQuiz } = require('../Controllers/QuizController');
const authMiddleware = require('../Middleware/authMiddleware');
const router = express.Router();

router.get('/questions', authMiddleware, getQuestions);
router.post('/submit', authMiddleware, submitQuiz);

module.exports = router;
