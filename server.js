const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();

const app = express();
const port = 3000;
const connectDB = require("./backend/DB/db");
connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on htpps://localhost :${port}`);
    });
});