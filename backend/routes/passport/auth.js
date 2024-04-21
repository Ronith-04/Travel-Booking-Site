
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";


// Initialize dotenv configuration immediately
import('dotenv').then(dotenv => {
    dotenv.config();
    //  console.log(process.env.GOOGLE_CLIENT_ID)
    // Define Passport Google OAuth strategy within dotenv promise to ensure it has the variables
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://travel-booking-site.onrender.com/api/v1/users/google/callback"
      },
      function(accessToken, refreshToken, profile, done) {
        console.log(1234567)
        done(null, profile);
      }
    ));
  
    passport.serializeUser((user, done) => {
        console.log(12,user)
      done(null, user);
    });
  
    passport.deserializeUser(async (id, done) => {
        console.log(13,user)
      // Example: const user = await User.findById(id)
      done(null, id); // Adjust according to actual user fetching logic
    });
  });
  