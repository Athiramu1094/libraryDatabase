const express = require('express')
const { gettAllAuthors, getAnAuthor, addAnAuthor, updateAnAuthor, deleteAnAuthor } = require('../controllers/authorControllers')
const router = express.Router()


router.get('/', gettAllAuthors)

router.get('/:authorid', getAnAuthor)

router.post('/', addAnAuthor)  

router.put('/:authorid', updateAnAuthor)

router.delete('/:authorid', deleteAnAuthor)

module.exports = router