const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    nameQuiz:String,
    description: [
    {
    question: String,
    options: Array,
    answer: String
    }
    ] 
    
   },
   {
    timestamps: true
}
);

const questionModel = mongoose.model('Question', QuestionSchema);

module.exports = questionModel;