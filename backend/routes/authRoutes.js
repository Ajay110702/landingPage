import express from 'express';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();


router.post('/signup',async(req,res)=>{
    const {name,email,password}=req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing fields" });
    }

    const hashedPassword=await bcrypt.hash(password,10);

    try{
        const user=await User.create({
            name,
            email,
            password:hashedPassword,
        });
        console.log(req.body);
        res.json({message:"User created"});
    }catch{
        res.status(400).json({message:"User already exists"});
    }
});

//sign in

router.post("/signin",async(req,res)=>{
    const {email,password}=req.body;

    const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "Invalid credentials" });

  const isMatch=await bcrypt.compare(password,user.password);

  if(!isMatch)
    return res.status(400).json({message:"Invalid Credentials"});

  const token=jwt.sign({id:user._id},process.env.JWT_SECRET);

   res.json({
    token,
    user: { id: user._id, name: user.name, email: user.email },
  });
})

export default router;