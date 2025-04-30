import { User } from "../models/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const register=async(req,res)=>{
    try{
        const {fullName, userName, password, confirmPassword, gender}=req.body;
        if(!fullName||!userName||!password||!confirmPassword||!gender){
            return res.status(400).json({message:"Please fill in all fields"});
        }
        if(password!==confirmPassword){
            return res.status(400).json({message:"Password do not match"});
        }
        const user=await User.findOne({userName});
        if(user){
            return res.status(400).json({message:"Username already exist my different"});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const maleProfilePhoto='https://avatar.iran.liara.run/public/13?username=${username}';
        const femalemaleProfilePhoto='https://avatar.iran.liara.run/public/66?username=${username}';
        await User.create({
            fullName,
            userName,
            password:hashedPassword,
            profilephoto: gender==="male"? maleProfilePhoto:femalemaleProfilePhoto,
            gender,
        });
        return res.status(201).json({
            message:"Account created successfully",
            success:true
        })
    }catch(error){
        console.log(error);
    }
};

export const login= async(req,res)=>{
  try{
    const {username, password}= req.body;
    if(!userName||!password||!confirmPassword||!gender){
        return res.status(400).json({message:"Please fill in all fields"});
    };
    const user=await User.findOne({userName});
    if(!user){
        return res.status(400).json({
        message:"Incorrect username or password",
        success:false
    })
    };
    const isPassword= await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
        return res.status(400).json({
            message:"Incorrect username or password",
            success:false
        })
    };
    const tokenData={
        userId:user._id
    },
    const token= await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {expiresIn:'Id'});
    return res.status(200).cookie("token", token, {maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json({
        _id:user._id,
        username:user.username,
        fullName:user.fullName,
        profilePhoto:user.profilePhoto
    })
   }catch(error){
    console.log(error);
  }
  export const getOtherUsers=async(req,res)=>{
    try{

    }catch(error){
        console.log(error);
    }
  }
}