import dotenv from 'dotenv'
import cors from 'cors'
import router from './router/movie.router.js'
import express from 'express'
import connectDB from './db/db.js';

const app = express();

dotenv.config({path:"./.env"});

connectDB();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}));

app.use(express.urlencoded({extended:true}))
app.use(express.json());

app.use("/movies",router)

app.get("/", (req,res)=>{
    res.send("Movie API",router)
})

app.listen(process.env.PORT , (err)=>{
    !err ? console.log(`server start on port ${process.env.PORT}`) : null;
});
