require("dotenv").config();
// import libraries
const express = require("express");
const path = require("path");
const app = express();
const task = require("./router/Task");
const methodOverride= require("method-override");
// port of server 
const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'))
// use engine ejs
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, 'views')); // تحديد مسار مجلد views بشكل صحيح

// Use task router
app.use("/", task);

// import mongoose connecting and connecting in db
const connecting = require("./config/Mongodb");
connecting();

// listen to server on port 8000 or 5000
app.listen(port, () => {
    console.log(`app is start on ${port}`);
});
