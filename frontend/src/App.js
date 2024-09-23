import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import SignupForm from './components/SignupForm';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Result from './pages/Result';

import SplashScreen from './components/SplashScreen';
function App() {
  return (
    <Router>
      <div>
       
        <Routes>
          <Route path="/" element={<SignupForm />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/quiz/:categoryId" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
