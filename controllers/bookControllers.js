const Book = require("../model/bookModel")

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.find({})
        res.json(books)
    } catch (error) {
        res.status(404).send('Books not found')
    }
}

const getABook = async (req, res) => {
    try{
        const book= await Book.findById(req.params.bookId).exec();
        res.json(book)
    }
    catch(error){
        res.status(404).send('book not found')
    }
    
}

const addABook = async(req, res) => {
    try {
        const bookData = req.body
        const book = new Book(bookData)
        await book.save()
        res.json(book)
    } 
    catch (error) {
        res.status(500).send('Error adding book')
    }
}

const updateABook = async(req, res) => {
    try{
        const updatedBook = await Book.findByIdAndUpdate(req.params.bookId,  req.body ,{new:true})
        res.json(updatedBook)
        }
        catch(error){
        res.status(404).send('book not found')
      
        }
}

const deleteABook = async(req, res) => {
    try{
        await Book.findByIdAndDelete(req.params.bookId)
        res.status(200).send('Deleted')
    }
    
    catch{
        res.status(404).send('book not found')
    }
}

module.exports = {
    getAllBooks,
    getABook,
    addABook,
    updateABook,
    deleteABook
}