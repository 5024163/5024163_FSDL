const express = require("express");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");

const app = express();

// middleware
app.use(express.json());

// routes
app.use("/students", studentRoutes);

// MongoDB connection
mongoose.connect("mongodb+srv://vishakhafcrit_db_user:test123@cluster0.wja3clh.mongodb.net/fsdl_exp9?retryWrites=true&w=majority")
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