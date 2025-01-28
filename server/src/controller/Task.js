const TaskModel = require("../model/Task");
const asyncHandler = require("express-async-handler");

module.exports={
  homeTask : asyncHandler(async (req,res)=>{
    res.render("todo");
  }),
  createTask:asyncHandler(async (req,res) => {
    const {title} = req.body;
   /* if(!title){
      return res.status(401).json({message:"title is emptying !"});
    }*/
    const task = await TaskModel.create({
      title
    })
    return res.redirect("/");
  })
}
