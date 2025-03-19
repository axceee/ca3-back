import mongoose from "mongoose";
import User from "../models/user.models.js";

const registerUser = async function (req,res) {
    const {username,email,password} = req.body
    if (!username){
        return res.status(401).json({msg:'username cannot be empty'})
    }
    if (!email){
        return res.status(401).json({msg:'email cannot be empty'})
    }
    if (password.length>16 || password.length<=8){
        return res.status(401).json({msg:'Password length should be greater than 8 or less than or equal to 16'})
    }

    const newUser = new User({
        username,
        email,
        password
    })

    await newUser.save()
    return res.status(201).json({msg:'user created'})

}

const getUsers = async function (req,res) {
    const users = User.find()
    res.status(200).json({msg:"users found",users:users})
}

export {registerUser,getUsers}