const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./Routes/UserRoutes');
const quizRoutes = require('./Routes/QuizRoutes');
const cors = require('cors');
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
// Routes
app.use('/api/user', userRoutes);
app.use('/api/quiz', quizRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
