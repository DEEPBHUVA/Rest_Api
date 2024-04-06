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

Router.post("/", async (req, res) => {
    try {
        const data = await User.create(req.body);
        res.json({ message: "User Inserted Successfully!!", data });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

Router.put("/:id",async(req, res) => {
    try{
        const data = await User.findByIdAndUpdate(req.params.id, req.body);
        res.json({ message: "Ueser Updated Successfully!!", data });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
})

Router.delete("/:id",async(req, res) => {
    try{
        const data = await User.findByIdAndDelete(req.params.id);
        res.json({ message: "Ueser Deleted Successfully!!", data });
    }
    catch (err) {
        res.status(500).json({ error: err.message });
    }
   
})

module.exports = Router;