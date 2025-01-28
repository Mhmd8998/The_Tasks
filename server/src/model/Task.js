const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true,
    minlength:5
  }
},{timestamps:true});

const TaskModel = mongoose.model("Task",TaskSchema);

module.exports = TaskModel;
