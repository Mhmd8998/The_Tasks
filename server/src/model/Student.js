const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  }
});

const StudentModel= mongoose.model("Student",StudentSchema);

module.exports = StudentModel;
