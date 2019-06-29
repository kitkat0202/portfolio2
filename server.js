// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

const app = express()
const PORT = process.env.PORT || 8080

// Define middleware
app.use(express.json())

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.statis("client/build"))
}

// Connect to Mongo DB
const db = process.env.MONGODB_URI || require("./config/keys").MONGODB_URI

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(`error: ${err}`))

// Add routes, bothe API and views
app.use(routes)

// Start the server
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT} link to server is: http://localhost:${PORT}`)
})