import mongoose from "mongoose";

const MovieSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Movie title is required"],
        trim:true
    },
    director:{
        type:String,
        require:[true,"Movie director is required"],
        trim:true
    },
    releaseYear:{
        type:Number,
        require:[true,"Movie releaseYear is required"],
    },
    rating:{
        type:Number,
        default:0,
        min:0,
        max:10
    },
    intheaters:{
        type:Boolean,
        default:true
    },
    thubnail:{
        type:String,
        require:[true,"Thubnail images URL is required"]
    }
},{timestamps:true});

export const Movie = mongoose.model("Movie",MovieSchema);