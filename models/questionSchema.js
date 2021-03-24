const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const QuestionSchema = new Schema({
    nameQuiz:String,
    description: [
    {
     id:ObjectId,
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