import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRouter from "./routes/user.route.js";
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log("Error");
}
)

const app= express();
app.listen(4000,()=>{
    console.log('Server is running 4000!');
}
);

app.use('/api/user',userRouter);