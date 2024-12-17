const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const tripRoutes = require('./src/Routes/tripRoutes');
const userRoutes = require('./src/Routes/userRoutes');
const connectDB = require('./src/config/db');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors(
));
app.use(express.json());

// Connect to MongoDB
connectDB();

app.get('/api/config', (req, res) => res.send('API is running...'));

// Routes
app.use('/api/trips', tripRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
