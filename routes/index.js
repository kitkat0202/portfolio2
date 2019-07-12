
const apiRouters = require("./api")
const express = require("express")
const router = express.Router()

// API Routes
router.use("/api", apiRouters)

// If no API routes are hit, send the React app
// router.use(function(req, res) {
//     res.sendFile(path,join(__dirname, "../client/build/index.html"))
// })



module.exports = router