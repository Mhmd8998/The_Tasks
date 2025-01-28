const TaskModel = require("../model/Task");
const asyncHandler = require("express-async-handler");

module.exports={
  createTask:asyncHandler(async (req,res) => {
    const {title} = req.body.title;
    if(!title){
      return res.status(401).json({message:"title is emptying !"});
    }
    const task = await TaskModel.create({
      title:title;
    })
    return res.status(200).json(task);
  })
}
