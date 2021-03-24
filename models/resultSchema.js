const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
    idUser:{type: Schema.Types.ObjectId, ref: 'user'},
    idQCM:{type: Schema.Types.ObjectId, ref: 'Question'},
    answer:String,
    score:{
        type:Number,
        default:0
    }
    
    
   },
   {
    timestamps: true
  }
);

const resultModel = mongoose.model('Result', ResultSchema);

module.exports = resultModel;