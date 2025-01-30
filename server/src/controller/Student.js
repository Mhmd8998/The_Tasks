const StudentModel = require("../model/Student");
const asyncHandler = require("express-async-handler");

module.exports = {
  getStudent:asyncHandler(async (req,res)=>{
    const students = await StudentModel.find();
    return res.render("student",{students});
  }),
  create:asyncHandler(async (req,res)=>{
    const {name,age}= req.body;
    await StudentModel.create({
      name,
      age
    });
    return res.redirect("/student");
  })
}
