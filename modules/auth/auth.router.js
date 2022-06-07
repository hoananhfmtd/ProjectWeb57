const Router = require('express').Router();
const UserModel = require('./user');

// api/auth/login
Router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try{

        const userExisted = await UserModel.findOne({username,password});

        if (!userExisted) {
            throw new Error('Dont have user')
        }
        res.send({ success: 1, data: userExisted })
        
    }catch (err){
        res.send({ success: 0, data: err.message || 'something went wrong' })
    }
})


// api/auth/signup
Router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userExisted = await UserModel.findOne({username});
        if(userExisted){
            throw new Error("Uername exist");
        }
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