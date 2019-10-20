const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const postRoutes = require('./routes/postRoutes');
const userRoutes = require('./routes/userRoutes');

// const userRoutes = require('./routes/userRoutes');

dotenv.config();

app.use(express.json());

mongoose.connect(`${process.env.DB}`, { useNewUrlParser: true }, () => {
  console.log('DB was successfully connected');
});

app.use('/api/v1/posts', postRoutes);
// app.use('/api/v1/users', userRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log('App is listening on port 3000');
});
