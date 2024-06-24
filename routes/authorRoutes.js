const express = require('express')
const { getAllAuthors, getAnAuthor, addAnAuthor, updateAnAuthor, deleteAnAuthor } = require('../controllers/authorControllers')
const router = express.Router()


router.get('/', getAllAuthors)

router.get('/:authorId', getAnAuthor)

router.post('/', addAnAuthor)  

router.put('/:authorId', updateAnAuthor)

router.delete('/:authorId', deleteAnAuthor)

module.exports = router