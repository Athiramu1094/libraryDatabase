const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose');
const port = 3000
const bookRoutes = require('./routes/bookRoutes')
const authorRoutes = require('./routes/authorRoutes')

app.use(cors())
app.use(express.json());

app.use ('/books', bookRoutes)
app.use ('/authors', authorRoutes)

main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://krishna6athi:1eZS2CckJsmnw81h@cluster0.f2j0nxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})  