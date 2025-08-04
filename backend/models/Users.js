import mongoose from "mongoose";
import { ref } from "process";

const { Schema, model, Types } = mongoose;

const userSchema=mongoose.Schema({
    id: {type:Number, required:true, unique:true, ref:'Orders'},	
    first_name:{type:String, required:true},
    last_name: {type:String, required:true},
    email:{type:String, required:true},
    age:{type:Number, required:true},
    gender:{type:String,enum: ['M', 'F'], required:true},
    state:{type:String, required:true},
    street_address:{type:String, required:true},
    postal_code:{type:String, required:true},
    city:{type:String, required:true},
    country:{type:String, required:true},
    latitude:{type:Number, required:true},
    longitude:{type:Number, required:true},
    traffic_source:{type:String, required:true}
    },
    { timestamps: true, collection: 'Users' }
);

export default model('Users', userSchema);