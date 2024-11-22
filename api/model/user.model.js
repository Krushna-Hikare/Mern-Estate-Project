import mongoose from "mongoose";
const userSchema= new mongoose({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    }
},{timestamp:true});

const User= mongoose.model('User',userSchema);
export default User;