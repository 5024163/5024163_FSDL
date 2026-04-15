const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/students", studentRoutes);

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/fsdl_exp9")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// home route
app.get("/", (req, res) => {
    res.send("FSDL Exp 9 Working Successfully");
});

// start server
app.listen(3000, () => {
    console.log("Server running on port 3000");
});