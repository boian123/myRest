const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

app.use(express.json());

mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true }, () => {
  console.log('DB was successfully connected');
});

app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/register');

app.listen(process.env.PORT2 || 4000, () => {
  console.log(`app listening on port ${process.env.PORT2}`);
});
