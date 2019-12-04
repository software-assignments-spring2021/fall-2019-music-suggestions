const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const fs = require('fs');
const multer = require('multer');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const exercisesRouter = require('./routes/exercises');
 const usersRouter = require('./routes/users');
 const profilesRouter = require('./routes/profiles');

// app.use('/exercises', exercisesRouter);
 app.use('/users', usersRouter);
 app.use('/profiles', profilesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
