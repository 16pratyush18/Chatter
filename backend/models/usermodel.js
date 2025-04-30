import mongoose from "mongoose";

const userModel= new Mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    userName:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    gender:{
        type:String,
        enum:["male","female"],
        required:true,
    },
    profilePhoto:{
        type:String,
        default:"default.jpg",
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
});
export const User= mongoose.new("User", userModel);
