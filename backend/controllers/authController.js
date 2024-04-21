import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';



// user registartion
export const register= async(req,res)=>{
    try{
        // hashing password
        // const user=await User.find({email:req.body.email});
        // console.log(user)
        // if(user){
        //     return res.status(400).json({
        //         success:false,
        //         message:"User already exists"
        //     })
        // }
        const existingUser = await User.findOne({ email: req.body.email  });

    if (existingUser) {
        return res.status(400).json({
            success: false,
            message: "Email already exists"
        });
    }

        const salt=bcrypt.genSaltSync(10);
        const hash =bcrypt.hashSync(req.body.password,salt);


        const newUser= new User({
            username:req.body.username,
            email:req.body.email,
            password:hash,
            phone:req.body.phone,
            city:req.body.city,
            photo:req.body.photo,
        })
        await newUser.save();
        res.status(200).json({
            success:true,
            message:"Successfully created"
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:"Failed to register user! Try again"
        })

    }
}

// user login
export const login= async(req,res)=>{

    const email=req.body.email;
    
    try{
        // console.log(123)
        const user=await User.findOne({email});
       
        // if user doesnt exist
        if(!user){
            return res.status(404).json({success:false,message:
                "User not found!"})
        }
        // if user exists and check the password or compare the password
        const checkCorrectPassword = await bcrypt.compare(req.body.password,user.password);
        if(!checkCorrectPassword){
            return res.status(401).json({success:false,message:
                "Incorrect email or  password!"})
        }

        const {password, role, ...rest}=user._doc

        // create jwt token
        const token=jwt.sign({
            id:user._id,role:user._role},
            process.env.JWT_SECRET_KEY,
            {expiresIn:"15d"})

        // set token in the browser cookies and send the response to the client 
        res
        .cookie('accessToken',token,{
            httpOnly:true,
            expires:token.expiresIn
        })
        .status(200)
        .json({
            token,
            data:{...rest},
            role,
        })
    }catch(error){
        res
        .status(500)
        .json({
            success:false,
            message: error.message
        })

        
    }
}