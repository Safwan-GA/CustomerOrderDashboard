import mongoose from "mongoose";

const { Schema, model, Types } = mongoose;

const OrderSchema=mongoose.Schema({
    order_id: {type:Number, required:true, unique:true},	
    user_id:{type:Number, required:true},
    status: {type:String, required:true},
    gender:{type:String,enum: ['M', 'F'], required:true},
    created_at:{type:String, required:true},
    returned_at:{type:String, required:true},
    shipped_at:{type:String},
    delivered_at:{type:String},
    num_of_item:{type:Number, required:true},
    },
    { timestamps: true, collection: 'Orders' }
);

export default model('Orders', OrderSchema);