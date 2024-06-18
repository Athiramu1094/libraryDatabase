const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    name: String,
    image:String,
    price:Number,
    description:String,
    author:{
        type: mongoose.ObjectId,
        ref: 'Author'
    }

});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book