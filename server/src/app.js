const express = require("express");
const app = express();
//port of server 
const port = process.env.PORT||5000;
//import mongoose connecting and connecting in db
const conecting = require ("./config/Mongodb");
conecting();



//losten to server on port 8000||5000
app.listen(port,()=>{
  console.log(`app is start on ${port}`);
})
