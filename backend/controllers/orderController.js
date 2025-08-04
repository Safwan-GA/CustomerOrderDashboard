import Orders from "../models/Orders.js";

export const getTheNumberOfRecordsinOrder=async(req,res)=>{
    result=await Orders.find({})
    console.log(result.length)
    res.send(result)
}