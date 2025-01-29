const router = require("express").Router();
const { createTask, homeTask ,uptoTask , updateTask} = require("../controller/Task");

router.route("/").get(homeTask);
router.route("/create").post(createTask);
router.route("/upto/:id").get(uptoTask);
router.route("/update/:id").put(updateTask);
router.route("/delete/:id").delete(deleteTask);

module.exports = router;
