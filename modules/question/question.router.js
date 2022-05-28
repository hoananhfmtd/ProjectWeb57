const Router = require('express').Router;

// api/questions/
Router.post('/', async (req, res) => {
    res.send({ success: 1 })
})

module.exports = Router;