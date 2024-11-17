import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log("Error");
}
)

const App= express();
App.listen(4000,()=>{
    console.log('Server is running 4000!');
}
);