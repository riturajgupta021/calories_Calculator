require("dotenv").config()
const express = require("express")
const cors = require("cors")
const db = require("./config/db")
const app = express()

const  PORT = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.listen(PORT, () => {
    db()
    console.log(`Server starts on port ${PORT}`)
})