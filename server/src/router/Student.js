const router = require("express").Router();
const {getStudent, create,upto, update, deleteS} = require("../controller/Student");

router.route("/").get(getStudent);
router.route("/create").post(create);
router.route("/upto/:id").get(upto);
router.route("/update/:id").put(update);
router route("/delete/:id").delete(deleteS)

module.exports= router;
