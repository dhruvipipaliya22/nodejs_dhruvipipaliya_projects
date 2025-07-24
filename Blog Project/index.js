import express from 'express'
import connectDB from './config/db.js'
import dotenv from 'dotenv'

const app= express();

dotenv.config({path:"./.env"});
connectDB();

app.set('view engine' , 'ejs');
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/blogs",blogRouter);

app.get("/" , (req,res)=>{
    res.redirect("/blogs")
})
const port = process.env.PORT || 3000;
app.listen(port , (err)=>{
    !err ? console.log(`server started on port ${port}`) :null;
});