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
  }),
  upto:asyncHandler(async (req,res)=>{
    const studentid= req.params.id;
    const students = await StudentModel.find();
    return res.render("upto",{students,studentid});
  }),
  update:asyncHandler(async (req,res)=>{
    const studentid= req.params.id;
    const {name,age} = req.body
    await StudentModel.updateOne({_id:studentid},{name,age});
    res.redirect("/student");
    
  })
}
