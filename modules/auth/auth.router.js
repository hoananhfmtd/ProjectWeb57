const Router = require('express').Router();
const UserModel = require('./user');

// api/auth/login
Router.post('/login', async (req, res) => {
    res.send({ success: 1 })
})

Router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    try {
        const newUser = await UserModel.create({
            username,
            password
        })
        res.send({ success: 1, data: newUser })
    } catch (err) {
        res.send({ success: 0, data: err.message || 'something went wrong' })
    }
})

module.exports = Router;