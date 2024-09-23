import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get(`https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`);
        setQuestions(response.data.results);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };
    fetchQuestions();
  }, [categoryId]);

  useEffect(() => {
    if (timeLeft === 0) {
      nextQuestion();
    }
    const timer = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setTimeLeft(30);
    } else {
      navigate('/result', { state: { score, total: questions.length } });
    }
  };

  const handleAnswer = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    nextQuestion();
  };

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <div className="animation-container">
      <div className="lightning-container">
        <div className="lightning white"></div>
        <div className="lightning red"></div>
      </div>
      <div className="boom-container">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape triangle big yellow"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="boom-container second">
        <div className="shape circle big white"></div>
        <div className="shape circle white"></div>
        <div className="shape disc white"></div>
        <div className="shape triangle blue"></div>
      </div>
      <div className="quiz text-center">
        <h1 className="font-bold text-white text-3xl -mt-10 mb-8">QUIZQUEST</h1>
        <h3 className="text-white text-xl mt-7 mb-8">Choose the correct answer!</h3>
        <h2 className="text-white text-2xl mb-4">{questions[currentQuestion].question}</h2>
        <div className="grid grid-cols-2 gap-5 mb-4">
          {questions[currentQuestion].incorrect_answers.map((answer, index) => (
            <div key={index} className="w-full h-24 border-2 border-black bg-transparent flex justify-center items-center text-white font-bold rounded-lg hover:bg-red-400 transition duration-300">
              <button onClick={() => handleAnswer(false)} className="w-full h-full text-center">
                {answer}
              </button>
            </div>
          ))}
          <div className="w-full h-24 border-2 border-black bg-transparent flex justify-center items-center text-white font-bold rounded-lg hover:bg-red-400 transition duration-300">
            <button onClick={() => handleAnswer(true)} className="w-full h-full text-center">
              {questions[currentQuestion].correct_answer}
            </button>
          </div>
        </div>
        <div className="timer text-white mb-4">Time left: {timeLeft} seconds</div>
        <div className="bg-red-400 p-2 rounded-lg"><ProgressBar currentQuestion={currentQuestion + 1} totalQuestions={questions.length} /></div>
      </div>
    </div>
  );
};

export default Quiz;
