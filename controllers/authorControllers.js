const Author = require("../model/authorModel");

const gettAllAuthors  = async (req, res) => {
   try{
    const authors =await Author.find({});
    res.json(authors)
   }

   catch(error){
    res.status(404).send('Author not found')
   }
}

const getAnAuthor =async(req, res) => {
    try{
        const author= await Author.findById(req.params.authorId).exec();
        res.json(author)
       }
       catch(error){
        res.status(404).send('author not found')
       }
    
}

const addAnAuthor = async(req, res) => {
    const authorData = req.body
    const author = new Author(authorData);
    await author.save();
    res.json(author)
}

const updateAnAuthor =async (req, res) => {
    try{
        const updatedAuthor = await Author.findByIdAndUpdate(req.params.authorId,  req.body ,{new:true})
        res.json(updatedAuthor)
        }
        catch(error){
        res.status(404).send('author not found')
      
        }
}

const deleteAnAuthor = async (req, res) => {
    try{
        await Author.findByIdAndDelete(req.params.authorId)
        res.status(200).send('Deleted')
    }
    
    catch{
        res.status(404).send('author not found')
    }
}

module.exports = {
    gettAllAuthors,
    getAnAuthor,
    addAnAuthor,
    updateAnAuthor,
    deleteAnAuthor
}