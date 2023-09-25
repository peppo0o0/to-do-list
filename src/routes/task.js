const express = require("express");
const router = express.Router();

const tasksController = require("../controllers/tasksController");

router.get("/", tasksController.list);

module.exports = router;