require('dotenv').config();
const express = require('express')
const authRouter = require('./modules/auth/auth.router');
// const questionRouter = require('./modules/question');
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello 1')
})

app.use('/api/auth', authRouter);
// app.use('/api/questions', questionRouter);

app.listen(process.env.PORT, (err) => {

    if(err) throw err
    console.log('Sever started')
})