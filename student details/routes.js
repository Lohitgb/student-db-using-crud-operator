const express = require("express");
const userModel = require("./models");
const app = express();

//...
app.post("/add_user", async (req, res) => {
    const User = new userModel(req.body);

    try{
        await User.save();
        res.send(User);
    } catch (error) {
        res.status(500).send(error);
    }
});

//creating get method

app.get("/users", async (req, res) => {
    const users = await userModel.find({});
    try {
        res.send(users);
    } catch (error) {
        res.status(500).send(error);
    }
});

//update students by id

app.patch("/update/:id", async (req, res) => {
    const userId = req.params.id;
    const updateData = req.body;
    try {
        const updatedUser = await userModel.findByIdAndUpdate(userId, updateData, { new: true });
        res.send(updatedUser);
    } catch (error) {
        res.status(500).send(error);
    }
});


//delete students by id

app.delete("/delete/:id", async (req, res) => {
    const userId = req.params.id;
    try {
        await userModel.findByIdAndDelete(userId);
        res.send("User deleted successfully");
    } catch (error) {
        res.status(500).send(error);
    }
});


module.exports = app;