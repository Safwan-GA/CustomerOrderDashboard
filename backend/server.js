import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import mongoose from 'mongoose';

import Orders from "./models/Orders.js";
import Users from './models/Users.js';

// export const getTheNumberOfRecordsinOrder=async(req,res)=>{
    
// }

// import {getTheNumberOfRecordsinOrder} from './controllers/orderController.js'
// import {getTheNumberOfRecordsInUser} from './controllers/userController.js'

dotenv.config();


const startServer = async () => {
  await connectDB();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get('/', (req, res) => {
    res.send("Backend has started");
  });


  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server up on ${PORT}`));
  console.log("getting the result from the database")
  const result=await Orders.find({})
  console.log(result.length)
  const user=await Users.find({})
  console.log(user.length)

//   getTheNumberOfRecordsInUser();
//   getTheNumberOfRecordsinOrder();
};

startServer();
