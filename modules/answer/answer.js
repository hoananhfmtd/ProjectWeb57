const mongoose = require('mongoose')
    // Chema = mongoose.Schema,
const AnswerSchema = new mongoose.Schema({
    description: {
        type: String, 
    },
    vote: {
        type: Number,
        default: 0
    },
    questionId:{
        type: mongoose.Schema.Types.ObjectId,
    },
    userId:{    
        type: String,
    }
},
    {
        timestamps: true,
    }
)

const Model = mongoose.model('answer', AnswerSchema)
module.exports = Model
