const asyncHandler = require('express-async-handler');
const JobModel = require('../Models/JobModel');

const Create = asyncHandler( async(req,res)=>{
    try{
     const newJob = await JobModel.create(req.body)
 
     res.status(201).json(newJob);
    }catch(error){
     res.status(500).json({ message: 'Job Creation failed', error: error.message });
    }
})


const GetAll = asyncHandler(async(req,res)=>{
    try{
        const allJob = await JobModel.find();

        res.status(201).json(allJob);
    }catch(err){
        res.status(500).json({message : "Error in fetching jobs", error:err.message});
    }
})

const UpdateJob = asyncHandler(async(req,res)=>{
    try{
        const {id} = req.params;
        const editJob = await JobModel.findByIdAndUpdate(id,req.body);

        res.status(201).json(editJob);
    }catch(err){
        res.status(500).json({message : "Error in updateing jobs", error:err.message});
    }
})

module.exports = {Create,GetAll,UpdateJob}