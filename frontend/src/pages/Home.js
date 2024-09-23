// // // components/Home.js
// // import React from 'react';
// // import '../App.css'; 
// // const Home =({ width = 200, height = 150 }) => {
// //   return (
// //     <div className="hexagon-wrapper" style={{ width: `${width}px`, height: `${height}px` }}>
// //       <div className="hexagon">
// //         <div className="hex-top"></div>
// //         <div className="hex-middle"></div>
// //         <div className="hex-bottom"></div>
// //       </div>
// //     </div>
// //   );
// // };

// // {/* <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black to-indigo-900">
// //       <div className="text-center text-white mb-10">
// //         <h1 className="text-3xl md:text-4xl font-bold">WHAT IS YOU TUBE'S SLOGAN?</h1>
// //       </div>

// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
// //         <div className="option relative flex items-center justify-between bg-purple-900 text-white py-4 px-6 rounded-lg shadow-md frame">
// //           <span className="text-yellow-400 font-semibold">A:</span>
// //           <span className="ml-4 text-xl">Just Video It</span>
// //         </div>

// //         <div className="option relative flex items-center justify-between bg-purple-900 text-white py-4 px-6 rounded-lg shadow-md frame">
// //           <span className="text-yellow-400 font-semibold">B:</span>
// //           <span className="ml-4 text-xl">Broadcast Yourself</span>
// //         </div>

// //         <div className="option relative flex items-center justify-between bg-purple-900 text-white py-4 px-6 rounded-lg shadow-md frame">
// //           <span className="text-yellow-400 font-semibold">C:</span>
// //           <span className="ml-4 text-xl">Freedom To Broadcast</span>
// //         </div>

// //         <div className="option relative flex items-center justify-between bg-purple-900 text-white py-4 px-6 rounded-lg shadow-md frame">
// //           <span className="text-yellow-400 font-semibold">D:</span>
// //           <span className="ml-4 text-xl">Broadcast for Free</span>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }; */}

// //     // <div>
// //     //   <h1>Welcome to the Quiz App</h1>
// //     //   <p>You are logged in!</p>
// //     // </div>
// // //   );
// // // };

// // export default Home;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const categories = [
//   { id: 9, name: 'General Knowledge' },
//   { id: 18, name: 'Computers' },
//   { id: 23, name: 'History' },
//   { id: 27, name: 'Animals' }
// ];

// function Home() {
//   return (
//     <div className="home">
//       <h1>Choose a Quiz Category</h1>
//       <div className="categories">
//         {categories.map(category => (
//           <Link key={category.id} to={`/quiz/${category.id}`}>
//             <button>{category.name}</button>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  { id: 9, name: 'General Knowledge' },
  { id: 18, name: 'Computers' },
  { id: 23, name: 'History' },
  { id: 27, name: 'Animals' }
];

const Home = () => {
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

      <div className="home text-center">
        <h1 className="font-bold text-white text-3xl -mt-10 mb-8"> Welcome to QUIZQUEST</h1>
        <h3 className="text-white text-xl mt-7 mb-8">Choose any category!</h3>
        <div className="grid grid-cols-2 gap-5">
          {categories.map(category => (
            <Link key={category.id} to={`/quiz/${category.id}`} className="w-full">
              <div className="w-60 shadow-2xl h-24 border-2 border-black bg-transparent flex justify-center items-center text-white font-bold rounded-lg hover:bg-red-400 transition duration-300">
                <span className="text-center">{category.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

