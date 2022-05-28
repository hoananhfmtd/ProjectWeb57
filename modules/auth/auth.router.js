const Router = require('express').Router();

// api/auth/login
Router.post('/login', async (req, res) => {
    res.send({ success: 1 })
})

module.exports = Router;