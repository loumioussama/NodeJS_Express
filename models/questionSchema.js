const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionSchema = new Schema({
    question: String,
    options: Array,
    answer: Array,
    
   },
   {
    timestamps: true
}
);

const questionModel = mongoose.model('Question', QuestionSchema);

module.exports = questionModel;