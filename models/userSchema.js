const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:{
        type: String,
        required: [true, 'First name is required.']
    },
    email:{
        type: String,
        required: [true, 'E-mail is required.']
    },
    password: {
        type: String,
        required: [true, 'Password is required.']
    },
    },
    {
        timestamps: true
    });

const userModel = mongoose.model('user', UserSchema);
module.exports = userModel;