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

const searchQuestions = async (req, res) => {
    const { keyword } = req.query
    try {
        const searchQuestion = await QuestionModel.find({
            $or: [
                { 'description': { $regex: new RegExp(keyword, 'i') }},
                { 'title': { $regex: new RegExp(keyword, 'i') }},
                { 'tags': { $regex: new RegExp(keyword, 'i') }}
            ]})
        if (!searchQuestion) {
            res.send({ success: 1, data: "Your question search not found!"})
        } else {
            res.send({ success: 1, data: searchQuestion})
        }    
    } catch(err) {
        res.send({ success: 0, data: err.message || "Something went wrong"})
    }
}

const getQuestions = async (req, res) => {
    try {
        const listQuestion = await QuestionModel.find({})
        res.send({ success: 1, data: listQuestion})
    } catch(err) {
        res.send({ success: 0, data: err.message || "Something went wrong"})
    }
}

const updateQuestion = async (req, res) => {
    const { questionId } = req.params
    const dataUpdate = req.body

    try{
        const foundQuestion = await QuestionModel.findById(questionId);
        if (!foundQuestion) {
            throw new Error('Not found question')
        } 
        const updateQuestion = await QuestionModel
            .findByIdAndUpdate(questionId, dataUpdate, { new: true })
        res.send({ success: 1, data: updateQuestion})
    } catch(err) {
        res.send({ success: 0, data: err.message || 'Something went wrong'})
    }
}




const voteQuestion = async (req, res) => {
    const { questionId, voteChange } = req.params
    
    try{
        let voteChangeValue = 0
        // const voteChangeValue = (voteChange === "upVote") ? 1 : -1
        if (voteChange === "voteUp"){
            voteChangeValue = 1
        } else if (voteChange === "voteDown"){
            voteChangeValue = -1
        } else {
            throw new Error('Not support for action')
        }

        const updateQuestion = await QuestionModel
            .findByIdAndUpdate(
                questionId, 
                { $inc: { vote: voteChangeValue }}, 
                { new: true }
            )
        res.send({ success: 1, data: updateQuestion })
    } catch(err) {
        res.send({ success: 0, data: err.message || 'something went wrong' })
    }
    
}

// const deleteQuestion = async (req, res) => {
//     const { id } = req.params

//     try{
//         if (!mongoose.isValidObjectId(id)) {
//             throw new Error('not valid objectId')
//         }
//         const searchQuestion = await QuestionModel.findById(id)
//         if (!searchQuestion) {
//             throw new Error('cant search your id')
//         } 
        
//         res.send({ success: 1, data: 'deleted question'})
//     }
// }

module.exports = {
    createQuestion,
    getQuestion,
    getQuestions,
    searchQuestions,
    updateQuestion,
    voteQuestion
    // viewQuestion
}