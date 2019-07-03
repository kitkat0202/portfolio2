// Dependencies
const express = require("express")
const mongoose = require("mongoose")
const routes = require("./routes")

const app = express()
const PORT = process.env.PORT || 8080

// Define middleware
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

// Add routes, both API and views
app.use(routes)

// Connect to Mongo DB
const db = process.env.MONGODB_URI || require("./config/keys").MONGODB_URI

mongoose
    .connect(db, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
    .then(() => console.log("MongoDB Connected..."))
    .catch(err => console.log(`error: ${err}`))



// Start the server
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT} link to server is: http://localhost:${PORT}`)
})