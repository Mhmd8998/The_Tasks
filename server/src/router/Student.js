const router = require("express").Router();
const {getStudent, create,upto, update} = require("../controller/Student");

router.route("/").get(getStudent);
router.route("/create").post(create);
router.route("/upto/:id").get(upto);
router.route("/update/:id").put(update);

module.exports= router;
