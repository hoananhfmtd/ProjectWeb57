const Router = require('express').Router();
const questionController = require('./question.controller');


// api/questions/
Router.post(
    '/',
    questionController.createQuestion 
)
//search question
Router.get(
    '/:id',
    questionController.getQuestion
)

//get question by id
Router.get(
    '/',
    questionController.getQuestions
)

//search question
Router.get(
    '/:keyword',
    questionController.searchQuestions
)

//update body question
Router.put(
    '/:questionId',
    questionController.updateQuestion
)
//update vote question
Router.put(
    '/:questionId/:voteChange',
    questionController.voteQuestion
)

module.exports = Router;

