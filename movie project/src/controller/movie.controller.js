import { Movie } from "../models/movie.model.js";

// post 
// creat movie
export const createMovie = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: false,
                error: 'No Image Uplode!!'
            })
        }
        const movie = await Movie.create({
            ...res.body,
            imagePath: req.file.path
        })
        // const movie = await Movie.create(req.body);
        // res.status(201).json({
        //     success:true,
        //     data:movie
        // })
    } catch (err) {
        res.status(400).json({
            success: false,
            err: err.message
        })
    }
}

// get
export const getMovie = async(req,res)=>{
    try{
        const movies = await Movie.find();
        res.status(200).json({
            success:true,
            count:movies.length,
            data:movies,
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}

// put
export const updateMovie =async(req,res)=>{
    try{
        const movie= await Movie.findByIdAndUpdate(req.params.id , req.body , {
            new:true,
            runValidators:true
        });

        if(!movie){
            return res.status(404).json({
                success:false,
                error:"Movie Not Found"
            });
        }
        res.status(200).json({
            success:true,
            data:movie
        })
    }catch(err){
        res.status(400).json({
            success:false,
            error:err.message
        })
    }
}

// delete
export const deleteMovie = async(req,res)=>{
    try{
        const movie = await Movie.findByIdAndDelete(req.params.id);
        if(!movie){
            return res.status(404).json({
                success:false,
                error:'Movie Not Found'
            })
        }
        res.status(200).json({
            success:true,
            data:{}
        })
    }catch(err){
        res.status(500).json({
            success:false,
            error:"Server Error"
        })
    }
}