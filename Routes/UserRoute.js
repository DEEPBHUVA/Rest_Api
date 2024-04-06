const express = require('express');
const User = require("../Models/UserModel");
const Router = express.Router();

Router.get("/",async(req, res) => {
    const data = await User.find({});
    res.json(data);
})

Router.get("/:id",async(req, res) => {
    const data = await User.findById(req.params.id);
    res.json(data);
});

Router.post("/",async(req, res) => {
    const data = await User.create(req.body);
    res.json("Ueser Inserted Successfully!!",data);
})

Router.put("/:id",async(req, res) => {
    const data = await User.findByIdAndUpdate(req.params.id, req.body);
    res.json("Ueser Updated Successfully!!",data);
})

Router.delete("/:id",async(req, res) => {
    const data = await User.findByIdAndDelete(req.params.id);
    res.json("Ueser Deleted Successfully!!",data);
})

module.exports = Router;