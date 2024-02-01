const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    id: {
        type: String,
        required: false,
        unique: true,
    },
    password: {
        type: String,
        required: false,
    },
    name: {
        type: String,
        required: false,
    },
    profile: {
        type: String,
        require: false,
        default: ''
    }
    



})

const User = mongoose.model('User', userSchema);

module.exports = User;


