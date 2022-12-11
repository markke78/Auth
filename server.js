const express = require("express");
const app = express();

//This tells the server to use there own port if they want
const PORT = process.env.PORT || 4000;
const mongoose = require("mongoose");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/post");

//We are using this so that we can use .env file because we want certain data to be confidential
require('dotenv').config();

//Parsing incoming values
app.use(express.json());
//throught this middleware you can connect to your frontend application
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI, (error) => {
    if (error) {
        console.error("There was an error", error);
    }else {
        console.log("Connected to the database");
    }
})

// app.get("/", (req, res) => {
//     return res.send("Endopoint are here!");
// })

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/posts', postRoutes)

app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
})

