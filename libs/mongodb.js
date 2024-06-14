import mongoose from "mongoose";

const connectMongoDB=async ()=>{
    try{
        // const mongoURI = 'mongodb://127.0.0.1:27017/jobTracker';
        const mongoURI='mongodb+srv://barkhayadav125:VJfD5TmrGNDocDcF@cluster0.nsqca5u.mongodb.net/jobTracker'
        await mongoose.connect(mongoURI);
       console.log("Connected to MongoDB")
    }catch(err){
        console.log(err);
    }
}

export default connectMongoDB;