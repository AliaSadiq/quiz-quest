import React, { useState } from 'react';
import axios from 'axios';
import logo from "../images/logo.png";
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const validatePassword = (password) => {
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    // Validation for empty fields
    if (!username || !email || !password || !confirmPassword) {
      setError('All fields are required');
      return;
    }

    // Password match validation
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Password strength validation
    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/user/signup', { username, email, password });
      console.log(response.data); // Check the response here
      setSuccess('Signup successful! You can now login.');
      setError('');
      
      // Reset form after successful signup
      setUsername('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (err) {
      console.log(err); // Log the error to see what's going wrong
      setError(err.response?.data?.error || 'Signup failed');
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
    
  
    <div className="min-h-screen flex items-center  justify-center bg-tranparent">
      <Card color="transparent" shadow={false} className="lg:w-full md:w-full w-96 lg:mt-5 mt-5 item-center justify-center  max-w-md bg-tranparent p-8 rounded-lg shadow-md">
      <Typography variant="h3" color="white" className="text-center -mt-4 lg:-mt-4">
         QUIZQUEST
        </Typography>
   
      <Typography variant="h4" color="white" className="text-center -mt-4 lg:mt-4">
          Sign Up
        </Typography>
   
        <Typography color="white" className="mt-1 font-normal text-center">
         Nice to meet you!Enter your details to register.
        </Typography>
        <Typography color="white" className="mt-1 font-normal text-center">
       
        </Typography>

        {error && <p className="text-red-500 mb-2">{error}</p>}
        {success && <p className="text-green-500 mb-2">{success}</p>}
        <form onSubmit={handleSignup} className="mt-6 mb-1 md:w-full  lg:w-full max-w-screen-lg items-center w-80">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="white" className="-mb-4 lg:-mb-4 ">
              Your Name
            </Typography>
          
<Input
  size="sm"
  type="text"
  value={username}
  onChange={(e) => {
    const value = e.target.value;
    // Use regex to allow only letters (both uppercase and lowercase)
    if (/^[A-Za-z]*$/.test(value) || value === '') {
      setUsername(value);
    }
  }}
  placeholder="Your name"
  className="!border-t-white text-white focus:!border-t-white"
  labelProps={{ className: "before:content-none after:content-none" }}
  required
/>

            <Typography variant="h6" color="white" className="-mb-4">
              Your Email
            </Typography>
            <Input
              size="sm"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@mail.com"
              className="!border-t-blue-gray-200 text-white focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              required
            />

            <Typography variant="h6" color="white" className="-mb-4">
              Password
            </Typography>
            <Input
              type="password"
              size="sm"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="!border-t-blue-gray-200 text-white focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              required
            />

            <Typography variant="h6" color="white" className="-mb-4">
              Confirm Password
            </Typography>
            <Input
              type="password"
              size="sm"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="********"
              className="!border-t-blue-gray-200 text-white focus:!border-t-gray-900"
              labelProps={{ className: "before:content-none after:content-none" }}
              required
            />
          </div>

          <Button className="mt-6 bg-red-400 hover:bg-red-200" fullWidth type="submit">
            Sign Up
          </Button>

          <Typography color="white" className="mt-4 -mb-5 text-center font-normal">
            Already have an account?{" "}
            <a href="/Login" className="font-medium text-red-900">
              Login
            </a>
          </Typography>
        </form>
      </Card>
    </div>
    </div>
  );
};

export default SignUp;
