import mongoose from "mongoose";

const connectDB = async()=>{
try {
   await mongoose.connect(process.env.Mongo_url);
   console.log("Database connected succesfully"); 
} catch (error) 
{
     console.error("❌ MongoDB connection failed:", err.message);
}

}


export default connectDB;