const express = require('express')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello 1')
})

app.listen(8080, (err) => {

    if(err) throw err
    console.log('Sever started')
})