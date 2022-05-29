const { default: mongoose } = require('mongoose')
const AnswerModel = require('./answer')

const voteQuestion = async (req, res) => {
    const { answerId, voteChange} = req.params

    try{
        const updateAnswer = await AnswerModel
            .findByIdAndUpdate(
                answerId,
                { $inc: { vote: voteChange }},
                { new: true}
            )
        res.send({ success: 1, data: updateAnswer})
    } catch (err) {
        res.send({ success: 0, data: err.message || 'something went wrong'})
    }
    
}
module.exports = {
    voteQuestion
}