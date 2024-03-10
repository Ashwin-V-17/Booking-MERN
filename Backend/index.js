import express from "express"
import dotenv from "dotenv"
import mongoose  from "mongoose";
import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import hotelsRoutes from "./routes/hotels.js"
import roomsRoutes from "./routes/rooms.js"
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
//middlewares
app.use("/api/auth",authRoutes);
app.use("/api/auth",usersRoutes);
app.use("/api/auth",hotelsRoutes);
app.use("/api/auth",roomsRoutes);
app.listen(8800,()=>{
    connect()
    console.log("connected to Backend");
})