const TaskModel = require("../model/Task");
const asyncHandler = require("express-async-handler");

module.exports = {
    homeTask: asyncHandler(async (req, res) => {
        const tasks = await TaskModel.find();
        res.render("todo",{tasks});
    }),
    createTask: asyncHandler(async (req, res) => {
        const { title } = req.body;
        const task = await TaskModel.create({
            title
        });
        return res.redirect("/");
    }),
    uptoTask:asyncHandler(async (req,res)=>{
        const tasks = await TaskModel.find();
        const tasksid = req.params.id
        res.render("todo",{tasks,tasksid});
    }),
    updateTask:asyncHandler(async (req,res)=>{
        const tasksid = req.params.id;
        const tasks = await TaskModel.findByIdAndUpdate(tasksid,{title:req.body.title});
        return res.redirect("/");
    })
};
