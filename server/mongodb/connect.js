import mongoose from "mongoose";


const connectDB = (url) =>{
    mongoose.set('strictQuery',true);//useful for search func
    mongoose.connect(url)
    .then(()=> console.log("Database Connected"))
    .catch((err)=>console.log(err))
}

export default connectDB;