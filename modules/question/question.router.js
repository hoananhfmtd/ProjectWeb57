const Router = require('express').Router;

// api/questions?keyword=123
Router.get('/', async (req, res) => {
    const { keyword } = req.query
    res.send({ success: 1 })
})

// api/questions/
Router.post('/', async (req, res) => {
    res.send({ success: 1 })
})

// api/questions/:id
Router.post('/:id', async (req, res) => {
    res.send({ success: 1 })
})

module.exports = Router;