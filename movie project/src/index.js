import dotenv from "dotenv"
import cors from "cors"
import express from "express"
import connectDB from "./db/db.js";
import movieRouter from "./router/movie.router.js"

const app= express();

dotenv.config({
    path:'./.env'
});

connectDB();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/movies', movieRouter);

app.get("/",(req,res)=>{
    res.send("welcome to book & Movie api")
});

app.listen(process.env.PORT,(err)=>{
    !err ? console.log(`server started on port ${process.env.PORT}`) : null;
})