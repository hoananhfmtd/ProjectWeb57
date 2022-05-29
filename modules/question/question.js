const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    vote: {
        type: Number,
        required: true,
        default: 0
    },
    answerCount: {
        type: Number,
        required: true,
        default: 0

    },
    createdBy: {
        type:  mongoose.Schema.Types.ObjectId
    },
}, {
    timestamps: true
})

const Model = mongoose.model('question', QuestionSchema);

module.exports = Model;

