const { default: mongoose, Model } = require('mongoose')
const AnswerModel = require('./answer')

const createAnswer = async (req, res) => {
    try {
        // req.body.questionId = mongoose.Types.ObjectId('629cd64bbb7a19f600cd2276')
        // req.body.userId = mongoose.Types.ObjectId('629cd6cabb7a19f600cd2279')// hard code de test
        const {  description,  } = req.body;
        const { questionId } = req.query;
        console.log(req.body);
        const NewAnswer = await AnswerModel.create({
        description,
        questionId
      });
      res.send({ success: 1, data: NewAnswer });
    } catch (err) {
      res.send({ success: 0, data: err.message || "something went wrong" });
    }
}

const getAnswers = async (req, res) => {
    const {questionId} = req.query;
    console.log(req.body)
    try {
        const listAnswer = await AnswerModel.find({questionId: mongoose.Types.ObjectId(questionId.toString())})
        res.send({ success: 1, data: listAnswer });
    } catch (err) {
        res.send({ success: 0, data: err.message || "something went wrong" })
    }
}

const voteAnswer = async (req, res) => {
    const { answerId, voteChange} = req.params
    let voteChangeValue = 0
    try{
        if (voteChange === 'upVote') {
            voteChangeValue = 1
        } else if (voteChange === 'downVote'){
            voteChangeValue = -1
        } else {
            throw new Error('not support for action')
        }

        const updateAnswer = await AnswerModel
            .findByIdAndUpdate(
                answerId,
                { $inc: { vote: voteChangeValue }},
                { new: true}
            )
        res.send({ success: 1, data: updateAnswer})
    } catch (err) {
        res.send({ success: 0, data: err.message || 'something went wrong'})
    }
}

module.exports = {
    createAnswer,
    getAnswers,
    voteAnswer
}
