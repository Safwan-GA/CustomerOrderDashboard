import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://safwan:Ew32xqC5eMv5dLan@cluster01.heraijv.mongodb.net/CustomerOrder?retryWrites=true&w=majority&appName=cluster01");
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB error:', err.message);
    process.exit(1);
  }
};
