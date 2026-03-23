import mongoose from "mongoose";
//import { DB_NAME } from "./constants";
import connectDB from "./db/index.js";

import dotenv from "dotenv"



dotenv.config ({
    path : './env'
})


connectDB()



// import express from "express";
// const app = express();
// ;(async ()=>{
//     try{
//        await mongoose.connect(`${process.env.MONODB_URL}/${DB_NAME}`)
//        app.on("error" ,(error)=>{ console.console.log("error",error);
//         throw error
//        })

//        app.listen(process.env.port, ()=>{`app is listeining on port ${process.env.port}`})
//     }
//     catch (error){
//         console.error("error",error);
//         throw err
//     }
// })()