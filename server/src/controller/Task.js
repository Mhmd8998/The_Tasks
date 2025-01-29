const TaskModel = require("../model/Task");
const asyncHandler = require("express-async-handler");

module.exports = {
    homeTask: asyncHandler(async (req, res) => {
        res.render("todo");
    }),
    createTask: asyncHandler(async (req, res) => {
        const { title } = req.body;
        const task = await TaskModel.create({
            title
        });
        return res.redirect("/");
    })
};
