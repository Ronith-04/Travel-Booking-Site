import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview=async (req,res)=>{
    try{
        // console.log(req.params)
        const tourId=req.params.tourId;
        const newReview= new Review({
            username:req.body.username,
            reviewText:req.body.reviewText,
            rating:req.body.rating
        })

        console.log("Request parameters:", req.params);
        console.log("Request body:", req.body);

    
        console.log(1,newReview)
        const savedReview=await newReview.save();
        console.log(2,savedReview)

        // after creating a new review now update the reviews array of the tour
        await Tour.findByIdAndUpdate(tourId,{
            $push:{reviews:savedReview._id}   
        })
        console.log(4)
        res.status(200).json({success:true,message:"Review Submitted", data:savedReview})
    }
        catch(error){
        console.error("Failed to save review:", error);
        res.status(500).json({success:false,message:"Review failed to submit"})

    }

}