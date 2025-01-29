const TaskModel = require("../model/Task");
const asyncHandler = require("express-async-handler");

module.exports = {
    homeTask: asyncHandler(async (req, res) => {
        const tasks = await TaskModel.find();
        res.render("todo",{tasks});
    }),
    createTask: asyncHandler(async (req, res) => {
        const { title } = req.body;
        await TaskModel.create({
            title
        });
        return res.redirect("/");
    }),
    uptoTask:asyncHandler(async (req,res)=>{
        const tasks = await TaskModel.find();
        const tasksid = req.params.id
        res.render("todoEdit",{tasks,tasksid});
    }),
    updateTask:asyncHandler(async (req,res)=>{
        const tasksid = req.params.id;
        await TaskModel.findByIdAndUpdate(tasksid,{title:req.body.title});
        return res.redirect("/");
    }),
    deleteTask:asyncHandler(async (req,res)=>{
        const taskid= req.params.id;
        await TaskModel.deleteOne({_id:taskid});
        return res.redirect("/");
    })
};
