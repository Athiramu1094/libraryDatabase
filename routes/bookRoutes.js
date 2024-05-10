const express = require('express')
const { getAllBooks, getABook, addABook, updateABook, deleteABook } = require('../controllers/bookControllers')
const router = express.Router()


router.get('/', getAllBooks)

router.get('/:bookid', getABook)

router.post('/', addABook)  

router.put('/:bookid', updateABook)

router.delete('/:bookid', deleteABook)


module.exports = router 