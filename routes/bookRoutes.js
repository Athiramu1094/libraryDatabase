const express = require('express')
const { getAllBooks, getABook, addABook, updateABook, deleteABook } = require('../controllers/bookControllers')
const router = express.Router()


router.get('/', getAllBooks)

router.get('/:bookId', getABook)

router.post('/', addABook)  

router.put('/:bookId', updateABook)

router.delete('/:bookId', deleteABook)


module.exports = router 