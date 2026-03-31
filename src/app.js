import express, { urlencoded } from "express";
import cors from "cors"
import cookieParser from "cookie-parser"; 

const app = express()

app.use(cors({
    origin : process.env.CORS_ORIGIN
}))

//add limit when we got data in json from fronent
app.use(express.json({limit :"16kb"}))

//for url data handiling some times in url there will be + or % so that we use this setting 
app.use(express.urlencoded({extended: true, limit: "16kb"}))

app.use(express.static("public"))

app.use(cookieParser())


export {app}
