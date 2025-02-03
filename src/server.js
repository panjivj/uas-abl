require('dotenv').config();
const express = require('express');
const rateLimit = require('./config/rateLimit');
const apiRouter = require('./routes/api');

const app = express();

// Middleware
app.use(express.json());
app.use(rateLimit); // Rate limiting global

// Routes
app.use('/api', apiRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});