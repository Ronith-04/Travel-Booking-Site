import Tour from '../models/Tour.js'

// create new tour
export const createTour=async(req,res)=>{
    const newTour=new Tour(req.body)
    try{
        const savedTour=await newTour.save()
        res
        .status(200)
        .json({
            success:true,
            message:'Successfully created new tour',
            data:savedTour
        });
    }
    catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:'Failed to create. Try again', 
        })
    }
}

// update tourr
export const updateTour=async(req,res)=>{

    const id=req.params.id;
    try{
        const updatedTour= await Tour.findByIdAndUpdate(id,{
            $set:req.body
        },{new:true})
    
        res
        .status(200)
        .json({
            success:true,
            message:'Successfully updated tour',
            data:updatedTour
        });
    }catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:'Failed to update. Try again', 
        })

    }
};
// delete tourr
export const deleteTour=async(req,res)=>{
    const id=req.params.id;
    try{
        const deletedTour= await Tour.findByIdAndDelete(id);
    
        res
        .status(200)
        .json({
            success:true,
            message:'Successfully deleted tour',
            data:deletedTour
        });
    }catch(error){
        res
        .status(500)
        .json({
            success:false,
            message:'Failed to delete. Try again', 
        })

    }
    
};

// getSingle tourr
export const getSingleTour=async(req,res)=>{
    const id=req.params.id;
    // console.log(id);
    try{
        const tour=await Tour.findById(id).populate('reviews');
        // console.log(tour);
        res
        .status(200)
        .json({
            success:true,
            message:'Successfully fetched tour details',
            data:tour
        });
    }catch(error){
        res
        .status(404)
        .json({
            success:false,
            message:'Tours not found!', 
        })

    }
};

// getAll tourr
export const getAllTour=async(req,res)=>{
    // for pagination
    const page=parseInt(req.query.page);
    // console.log(page)
    try{
        const tours= await Tour.find({})
        .populate('reviews')
        .skip(page*8)
        .limit(8); 

        res.status(200).json({
            success:true,
            count:tours.length,
            message:'Successfully fetched tour details',
            data:tours
        })}catch(error){
            res
            .status(404)
            .json({
                success:false,
                message:'Tours not found!', 
            })
        }
};

// get tour by search
export const getTourBySearch= async(req,res)=>{
    const city=new RegExp(req.query.city,'i'); /*here i means case sensitive*/
    const distance=parseInt(req.query.distance);
    const maxGroupSize=parseInt(req.query.maxGroupSize);
    // console.log(1,city,distance,maxGroupSize)
    try{
        //here gte means greater than equal
        const tours= await Tour.find({
            city:city,
            distance:{$gte:distance}, 
            maxGroupSize:{$gte:maxGroupSize}
        })
        .populate('reviews')
        // console.log(2,tours)
        res.status(200).json({
            success:true,
            message:'Successfull',
            data:tours
        })

    }catch(error){
        res.status(404)
            .json({
                success:false,
                message:'Tours not found!', 
            })

    }
};

// get featured tourr
export const getFeaturedTours=async(req,res)=>{
    try{
        const tours= await Tour.find({featured:true})
        .populate('reviews')
        .limit(8); 

        res.status(200).json({
            success:true,
            message:'Successfully fetched tour details',
            data:tours
        })}catch(error){
            res
            .status(404)
            .json({
                success:false,
                message:'Tours not found!', 
            })
        }
};

// get tour counts
export const getTourCount=async(req,res)=>{
    try{
        const tourCount=await Tour.estimatedDocumentCount();
        res.status(200).json({
            success:true,
            message:'Successfully fetched tour count',
            data:tourCount
        })}catch(error){
            res
            .status(404)
            .json({
                success:false,
                message:'Tours not found!', 
            })
        }
}