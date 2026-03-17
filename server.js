const express = require("express");
const dotenv =require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoute = require("./routes/authRoutes.js");

dotenv.config();

connectDB();

const app =  express();


app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
 res.send("api is runing");


});

app.use("/api/auth", authRoute);


const PORT = process.env.PORT|| 5000;

app.listen (PORT,()=>{
    console.log(`SERVER RUNING ON PORT ${PORT}`);
});
