const { default: mongoose } = require('mongoose');
const QuestionModel = require('./question')

const createQuestion = async (req, res) => {
    const { title, description, tags, createdBy } = req.body;
    
    try {
        const newQuestion = await QuestionModel.create({
            title,
            description,
            tags,
            createdBy
        })
        res.send({ success: 1, data: newQuestion})
    } catch (err) {
        res.send({ success: 0, data: err.message || "Can't create question"})
    }
}

const getQuestion = async (req, res) => {
    const { id } = req.params

    try {
        if (!mongoose.isValidObjectId(id)) {
            throw new Error('not valid objectId')
        }
        const searchQuestion = await QuestionModel.findById(id)
        if (!searchQuestion) {
            throw new Error('cant search your id')
        } 
        res.send({ success: 1, data: searchQuestion})
    } catch (err) {
        res.send({ success: 0, data: err.message || 'something went wrrong'})
    }
}


const voteQuestion = async (req, res) => {
    const { questionId, voteChange } = req.params

    // const voteChangeValue = (voteChange = "upVote") ? 1 : -1

    const updateQuestion = await QuestionModel
        .findByIdAndUpdate(
            questionId, 
            { $inc: { vote: voteChange }}, 
            { new: true }
        )
    res.send({ success: 1, data: updateQuestion })
}

module.exports = {
    createQuestion,
    getQuestion,
    voteQuestion
}