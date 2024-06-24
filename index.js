const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const port = 3000
const bookRoutes = require('./routes/bookRoutes')
const userRoutes =require("./routes/userRoutes")
const authorRoutes = require('./routes/authorRoutes')
const authRoutes = require("./routes/authRoutes")

app.use(cors({
    credentials:true,
    origin:true
  }))
app.use(express.json());
app.use(cookieParser())
app.use ('/books', bookRoutes)
app.use ('/authors', authorRoutes)
app.use("/users", userRoutes )
app.use("/auth", authRoutes )

main().then(()=>console.log("connected")).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb+srv://krishna6athi:1eZS2CckJsmnw81h@cluster0.f2j0nxq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
}

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})  