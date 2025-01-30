const router = require("express").Router();
const {getStudent, create} = require("../controller/Student");

router.route("/").get(getStudent);
router.route("/create").post(create);

module.exports= router;
