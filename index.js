const express = require('express')
const app = express()
const cors = require('cors')
const port = 3000
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')

app.use(cors())

app.use ('/books', bookRoutes)
app.use ('/authors', authorRoutes)



app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})  