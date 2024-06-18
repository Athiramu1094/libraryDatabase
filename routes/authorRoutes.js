const express = require('express')
const { gettAllAuthors, getAnAuthor, addAnAuthor, updateAnAuthor, deleteAnAuthor } = require('../controllers/authorControllers')
const router = express.Router()


router.get('/', gettAllAuthors)

router.get('/:authorId', getAnAuthor)

router.post('/', addAnAuthor)  

router.put('/:authorId', updateAnAuthor)

router.delete('/:authorId', deleteAnAuthor)

module.exports = router