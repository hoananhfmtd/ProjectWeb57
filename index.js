require('dotenv').config();
const mongoose = require('mongoose')
const express = require('express')
const authRouter = require('./modules/auth/auth.router');
const questionRouter = require('./modules/question/question.router');
const answerRouter = require('./modules/answer/answer.router')

mongoose.connect(process.env.MONGODB_URI, (err) => {
    if (err) return console.log('err');
    console.log('db success')
})
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello 1')
})

app.use('/api/auth', authRouter);

app.use('/api/questions', questionRouter);

app.use('/api/answer', answerRouter);

app.listen(process.env.PORT, (err) => {

    if(err) throw err
    console.log('Sever started')
})