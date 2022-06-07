const Router = require('express').Router()
const answerController = require('./answer.controller')

Router.post(
  '/',
  answerController.createAnswer
)

Router.get("/", 
  answerController.getAnswers
)

Router.put(
  "/:answerId/:voteChange",
  answerController.voteAnswer
)

module.exports = Router;
