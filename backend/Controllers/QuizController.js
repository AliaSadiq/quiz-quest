const axios = require('axios');
const Quiz = require('../Models/QuizModel');
const User = require('../Models/UserModel');

exports.getQuestions = async (req, res) => {
  try {
    const apiResponse = await axios.get('https://quizapi.io/api/v1/questions', {
      headers: { 'X-Api-Key': process.env.QUIZ_API_KEY },
      params: { limit: 10 } // You can adjust the number of questions
    });
    res.json(apiResponse.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch questions' });
  }
};

exports.submitQuiz = async (req, res) => {
  try {
    const { answers, userId } = req.body;
    const correctAnswers = calculateScore(answers);
    const quiz = new Quiz({
      user: userId,
      questions: answers,
      score: correctAnswers,
    });
    await quiz.save();

    // Save quiz to user's history
    const user = await User.findById(userId);
    user.quizHistory.push(quiz._id);
    await user.save();

    res.json({ score: correctAnswers });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Helper function to calculate score based on answers
function calculateScore(answers) {
  let score = 0;
  answers.forEach(answer => {
    if (answer.isCorrect) score += 1;
  });
  return score;
}
