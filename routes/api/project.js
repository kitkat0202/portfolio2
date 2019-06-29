const router = require("express").Router()
const projectController = require("../../controllers/Project")

// Match with "api/model2"
router
    .route("/")
    .get(projectController.findAll)
    .post(projectController.create)

// Match with "api/model2/:id"
router
    .route("/:id")
    .get(projectController.findOne)
    .post(projectController.update)
    .delete(projectController.remove)

module.exports = router;