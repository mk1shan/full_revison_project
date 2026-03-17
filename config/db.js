
//IMPORTS MONGOOSE LIBRARY
const mongoose = require("mongoose");
const dns = require('dns');

// Fix for strict restrictive ISP / WSL / Windows DNS returning ECONNREFUSED on SRV queries
dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    }

    catch (error){
        console.error('databse connection failed',error.message);
        process.exit(1);
    }

}

module.exports = connectDB;
