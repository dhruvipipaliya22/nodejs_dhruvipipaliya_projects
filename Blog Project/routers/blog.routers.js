import express from 'express'
import Blog from '../models/blog.models.js'

const router = express.Router();

router.get("/" , async(req,res)=>{
    const blogs = await Blog.find({});
    res.render("blogs/index",{blogs})
});