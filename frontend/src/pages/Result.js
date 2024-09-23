// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Result = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { score, total } = location.state || { score: 0, total: 10 };

//   return (
//     <div className="result">
//       <h1>Quiz Completed!</h1>
//       <p>Your Score: {score} / {total}</p>
//       <button onClick={() => navigate('/')}>Go Home</button>
//     </div>
//   );
// };

// export default Result;
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { score, total } = location.state || { score: 0, total: 10 };

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
    <div className="result text-center bg-tranparent border-4 border-black shadow-2xl p-10 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-white mb-4">Quiz Completed!</h1>
      <p className="text-xl text-white mb-6">Your Score: <span className="font-bold">{score}</span> / <span className="font-bold">{total}</span></p>
      <button 
        onClick={() => navigate('/home')}
        className="bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-300 transition duration-300"
      >
        Go Home
      </button>
    </div>
    </div>
  );
};

export default Result;
