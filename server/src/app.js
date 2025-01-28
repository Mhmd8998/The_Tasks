require("dotenv").config();
//import libraries
const express = require("express");
const app = express();
const task = require("./router/Task");
//port of server 
const port = process.env.PORT||5000;

app.use("/",task);
//use engin ejs
app.set("view engin","ejs");
app.use(express.urlencoded({extended:true}));
//import mongoose connecting and connecting in db
const conecting = require ("./config/Mongodb");
conecting();

//listen to server on port 8000||5000
app.listen(port,()=>{
  console.log(`app is start on ${port}`);
})
