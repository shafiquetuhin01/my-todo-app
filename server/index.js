const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv').config();

const app = express();
// for data json format
app.use(express.json());
app.use(cors())
// port
const port = process.env.PORT || 5500;

// import routes 
const TodoItemRoute = require('./routes/todoItems')

// connect to mongodb
mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => console.log('db conncected'))
  .catch((err) => console.log(err));

  app.use('/', TodoItemRoute)

// connect to server
app.listen(port, () => console.log('App connected to server'));
