const express = require('express');
const mongoose = require('mongoose');
const app = express();
const UserRouter = require("./Routes/UserRoute");
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables from .env file

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('Connected to MongoDB...'))

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get("/", (req, res) => {
    res.send("Api Is Running...!!");
})

app.use("/Users", UserRouter);

app.listen(3000,()=>{
    console.log('Server is running on port 3000...');
});

module.exports = app;