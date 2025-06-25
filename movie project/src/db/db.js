import mongoose from "mongoose";

const connectDB = async ()=>{
    try{
        const connectionres= await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected', `MongoDB Host ${connectionres.connection.host}`);
        
    }
    catch(err){
        console.log('MongoDB connection Error',err);
        process.exit(1);
    }
}

export default connectDB