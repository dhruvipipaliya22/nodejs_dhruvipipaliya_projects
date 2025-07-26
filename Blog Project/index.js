import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'
import blogRouters from './routers/blog.routers.js'
import methodOverride from 'method-override'

const app= express();

dotenv.config({path:"./.env"});
connectDB();

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.use(express.json());

app.use("/blogs",blogRouters);

app.get("/" , (req,res)=>{
    res.redirect("/blogs")
})
const port = process.env.PORT || 3000;
app.listen(port , ()=>{console.log(`server started on port ${port}`)});