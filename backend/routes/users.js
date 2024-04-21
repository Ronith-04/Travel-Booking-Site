import express from 'express';
import {updateUser, deleteUser, getSingleUser, getAllUser} from '../controllers/userController.js';
const router=express.Router();
import User from "../models/User.js"
import passport from 'passport';
import "./passport/auth.js"
import jwt from 'jsonwebtoken';
import session from "express-session";

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';


function isLoggedIn(req, res, next) {
    req.user?next():res.sendStatus(401); 
}


// Function to handle the callback from Google authentication
const googleCallback = async (req, res, next) => {
    passport.authenticate("google", { session: false }, async (err, userinfo) => {
      if (err || !userinfo) {
        
    //   console.log(11111)
        return res.redirect("http://localhost:3000"); // Redirect on error or if no user info is provided
      }
    //   console.log(11111)
  
      const { emails, displayName } = userinfo;
      const email = emails[0].value;
      let user = await User.findOne({ email });
    //    console.log(12344)
      if (!user) {
        // console.log(45)
        // Create a new user
        user = await User.create({
          email: email,
          username: displayName,
        });
//   console.log(4567)
        await user.save();
      }

            //   // crate jwt token
            //   const token=jwt.sign({
            //     id:user._id,role:user.role},
            //     process.env.JWT_SECRET_KEY,
            //     {expiresIn:"15d"})

      // Redirect with token in query string (use HTTP-only cookies in production)
      return res.redirect(`http://localhost:3000?id=${user._id}`);
    //   return res.redirect('http://localhost:3000');
    })(req, res, next);
  };

// update User
router.put("/:id",updateUser)

// delete User
router.delete("/:id",verifyUser, deleteUser)

//get single User
router.get("/getUser/:id",getSingleUser)

//get All User
router.get("/",getAllUser)

// google login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"]}));

router.get("/google/callback", googleCallback);

router.get('/google/protected',isLoggedIn,(req,res)=>{
    let name= req.user.displayName;
    res.send(`Welcome ${name}!`)
})

router.use(session({
    secret: 'mysecret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))
router.use(passport.initialize());
router.use(passport.session());
   


export default router;
