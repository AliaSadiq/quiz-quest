// // components/LoginForm.js
// import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const history = useHistory();

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email.includes('@')) {
//       setError('Please enter a valid email.');
//       return;
//     }
    
//     if (password.length < 6) {
//       setError('Password should be at least 6 characters.');
//       return;
//     }

//     // Check if user exists in localStorage
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     const user = storedUsers.find(u => u.email === email && u.password === password);

//     if (user) {
//       // Success: redirect to home or dashboard
//       alert('Login successful!');
//       history.push('/');
//     } else {
//       setError('Invalid credentials.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       <p>Don't have an account? <a href="/signup">Sign up</a></p>
//     </div>
//   );
// };

// // export default LoginForm;
// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(`http://localhost:5000/api/user/login`, { email, password });
//       // Save the token to localStorage or state
//       localStorage.setItem('token', response.data.token);
//       // Redirect user to the quiz page or dashboard
//     } catch (err) {
//       setError(err.response?.data?.message || 'Login failed');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
//         <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
//         {error && <p className="text-red-500 mb-4">{error}</p>}
//         <form onSubmit={handleLogin}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-2"
//               placeholder="Enter your email"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Password</label>
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full p-2 border border-gray-300 rounded mt-2"
//               placeholder="Enter your password"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { Typography, Input, Button } from '@material-tailwind/react'; // Assuming you're using Material Tailwind
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/user/login`, { email, password });
      // Save the token to localStorage or state
      localStorage.setItem('token', response.data.token);
      // Redirect user to the home page after successful login
      navigate('/home'); // Redirect to the home page
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

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
    
  
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="w-full max-w-md bg-transparent p-8 rounded-lg shadow-md">
      <Typography variant="h3" color="white" className="text-center -mt-4 lg:-mt-4">
         QUIZQUEST
        </Typography>
   
        <Typography variant="h4" color="white" className="text-center -mt-4 lg:mt-4">
          Login
        </Typography>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin} className="mt-6 mb-1 w-full">
          <div className="mb-4 flex flex-col gap-4">
            <Typography variant="h6" color="white" className="-mb-1">
              Your Email
            </Typography>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="!border-t-blue-gray-200 text-white focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              required
            />

            <Typography variant="h6" color="white" className="-mb-1">
              Password
            </Typography>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="!border-t-blue-gray-200 text-white focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              required
            />
          </div>

          <Button onClick={handleLogin} className="mt-6 bg-red-400 hover:bg-red-200" fullWidth type="submit">
            Login
          </Button>

          <Typography color="white" className="mt-4 -mb-5 text-center font-normal text-sm sm:text-base md:text-lg">
            Don't have an account?{" "}
            <a href="/Signup" className="font-medium text-red-900">
              Sign up
            </a>
          </Typography>
        </form>
      </div>
    </div>
    </div>
  );
};

export default Login;
