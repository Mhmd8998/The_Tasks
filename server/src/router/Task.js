const router = require("express").Router();
const {createTask} = require("../controller/Task");
router.route("create").post(createTask);

module.exports= router;
