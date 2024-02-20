const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: false,
    },
    write: {
        type: String,
        required: false,
    },
    path: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        required: false,
    },
    img: {
        type: String,
        required: false,
    }




})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;


