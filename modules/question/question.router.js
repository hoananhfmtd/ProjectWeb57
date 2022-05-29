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

//search questions
Router.get(
    '/',
    questionController.getQuestions
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




// Router.put('/vote', async (req, res) => {
//     const {voteChange, id} = req.body;
//     try{
//         if (!mongoose.isValidObjectId(id)) {
//             throw new Error('')
//         }
//         const question = await QuestionModel.findById(id)
//     }
// })


module.exports = Router;

