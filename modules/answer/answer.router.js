const Router = require('express').Router()
const answer = require('./answer')
// const answerController = require('./answer.controller')

Router.post('/',async (req, res) => {

    try {
      const NewAnswer = await answer.create(req.body);
      res.send({ success: 1, data: NewAnswer });
    } catch (err) {
      res.send({ success: 0, data: err.message || "something went wrong" });
    }
    // answerController.voteAnswer
});

Router.get("/", async (req, res) => {
    const {questionId}= req.query;
    console.log('q', questionId)
    const newAnswer = await answer.find({questionId:questionId})
    res.send({success:1, data:newAnswer});
})

module.exports = Router;