require("dotenv").config();
const mongoose = require("mongoose");
const url = process.env.URL_DB;

const conecting = ()=>{
  mongoose.connect(url).then(() => console.log("connect db"))
}


module.exports = conecting;
