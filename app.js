const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require("cookie-parser");

// Initialize main app
const app = express();


// for geting .env valriable
dotenv.config();


// Database connection
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_CONNECTION_STRING)
    .then(() => console.log('database Connection successful'))
    .catch(err => console.log(err))


// Request Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// set view engine
app.set('view engine', 'ejs');


// set static folder
app.use(express.static(path.join(__dirname, '/public')));


// parse cookie
app.use(cookieParser(process.env.COOKEI_SECRET));


// Routing setup


// Error Handling


// run server
app.listen(process.env.PORT, () => {
    console.log(`App listening to port ${process.env.PORT}`);
})
