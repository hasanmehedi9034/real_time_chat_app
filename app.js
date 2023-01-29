//  External imports
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require("cookie-parser");


// Internal Imports
const  { notFoundHandler, errorHandler } = require('./middlewares/common/errorHandler')
const loginRouter = require('./router/loginRouter')
const usersRouter = require('./router/usersRouter')
const inboxRouter = require('./router/inboxRouter')


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
app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/inbox', inboxRouter);


// 404 Not found handler
app.use(notFoundHandler);


// common error handler
app.use(errorHandler);


// run server
app.listen(process.env.PORT, () => {
    console.log(`App listening to port ${process.env.PORT}`);
})
