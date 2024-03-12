import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose";
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import hotelsRoutes from "./routes/hotels.js"
import roomsRoutes from "./routes/rooms.js"
import cookieParser from "cookie-parser";
const app=express();
dotenv.config()
const connect = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB.");
    }
    catch(error)
    {
      throw error;
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected!");
})
mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected!");
})
app.use(cookieParser());
app.use(express.json());
//middlewares
app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/hotels",hotelsRoutes);
app.use("/api/rooms",roomsRoutes);
app.use((err,req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
})
app.listen(8800,()=>{
    connect()
    console.log("connected to Backend");
})