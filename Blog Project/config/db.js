import mongoose from "mongoose";

const connectDB = async () =>{
    try{
        const connectionreq = await mongoose.connect(`${process.env.MONGODB_URL}`);
        console.log('MongoDB Connected');
    }catch(err){
        console.log('MongoDB Connection Error' , err);
        process.exit(1)
    }
}

export default connectDB