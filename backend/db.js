//require("dotenv").config();
//const mongoose = require("mongoose");

//const uri = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
//const uri = process.env.MONGO_URL;

//mongodb://ankit:ankit@localhost:27017/myappdb

//const connectDB = async () => {
//  try {
//    await mongoose.connect(uri, {
//      useNewUrlParser: true,
//      useUnifiedTopology: true,
//    });
//    console.log("MongoDB connected");
//  } catch (err) {
//    console.error("MongoDB connection error:", err);
//    process.exit(1);
//  }
//};

//module.exports = connectDB;


require('dotenv').config();
const mongoose = require("mongoose");
require("dotenv").config();

const uri = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

const connectDB = async () => {
    try {
//        await mongoose.connect(process.env.MONGO_URL, {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connectDB;
