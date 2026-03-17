
//IMPORTS MONGOOSE LIBRARY
const mongoose = require("mongoose");


const mongoDB = async ()={
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
