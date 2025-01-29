const router = require("express").Router();
const { createTask, homeTask ,uptoTask , updateTask} = require("../controller/Task");

router.route("/create").post(createTask);
router.route("/").get(homeTask);
router.route("/upto/:id").get(uptoTask);
router.route("/update/:id").put(updateTask);

module.exports = router;
