import mongoose from "mongoose";
import "dotenv/config"
const connectDb = async (req, res, next) => {
    try {
        const connStr =  await mongoose.connect(process.env.MONGO_URL);
       
       
    } catch (err) {
        console.error("Error connecting to MongoDB", err);
        
    }
};

export default connectDb;