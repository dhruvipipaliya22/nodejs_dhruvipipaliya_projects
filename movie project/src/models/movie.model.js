import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true , "Movie title is required"],
        trim:true
    },
    director:{
        type:String,
        required:[true, "Movie director is reqired"],
        trim:true
    },
    releaseYear:{
        type:Number,
        required:[true, "Movie releaseYear reqired"],
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:10,
    },
    intheaters:{
        type:Boolean,
        default:true
    },
    thumbnail:{
        type:String,
        required:[true,"Thumbnail images URL is required"]
    }
},{timestamps:true});

export const Movie=mongoose.model("Movie",movieSchema);