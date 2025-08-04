import Users from "../models/Users.js";

export const getTheNumberOfRecordsInUser=async(req,res)=>{
    result=await Users.find({})
    console.log(result.length)
    res.send(result)
}