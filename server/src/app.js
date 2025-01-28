require("dotenv").config();
// import libraries
const express = require("express");
const app = express();
const task = require("./router/Task");
// port of server 
const port = process.env.PORT || 5000;
app.use(express.json());
app.use("/", task);

// use engine ejs (تم التصحيح هنا)
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

// import mongoose connecting and connecting in db
const connecting = require("./config/Mongodb");
connecting();

// listen to server on port 8000 or 5000
app.listen(port, () => {
    console.log(`app is start on ${port}`);
});
