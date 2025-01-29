const router = require("express").Router();
const { createTask, homeTask } = require("../controller/Task");

router.route("/create").post(createTask);
router.route("/").get(homeTask);

module.exports = router;
