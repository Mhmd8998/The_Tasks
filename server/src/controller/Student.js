const StudentModel = require("../model/Student");
const asyncHandler = require("express-async-handler");

module.exports = {
  getStudent:asyncHandler(async (req,res)=>{
    const students = await StudentModel.find();
    //return render({students});
  }),
  create:asyncHandler(async (req,res)=>{
    const {name,age}= req.body;
    const student = await StudentModel.create({
      name,
      age
    });
    return redirect("/");
  })
}
