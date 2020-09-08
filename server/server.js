const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')

dotenv.config()

// connect to db
connectDB()

const app = express()
app.use(morgan('dev'))
app.use(express.json())

app.use('/', require('./routes'))
app.use('/auth', require('./routes/auth'))



// some global middleware

function notFount(req, res, next) {
    res.status(404);
    const error = new Error(`Not found - ${req.originalUrl}`);
    next(error);
}

function errorHandler(req, res, next) {
    console.log('error handler');
    res.status(res,status || 500);
    res.json({
        message: err.message,
        stack: err.stack
    });
}

app.use(notFount)
app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Server is running on ${port} port`))