const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const database = require('./database');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

//Database connection
const connection = database.connection;
connection.once('open',  ()=>{
    console.log("MongoDB database connection established successfully ")
})



app.use('/users', usersRouter);
app.use('/board', boardRouter);

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})

