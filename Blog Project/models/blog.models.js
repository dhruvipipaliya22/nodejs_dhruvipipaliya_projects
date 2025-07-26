import mongoose from "mongoose";

export const blogSchema = new mongoose.Schema({
    title:String,
    images:String,
    body:String,
    created:{
        type:Date,
        default:Date.now()
    }
})
export default mongoose.model("Blog",blogSchema);